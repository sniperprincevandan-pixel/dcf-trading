# DCF Trading Pvt Ltd — Corporate Website

A premium corporate website for **DCF Trading Pvt Ltd**, an Indian trading enterprise operating in the cattle-feed supply business, specializing in **brewery and distillery spent grain (cooked barley)** supply for commercial dairy farms.

---

## 🌾 Brand Positioning & Core Focus

- **Core Product**: Brewery & Distillery Spent Grain (Cooked Barley / Brewers Wet Grains)
- **Primary Market**: Commercial Dairy Farms, Cattle Rearing Operations, Feed Distributors, and Bulk Buyers
- **Brand Identity**: Premium, industrial-agricultural aesthetic (Forest Green `#183F30`, Deep Charcoal `#171B19`, Warm Ivory `#F5F3EC`, Muted Gold `#B69A60`, and Sage `#DCE5DB`)
- **Tone**: Trustworthy, restrained, factual, and strictly compliant with agricultural nutrition realities without fabricated metrics.

---

## 🚀 Key Features & Architecture

1. **Editorial Homepage (`/`)**:
   - Hero banner featuring high-resolution commercial dairy cattle photography
   - Structured company overview & core product showcase
   - **Interactive Feed Estimator**: Live volume and logistics calculator for dairy farm operators
   - Intended customer segments & core commercial values grid
   - High-converting B2B inquiry CTA banner

2. **About Us (`/about`)**:
   - Company profile, sourcing philosophy, and operational principles
   - Editable statutory registration & governance profile card

3. **Product Catalogue & Deep Dive (`/products`)**:
   - Technical breakdown of brewery/distillery spent grain (cooked barley)
   - Clear distinction between wet spent grain and dried distillers grains (DDGS)
   - Editable specification matrix (moisture, crude protein, quantity, delivery terms)
   - On-farm storage, ensiling, and handling best practice guidelines

4. **Supply & Logistics (`/supply-logistics`)**:
   - 4-Step B2B fulfillment workflow: Requirements -> Sourcing Match -> Commercial Terms -> Scheduled Dispatch
   - Farm receiving readiness criteria (unloading pads, heavy vehicle clearance)

5. **Contact & B2B Inquiry Desk (`/contact`)**:
   - Accessible, validated commercial enquiry form with live reference code generation (`DCF-XXXXXX`)
   - Pre-population support from the Feed Estimator
   - Honeypot bot protection
   - Editable contact placeholders (phone, email, registered office)

6. **SEO & Supporting Infrastructure**:
   - Full Metadata & Open Graph configuration
   - Dynamic `sitemap.xml` and `robots.txt`
   - Custom 404 page (`/not-found`)
   - Comprehensive Privacy Policy (`/privacy`)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Typography**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Modern Sans)
- **Icons**: Lucide React
- **API**: Next.js Server Route (`/api/contact`) with Resend email webhook adapter

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js v20.x or higher
- npm v10.x or higher

### 2. Run Locally

```bash
cd /Users/vandanpatel/.gemini/antigravity-ide/scratch/dcf-trading-website

# Run development server
npm run dev

# Or build and run production server
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

---

## ⚙️ Environment Variables & Backend Email Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Configuration Options:
- `RESEND_API_KEY`: API key from [Resend](https://resend.com) to automatically dispatch incoming B2B lead notifications. (If omitted, enquiries are securely logged to the server stream and reference codes are provided to users).
- `CONTACT_NOTIFICATION_EMAIL`: Corporate inbox address (e.g., `enquiry@dcftrading.com`) to receive lead notifications.
- `NEXT_PUBLIC_SITE_URL`: Set to production domain (`https://dcftrading.com`).

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DCF Trading corporate website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Next.js settings will be detected automatically.
4. (Optional) Under **Environment Variables**, add `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL`.
5. Click **Deploy**.

---

## 📝 Updating Placeholders with Real Company Information

Search for `[Placeholder]` or `[Editable]` in the following files to update when official corporate records are available:

- `src/components/Footer.tsx`: Registered address, corporate phone, official email, and CIN
- `src/app/about/page.tsx`: MCA registration details, corporate identification number (CIN)
- `src/app/contact/page.tsx`: Official trade desk phone and corporate office address
- `src/app/products/page.tsx`: Specific laboratory proximate analysis certificates and moisture thresholds per facility
