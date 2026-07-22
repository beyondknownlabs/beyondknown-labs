# BeyondKnown Labs Website Maintenance

This document defines the safe process for updating the official BeyondKnown Labs website.

Live website:

https://beyondknownlabs.github.io/beyondknown-labs/

Repository:

https://github.com/beyondknownlabs/beyondknown-labs

Current protected release:

v1.0.0

## Core rule

Do not redesign or replace approved sections during routine maintenance.

Make the smallest necessary change, test it, commit it, push it, and verify the live website.

## Before every update

1. Confirm exactly what needs to change.
2. Identify the affected file.
3. Avoid changing unrelated code.
4. Preserve approved:
   - layout
   - typography
   - colors
   - spacing
   - navigation
   - content structure
   - accessibility behavior
5. Check that no private information, passwords, tokens, or API keys are being added.

## Common update locations

### Website text

Edit:

`index.html`

Use for:

- headings
- descriptions
- contact text
- discovery titles
- reel titles
- category text
- social links

### Visual styling

Edit:

`css/styles.css`

Use only when a layout or styling change is intentionally approved.

### Website behavior

Edit:

`js/script.js`

Keep JavaScript minimal and dependency-free.

### Images

Store meaningful website images in:

`assets/images/`

Use:

- lowercase filenames
- hyphens instead of spaces
- compressed WebP when practical
- descriptive alt text in `index.html`

### Icons and favicons

Store icons in:

`assets/icons/`

Do not rename favicon files unless the matching paths in `index.html` are also updated.

## Safe update workflow

1. Edit one item or one related group of items.
2. Review the changed lines.
3. Commit with a clear message.
4. Push the `main` branch.
5. Wait for GitHub Pages to redeploy.
6. Open the live website in Safari.
7. Verify the change on mobile.
8. Confirm that navigation, images, links, and layout still work.

## Commit message examples

- Update featured reel
- Replace discovery image
- Correct contact text
- Update Instagram link
- Improve image alt text
- Fix mobile spacing
- Update sitemap date

Avoid vague messages such as:

- Changes
- Fix
- Update
- New version

## Required checks after meaningful updates

Check:

- homepage loads
- mobile menu works
- internal navigation works
- Instagram link works
- TikTok link works
- Facebook link works
- contact email works
- images load
- favicon remains available
- no horizontal scrolling appears
- reduced-motion behavior still works
- page remains usable at enlarged text or zoom

## Sitemap maintenance

Update the `<lastmod>` date in:

`sitemap.xml`

Only update it after a meaningful public content or structure change.

Use this format:

`YYYY-MM-DD`

Do not update it for backups, comments, or documentation-only changes.

## Metadata maintenance

When the main sharing image changes, update:

`og:image`

The URL must remain absolute, for example:

`https://beyondknownlabs.github.io/beyondknown-labs/assets/images/example.webp`

When the public website address changes, update:

- canonical URL
- `og:url`
- absolute `og:image` URLs
- `robots.txt`
- `sitemap.xml`

## Release and backup process

Create a new GitHub release only for major approved versions.

Examples:

- `v1.1.0` for a meaningful feature or content expansion
- `v2.0.0` for a major redesign or structural change
- `v1.0.1` for an important correction to Version 1

For each release:

1. Confirm the live site is working.
2. Create a version tag.
3. Write a short release summary.
4. Download the GitHub source ZIP.
5. Keep one untouched backup copy in the Files app.

Never overwrite the Version 1 backup.

## Rollback process

When a future update breaks the website:

1. Stop making additional changes.
2. Identify the last working commit.
3. Compare the broken files with the working version.
4. Restore only the affected files.
5. Commit the restoration.
6. Push to `main`.
7. Verify the live site again.

The `v1.0.0` release remains the permanent original launch backup.

## Maintenance frequency

Routine checks:

- after every update
- after changing social links
- after replacing images
- after changing GitHub Pages settings
- after creating a new release

Monthly quick check:

- open the homepage
- test social links
- test contact email
- check for broken images
- confirm `robots.txt` loads
- confirm `sitemap.xml` loads

## Current Version 1 status

Version 1 includes:

- approved one-page design
- mobile-first responsive layout
- internal navigation
- social and contact links
- favicon support
- canonical URL
- absolute Open Graph image URL
- `robots.txt`
- `sitemap.xml`
- accessibility support
- reduced-motion support
- GitHub Pages compatibility
- GitHub release backup