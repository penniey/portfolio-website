# Hugo Lundell — Portfolio

The source for [penniey.com](https://penniey.com/), a dependency-free portfolio built with semantic HTML, CSS and JavaScript. The current static source replaces the outdated React/Vite version, which remains available in the Git history.

## Features

- Original responsive industrial layout, with focused copy improvements
- Dense equal-width skill grid on desktop and compact wrapping tags on mobile, with no inner skills scrollbar
- Technology filters that reflow correctly, animate height changes smoothly, and expose their state to assistive technology
- Reduced-motion support
- No runtime dependencies or frontend framework
- Node-based local server, production build and content tests
- GitHub Actions deployment to the existing AWS S3 and CloudFront infrastructure
- AWS OIDC authentication restricted to this repository's `main` branch; no AWS access keys stored in GitHub

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm test
npm run dev
```

Open <http://127.0.0.1:5173>. The site is also directly usable by opening `index.html`.

```bash
npm run build    # Copy the five public files into dist/
npm run preview  # Serve the production build locally
```

## Edit content

- **`index.html`** — introduction, links and page layout
- **`styles.css`** — original colors, typography and responsive layouts
- **`script.js`** — project/experience content, technology data and interface behavior
- **`Resume.html`** — editable résumé source; run `powershell -ExecutionPolicy Bypass -File scripts/render-resume.ps1` to regenerate **`Resume.pdf`**
- **`P.png`** — favicon

After editing, run `npm test` and check both desktop and mobile layouts before committing.

## Deployment

**Every push to `main` automatically tests, builds and deploys the site.** It syncs `dist/` to `s3://penniey.com`, removes stale objects and invalidates the active CloudFront cache. `workflow_dispatch` also allows a manual deployment from `main`.

The active AWS resources are:

| Setting | Value |
| --- | --- |
| Region | `eu-north-1` |
| S3 bucket | `penniey.com` |
| CloudFront distribution | `EATCGJV88ECEQ` |

See **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** for the one-time AWS OIDC and GitHub configuration, plus manual recovery steps.
