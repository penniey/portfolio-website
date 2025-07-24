# Hugo Lundell - Portfolio Website

A professional and responsive portfolio website built using React, HTML, TypeScript and hosted using AWS.

##  Features

- **Performance**: Built with Vite for fast loading and optimized builds
- **Secure**: Production-ready with security headers and protected deployment
- **AWS Ready**: Configured for S3 and CloudFront deployment
- **SEO Friendly**: Optimized meta tags and structure
- **TypeScript**: Full type safety throughout the application

## Sections

- **Hero**: Introduction, featured project and experience
- **Projects**: Technocology knowledge and projects with tech tags
- **Contact**: Contact information and social links
- **Resume**: Resume both in English and Swedish
- **Navigation**: UX friendly navigation header 

##  Quick Start

### Requirments
- Node.js 18+ installed
- npm 
- AWS CLI (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/penniey/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment

### Local Deployment Setup

1. **Configure AWS settings:**
   ```bash
   # Copy the template (Windows)
   Copy-Item scripts/deploy-config.template.ps1 deploy-config.ps1
   
   # Copy the template (Linux/Mac)
   cp scripts/deploy-config.template.sh deploy-config.sh
   ```

2. **Edit your config file** with your actual AWS values:
   - S3 bucket name
   - CloudFront distribution ID
   - AWS region

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Documentation

- **[Deployment Guide](docs/DEPLOYMENT.md)** - Complete AWS setup instructions
- **[GitHub Setup](docs/GITHUB-SETUP.md)** - Repository configuration guide
- **[Security Summary](docs/SECURITY-SUMMARY.md)** - Security features overview
- **☁[AWS Setup](docs/AWS-SETUP.md)** - Detailed AWS configuration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to AWS (requires configuration)
- `npm run lint` - Run ESLint
- `npm run test:deploy` - Test deployment endpoints

## 📁 Project Structure (AI GENERATED but accurate structure documentation)

```
portfolio-website/
├── 📝 docs/                    # Documentation
│   ├── DEPLOYMENT.md
│   ├── GITHUB-SETUP.md
│   ├── SECURITY-SUMMARY.md
│   └── AWS-SETUP.md
├── 🛠️ scripts/                # Deployment & utility scripts
│   ├── deploy-secure.ps1
│   ├── deploy-config.template.ps1
│   ├── deploy-config.template.sh
│   └── test-deployment.sh
├── ⚙️ config/                  # Environment & config templates
│   └── .env.example
├── 🌐 aws-configs/            # AWS configuration files
│   ├── cloudfront-security-headers.js
│   ├── cloudwatch-monitoring.json
│   └── s3-lifecycle.json
├── 🎨 src/                     # React application source
│   ├── components/
│   ├── data/
│   └── styles/
├── 🏠 public/                  # Static assets
└── 🔧 Root configuration files
    ├── package.json
    ├── vite.config.js
    ├── tsconfig.json
    └── .gitignore
```

## Reccomended future features
* To omptimize performance on mobile you can simply make it so the display mode for the project is one at a time like the filters. [**DONE**]
* The UX for the experience is kind of not fitting could test using more transparency and darker [**DONE**]
* Might want to center tech tags on feature projects [**DONE**]
