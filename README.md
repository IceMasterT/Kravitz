# Kravitz Dentistry Website

A modern, responsive website for Kravitz Dentistry featuring the revolutionary 3 Minute Implant™ procedure.

## Features

- Modern, responsive design
- Fast and optimized performance
- SEO-friendly
- Mobile-first approach
- Interactive animations
- Easy to maintain and update

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- React Icons
- Optimized for SEO and Performance

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Quick Deploy Commands

```bash
# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify
npm run deploy:netlify

# Deploy to Cloudflare Pages
npm run deploy:cloudflare

# Build static files for any hosting
npm run deploy:static

# Build for production server
npm run build
npm run start
```

### Deployment Options

#### 1. Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

#### 2. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=out
```

#### 3. Cloudflare Pages
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
npm run build
wrangler pages deploy out --project-name=kravitz-dentistry
```

#### 4. Static Export (for any hosting)
```bash
# Build static files
npm run build
npm run export

# Upload the 'out' folder to your hosting provider
```

#### 5. Docker Deployment
```bash
# Build Docker image
docker build -t kravitz-dentistry .

# Run container
docker run -p 3000:3000 kravitz-dentistry
```

#### 5. Manual Server Deployment
```bash
# On your server
git clone <repository-url>
cd kravitz-dentistry
npm install
npm run build
npm run start
```

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://kravitzdentistry.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── components/     # React components
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static files
│   └── images/         # Image assets
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential.
```

</rewritten_file>