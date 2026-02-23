import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config, mailConfigured } from './config.js';
import { contactSchema } from './validation.js';
import { sendContactEmail, transporter } from './mailer.js';
import { verifyCaptcha } from './captcha.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(express.json({ limit: '32kb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || config.allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error('Not allowed by CORS'));
    },
  }),
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please try again later.' },
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: config.env });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Invalid form data.' });
    return;
  }

  if (!mailConfigured) {
    res.status(503).json({ message: 'Mail service is not configured.' });
    return;
  }

  const isCaptchaValid = await verifyCaptcha(parsed.data.captchaToken, req.ip);
  if (!isCaptchaValid) {
    res.status(400).json({ message: 'Captcha verification failed.' });
    return;
  }

  try {
    await sendContactEmail(parsed.data);
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Mail send failed:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

if (config.env === 'production') {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      next();
      return;
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const start = async () => {
  if (mailConfigured) {
    try {
      await transporter.verify();
      console.log('SMTP connection verified.');
    } catch (error) {
      console.warn('SMTP verification failed:', error.message);
    }
  }

  app.listen(config.port, () => {
    console.log(`API server running on http://localhost:${config.port}`);
  });
};

start();
