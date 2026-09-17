# Mohammed Ramees Ummer — portfolio

A static portfolio built with React, TypeScript, Tailwind CSS and Vinext. No backend, database, forms or account setup is needed.

## Run locally

Install Node.js 22.13 or later (with npm), then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open http://localhost:5173. Stop the development server with Ctrl+C.

## Build

```sh
npm run build
```

The deployable static website is in `dist/client`. Serve that directory with any static web host. Do not open `index.html` directly using a file URL; serve it over HTTP. Run `npm start` to serve the built site at http://localhost:4173.

## Edit content

Update `app/profile.ts`: profile, contact details, evidence, experience, skills, education, certification, project descriptions and optional assets are centralized there. Page markup is in `app/page.tsx`; responsive styling is in `app/globals.css`; metadata is in `app/layout.tsx`.

The supplied professional portrait is stored as an optimized WebP image in `public` and appears in the hero profile card. Optional project URLs, project screenshots and the resume remain null until genuine assets are supplied. Dependent buttons and project images are omitted. Add files to `public`, then set their paths in the data file. Screenshots require descriptive alt text. Phone display is controlled by `profile.contact.showPhone` and starts false.

Case studies support keyboard operation, deep links such as `/#case-coffee-shop`, and browser Back/Forward. The contact action uses mailto; copy-email reports success or an honest fallback.

Private asset and validation checklists are delivered alongside the source, outside this site folder. They are not deployed.

