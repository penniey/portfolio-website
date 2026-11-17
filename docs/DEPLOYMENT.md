# AWS deployment

The workflow in [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) deploys successful builds from `main` to the existing `penniey.com` S3 bucket and invalidates CloudFront distribution `EATCGJV88ECEQ`.

## One-time setup

GitHub authenticates with AWS using **OpenID Connect (OIDC)**. This avoids storing long-lived AWS credentials in the repository. The supplied CloudFormation template creates:

1. GitHub's OIDC identity provider in IAM.
2. A role trust restricted to `repo:penniey/portfolio-website:ref:refs/heads/main`.
3. Permissions to modify only `s3://penniey.com` and invalidate only the portfolio's CloudFront distribution.

This requires an AWS identity with permission to create IAM resources and deploy CloudFormation stacks. It does **not** change the bucket, website files, DNS or CloudFront distribution.

### 1. Create the deploy role

Run from the repository root using the personal AWS `penny` credentials:

```powershell
aws cloudformation deploy `
  --stack-name penniey-portfolio-github-deploy `
  --template-file aws/github-deploy-role.yml `
  --capabilities CAPABILITY_NAMED_IAM
```

### 2. Configure GitHub repository variables

The role ARN and resource identifiers are configuration values, not passwords. Do not substitute personal access keys for the role.

```powershell
$roleArn = aws cloudformation describe-stacks `
  --stack-name penniey-portfolio-github-deploy `
  --query "Stacks[0].Outputs[?OutputKey=='DeployRoleArn'].OutputValue" `
  --output text

gh variable set AWS_DEPLOY_ROLE_ARN --body $roleArn --repo penniey/portfolio-website
gh variable set AWS_REGION --body "eu-north-1" --repo penniey/portfolio-website
gh variable set AWS_S3_BUCKET --body "penniey.com" --repo penniey/portfolio-website
gh variable set AWS_CLOUDFRONT_DISTRIBUTION_ID --body "EATCGJV88ECEQ" --repo penniey/portfolio-website
```

### 3. Deploy

Push the workflow and site to `main`, then inspect the run:

```powershell
gh run list --workflow deploy.yml --limit 1
gh run watch
```

The public URL is <https://penniey.com/>. CloudFront invalidations normally take a few minutes.

## Recovery: manual deployment

Build locally with `npm run build`. The following command changes production, so inspect the local build first and use dry-run mode to review differences:

```powershell
aws s3 sync dist s3://penniey.com --delete --dryrun
aws s3 sync dist s3://penniey.com --delete --only-show-errors --cache-control "public,max-age=0,must-revalidate"
aws cloudfront create-invalidation --distribution-id EATCGJV88ECEQ --paths "/*"
```

## Operational notes

- `--delete` means the build output is authoritative. Do not store unrelated files in the website bucket.
- The workflow has `concurrency` enabled to prevent simultaneous deployments.
- No deployment occurs for pull requests or non-`main` branches.
- The CloudFormation role does not permit changes to Route 53, bucket policies, CloudFront configuration or unrelated buckets.
- To revoke deployment access, delete the `penniey-portfolio-github-deploy` CloudFormation stack. This removes only its IAM provider and role after any active deployments finish.
