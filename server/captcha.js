import { config } from './config.js';

export const verifyCaptcha = async (token, remoteIp) => {
  if (!config.turnstileSecretKey) {
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({
    secret: config.turnstileSecretKey,
    response: token,
    remoteip: remoteIp || '',
  });

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return Boolean(data.success);
};
