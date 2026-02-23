import nodemailer from 'nodemailer';
import { config } from './config.js';

export const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  secure: config.smtpSecure,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
});

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const text = [
    'New portfolio contact submission:',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2>New portfolio contact submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  return transporter.sendMail({
    from: config.smtpFrom,
    to: config.contactInboxEmail,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text,
    html,
  });
};
