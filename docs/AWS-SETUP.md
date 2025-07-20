# AWS Deployment Guide

This guide will help you securely deploy your portfolio to AWS using S3 and CloudFront.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Installed and configured (already done ✅)
3. **Domain** (optional): If you want a custom domain

## Quick Setup

### 1. Configure AWS CLI

If you haven't already, configure AWS CLI with your credentials:

```bash
aws configure
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., `us-east-1`)
- Default output format (e.g., `json`)

### 2. Create Environment Configuration

1. Copy the example environment file:
   ```powershell
   Copy-Item .env.example .env.production
   ```

2. Edit `.env.production` with your settings:
   ```
   AWS_REGION=us-east-1
   S3_BUCKET_NAME=your-unique-bucket-name
   CLOUDFRONT_DISTRIBUTION_ID=your-cloudfront-id
   AWS_PROFILE=default
   ```

   **Important**: Choose a globally unique bucket name!

### 3. Deploy Your Portfolio

Run the secure deployment script:

```powershell
.\deploy-secure.ps1
```

For a dry run (test without deploying):
```powershell
.\deploy-secure.ps1 -DryRun
```

## What the Script Does

1. **Security Checks**: Validates environment variables and credentials
2. **Build**: Compiles your React project using Vite
3. **S3 Setup**: Creates bucket if it doesn't exist and configures static hosting
4. **Upload**: Syncs your built files to S3 with proper caching headers
5. **CloudFront**: Invalidates cache if configured

## Expected Costs

- **S3 Storage**: ~$0.01-0.05/month for a typical portfolio
- **S3 Requests**: ~$0.01/month for normal traffic
- **CloudFront**: Free tier covers most personal portfolios
- **Route 53** (if using custom domain): ~$0.50/month

## Security Features

✅ **No credentials in code**: Uses AWS CLI profiles and environment variables
✅ **Environment isolation**: Separate configs for different environments  
✅ **Proper caching**: HTML files have no-cache, assets have long cache
✅ **Access control**: Bucket policy allows only read access

## Troubleshooting

### Common Issues:

1. **Bucket name already exists**: Choose a different, globally unique name
2. **Access denied**: Check your AWS credentials and permissions
3. **Build fails**: Ensure `npm install` was run and no TypeScript errors
4. **CloudFront errors**: Distribution ID might be incorrect

### Useful Commands:

- Check AWS identity: `aws sts get-caller-identity`
- List buckets: `aws s3 ls`
- Check bucket policy: `aws s3api get-bucket-policy --bucket your-bucket-name`

## Next Steps

1. **Custom Domain**: Set up Route 53 and certificate for HTTPS
2. **CI/CD**: Add GitHub Actions for automatic deployment
3. **Monitoring**: Set up CloudWatch for analytics
4. **Performance**: Configure CloudFront for global CDN

## Support

If you encounter issues:
1. Check the AWS CloudShell or local AWS CLI configuration
2. Verify IAM permissions for S3 and CloudFront
3. Review the deployment script output for specific error messages
