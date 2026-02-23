import dotenv from 'dotenv';

dotenv.config();

const parseOrigins = (value) => {
  if (!value) return ['http://localhost:5173'];
  return value
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
};

export const config = {
  port: Number(process.env.PORT || 8787),
  env: process.env.NODE_ENV || 'development',
  contactInboxEmail: process.env.CONTACT_INBOX_EMAIL || '',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: Number(process.env.SMTP_PORT || 587),
  smtpSecure: process.env.SMTP_SECURE === 'true',
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpFrom: process.env.SMTP_FROM || '',
  allowedOrigins: parseOrigins(process.env.ALLOWED_ORIGINS),
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || '',
};

export const mailConfigured =
  Boolean(config.contactInboxEmail) &&
  Boolean(config.smtpHost) &&
  Boolean(config.smtpUser) &&
  Boolean(config.smtpPass) &&
  Boolean(config.smtpFrom);
