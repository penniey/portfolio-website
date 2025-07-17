# 🚀 AWS Deployment Guide

## Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```

2. **Node.js and npm installed**

3. **AWS S3 bucket and CloudFront distribution set up**

## Quick Setup

### 1. Configure Deployment Settings

**For Windows (PowerShell):**
```powershell
# Copy the template
Copy-Item deploy-config.template.ps1 deploy-config.ps1

# Edit deploy-config.ps1 with your actual AWS values
```

**For Linux/Mac (Bash):**
```bash
# Copy the template
cp deploy-config.template.sh deploy-config.sh

# Edit deploy-config.sh with your actual AWS values
```

### 2. Required Configuration Values

Edit your config file with these actual values:
- `S3_BUCKET`: Your S3 bucket name (e.g., "my-portfolio-website")
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (e.g., "E1234567890ABC")
- `CLOUDFRONT_DOMAIN`: Your CloudFront domain (e.g., "d1234567890.cloudfront.net")
- `AWS_REGION`: Your AWS region (e.g., "us-east-1", "eu-north-1")

### 3. Deploy Your Website

Since we're using PowerShell on Windows, use the built-in deploy script:

```bash
# Deploy using npm script (uses the secure PowerShell script)
npm run deploy
```

## Environment Variables (Optional)

If you need environment variables for production:

1. Copy the template:
   ```bash
   cp .env.example .env.production
   ```

2. Fill in your actual values in `.env.production`

## Security Notes

- ✅ AWS credentials are kept in `deploy-config.ps1` (ignored by git)
- ✅ Templates are committed to git, actual config files are not
- ✅ Environment files are ignored by git
- ✅ No sensitive information is exposed in the repository

## Troubleshooting

### AWS CLI Not Found
Install AWS CLI from: https://aws.amazon.com/cli/

### Missing Configuration
Ensure your config file exists and all variables are set

### Build Errors
Make sure all dependencies are installed:
```bash
npm install
npm run build
```

## GitHub Deployment

This setup ensures your sensitive AWS information stays secure when pushing to GitHub:
- Configuration templates are public
- Actual configuration files are private (ignored by git)
- Anyone can clone and set up their own deployment
