# 🌈 Piniverse

> ⚠️ **LIVE PRODUCTION REPOSITORY**
>
> Changes pushed to the `main` branch may be published to the live Piniverse website.

## Live site

https://piniverse.co.uk

## About

Piniverse is a custom website created for Pin.

This repository contains the live production version of the site.

## Environments

### Production

- Repository: `spadget/piniverse`
- Branch: `main`
- Website: https://piniverse.co.uk
- Hosting: GitHub Pages
- Data: Production Supabase project

### Staging

- Repository: `spadget/staging.piniverse`
- Used for development and testing
- Changes made in staging do not automatically update production

## Deployment process

1. Develop and test changes in `staging.piniverse`.
2. Confirm everything works correctly on the staging website.
3. Copy the approved files into this production repository.
4. Review the changes before committing.
5. Commit and push to `main`.
6. GitHub Pages will publish the updated production site.

## Important production files

### `CNAME`

The `CNAME` file connects this repository to:

`piniverse.co.uk`

Do not delete it or copy it into staging.

### GitHub Actions

The workflows in `.github/workflows` may run scheduled production processes and notifications.

Do not use production workflows for staging tests.

## Safety rules

- Test unfinished work in staging, not here.
- Check which repository is open before editing or pushing.
- Never commit passwords, private keys or Supabase service-role keys.
- Review changes carefully before pushing to `main`.
- Keep production-specific files separate from staging-specific files.

## Technology

Piniverse currently uses:

- HTML
- CSS
- JavaScript
- GitHub Pages
- Supabase
- GitHub Actions
