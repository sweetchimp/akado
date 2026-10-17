# Dorothy Akankwasa Muhumure — personal site

Single-page Astro site for Dorothy Akankwasa Muhumure (education, inclusion and
child protection consultant). Built with Astro, Tailwind CSS v4 and the Astro
Node adapter.

## Tech stack

- **Astro 7** — `output: "server"` with `@astrojs/node` in `standalone` mode
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin
- **Node.js 22+** (see `.nvmrc`)

All pages are prerendered to static HTML at build time; the Node adapter serves
the static output (and would host any future server endpoints).

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build and run the production server

```bash
npm run build      # outputs static assets + dist/server/entry.mjs
npm start          # runs node ./dist/server/entry.mjs
```

The standalone server listens on `HOST` (default `0.0.0.0`) and `PORT`
(default `4321`).

## Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server                          |
| `npm run build` | Production build                              |
| `npm start`     | Run the built standalone server               |
| `npm run preview` | Preview the build locally                   |
| `npm run check` | Type-check Astro files                        |

---

## Deploying to Railway

The project is set up to run as a single Railway service that serves the site.

### Environment variables

**None required.** The site is fully static and the contact section uses a
`mailto:` link, so there are no secrets or runtime configuration to provide.
Railway injects `PORT` automatically; the server binds `0.0.0.0` by default.

If a server endpoint (e.g. a contact form) is added later, add its variables in
the Railway dashboard under **Variables** and document them here.

### Connect the GitHub repository to Railway

1. Push the repository to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo** and select this repo.
   (Railway will ask to install its GitHub app if you have not already.)
3. Railway auto-detects Node via `.nvmrc` / `engines`. Confirm the settings in
   **Settings → Build/Deploy**:
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
   - **Root directory:** `/`
4. Click **Deploy**. Railway builds and starts the service.
5. Open **Settings → Networking → Generate Domain** to get a public
   `*.up.railway.app` URL and verify the site loads.

### Add a custom domain

1. In Railway, open the service → **Settings → Networking → Custom Domain** and
   enter your domain (e.g. `www.yourdomain.com`).
2. Railway shows a DNS record (usually a `CNAME` for `www`, or an `A`/`ALIAS`
   record for the root domain). Add that record at your domain registrar.
3. Wait for DNS to propagate and for Railway to issue the TLS certificate
   (usually a few minutes). The domain's status turns green when ready.
4. Re-check the site on the custom domain.

You can also set the Astro `site` value in `astro.config.mjs` to the final
domain once it is known (it is intentionally omitted until then).

### Test the site on the live URL

1. Open the Railway (or custom) domain and confirm the page loads and the
   layout/styling is correct.
2. Scroll to **Get in touch** and click **Send an email** — a new message should
   open in your email client, addressed to `doramuhumure77@gmail.com`.
3. Click **Download CV** and confirm the PDF downloads.
4. Check the navigation links (About, Services, Experience, Contact) and the
   "Work with me" button scroll to the right sections.

---

## Project structure

```
public/          Static assets (headshot, CV PDF, favicon)
src/
  components/    Page sections (Hero, About, Services, Experience, Approach, Contact, ...)
  data/          Site content (site.ts holds brand, email, nav; other files hold section copy)
  layouts/       BaseLayout.astro
  pages/         index.astro (prerendered)
  styles/        global.css, fonts.css
docs/content.md  Source of truth for all site copy
```
