# Secure AWS deployment script for Hugo Lundell Portfolio (PowerShell)

Write-Host "🚀 Starting secure deployment of Hugo Lundell Portfolio..." -ForegroundColor Yellow

# Check if config file exists
if (-not (Test-Path "deploy-config.ps1")) {
    Write-Host "❌ deploy-config.ps1 not found!" -ForegroundColor Red
    Write-Host "Please copy deploy-config.template.ps1 to deploy-config.ps1 and configure your AWS settings." -ForegroundColor Yellow
    Write-Host "Run: Copy-Item deploy-config.template.ps1 deploy-config.ps1" -ForegroundColor Blue
    exit 1
}

# Load configuration
. .\deploy-config.ps1

# Validate required variables
if (-not $S3_BUCKET -or -not $CLOUDFRONT_DISTRIBUTION_ID -or -not $AWS_REGION) {
    Write-Host "❌ Missing required AWS configuration variables!" -ForegroundColor Red
    Write-Host "Please check your deploy-config.ps1 file and ensure all variables are set." -ForegroundColor Yellow
    exit 1
}

# Check if AWS CLI is installed
if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Host "❌ AWS CLI is not installed. Please install it first." -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
& npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Sync to S3
Write-Host "📤 Uploading to S3 bucket: $S3_BUCKET..." -ForegroundColor Yellow
& aws s3 sync dist/ s3://$S3_BUCKET --delete --region $AWS_REGION

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ S3 upload failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Files uploaded to S3 successfully!" -ForegroundColor Green

# Invalidate CloudFront cache
Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
& aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*" --region $AWS_REGION

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ CloudFront cache invalidated successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ CloudFront invalidation failed!" -ForegroundColor Red
}

Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your website is live at: https://$CLOUDFRONT_DOMAIN" -ForegroundColor Blue
Write-Host "📋 Testing your deployment:" -ForegroundColor Yellow
Write-Host "   1. Main site: https://$CLOUDFRONT_DOMAIN" -ForegroundColor Blue
Write-Host "   2. Projects: https://$CLOUDFRONT_DOMAIN/project/glorious-golf" -ForegroundColor Blue
Write-Host "   3. Run npm run test:deploy to run automated tests" -ForegroundColor Blue
