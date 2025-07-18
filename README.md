# Hugo Lundell - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features secure AWS deployment, dark theme design, project showcases, and professional presentation.

## 🌟 Features

- **🎨 Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **📱 Responsive**: Mobile-first design that works on all devices  
- **⚡ Performance**: Built with Vite for fast loading and optimized builds
- **🔒 Secure**: Production-ready with security headers and protected deployment
- **🚀 AWS Ready**: Configured for S3 and CloudFront deployment
- **♿ Accessible**: ARIA labels and semantic HTML for screen readers
- **🔍 SEO Friendly**: Optimized meta tags and structure
- **📝 TypeScript**: Full type safety throughout the application

## 📋 Sections

- **🏠 Hero**: Combined introduction with featured projects carousel
- **💼 Projects**: Skills showcase and full project portfolio with carousels
- **📬 Contact**: Contact information, social links, and integrated footer content
- **📄 Resume**: Dropdown with English and Swedish resume downloads
- **🔗 Navigation**: Active section highlighting and smooth scrolling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
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

## 🚀 Deployment

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

- **📋 [Deployment Guide](docs/DEPLOYMENT.md)** - Complete AWS setup instructions
- **🐙 [GitHub Setup](docs/GITHUB-SETUP.md)** - Repository configuration guide
- **🔒 [Security Summary](docs/SECURITY-SUMMARY.md)** - Security features overview
- **☁️ [AWS Setup](docs/AWS-SETUP.md)** - Detailed AWS configuration

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to AWS (requires configuration)
- `npm run lint` - Run ESLint
- `npm run test:deploy` - Test deployment endpoints

## 📁 Project Structure

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