# Portfolio

Full-stack portfolio app with a React frontend and an Express contact API.

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

1. Install dependencies:
   `npm ci`
2. Create env file:
   `cp .env.example .env`
3. Set SMTP/contact values in `.env`
4. Run frontend + backend in dev:
   `npm run dev`

## Scripts

- `npm run dev` runs API + Vite dev server
- `npm run dev:web` runs only Vite
- `npm run dev:api` runs only Express API
- `npm run build` builds frontend assets
- `npm run start` runs API in production mode and serves `dist/`
- `npm run lint` lints frontend and backend code

## API

- `GET /api/health`
- `POST /api/contact`
  - Body: `{ "name", "email", "subject", "message", "captchaToken?" }`
