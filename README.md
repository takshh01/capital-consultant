# Capital Consultancy - Financial Advisory Web Platform

A production-ready web application for **Capital Consultancy (Delhi NCR)**, providing loan consultation, eligibility calculation, dynamic EMI tools, internal lead management, and direct WhatsApp advisory routing.

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Fully styled with a dark obsidian & emerald green luxury aesthetic.

---

## 🚀 Instant Deployment on Vercel

This repository is pre-configured for **zero-configuration deployment on Vercel**.

### Method 1: Deploy via GitHub (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Capital Consultancy dark obsidian website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"** -> **"Import"** your repository.
3. Vercel automatically detects the project configuration from `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your application will be live on your custom `.vercel.app` domain!

---

### Method 2: Deploy using Vercel CLI
If you prefer deploying directly from your local terminal:
```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Run deploy command in the project root
vercel

# 3. For production release:
vercel --prod
```

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript checks
npm run lint

# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Key File Structure & Vercel Configuration

- `vercel.json`: Defines single-page application (SPA) rewrites to `/index.html` (prevents 404 on page refresh) and sets long-term immutable caching headers for static assets (`/assets/*`).
- `vite.config.ts`: Configures Rollup code splitting (`vendor` & `lucide-react` chunks) to ensure sub-second initial asset load times on Vercel Edge CDN.
- `public/`:
  - `favicon.svg`: Emerald monogram brand favicon.
  - `robots.txt`: Search engine crawling rules and sitemap pointer.
- `src/`:
  - `components/`: Modular UI sections (Hero, EMI Calculator, Eligibility Checker, Loan Solutions, Interactive Enquiry Form, Admin Lead Drawer, Floating WhatsApp Desk).
  - `data/`: Structured institutional loan schemes and eligibility matrices.
  - `services/`: LocalStorage-based lead persistence with CSV export.
  - `utils/`: Direct WhatsApp deep-linking and telephone utilities.
