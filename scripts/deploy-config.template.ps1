# AWS Deployment Configuration Template (PowerShell)
# Copy this file to ../deploy-config.ps1 and fill in your actual AWS values

# S3 bucket name where your website files will be stored
$S3_BUCKET = "your-portfolio-bucket-name"

# CloudFront distribution ID for CDN
$CLOUDFRONT_DISTRIBUTION_ID = "YOUR_CLOUDFRONT_DISTRIBUTION_ID"

# CloudFront domain URL
$CLOUDFRONT_DOMAIN = "your-domain.cloudfront.net"

# AWS region where your resources are located
$AWS_REGION = "eu-north-1"

# Optional: Custom domain if you have one
$CUSTOM_DOMAIN = "your-domain.com"
