# pkyorke.com — Artist Portfolio

A cinematic, glass-driven artist portfolio for **p.k yorke** — composer, sound artist, and technologist — built with Vite, React, Tailwind, and Framer Motion.

The site is designed as a dark listening room / light installation rather than a conventional resume: a single, continuous world with a works console powered by [Praetorius](https://github.com/cbassuarez/praetorius).

---

## Tech stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4-style import) + custom CSS tokens in `globals.css`  
- **Motion**: [Framer Motion](https://www.framer.com/motion/) for page transitions, micro-interactions, and kinetic type  
- **Works console**: [Praetorius](https://github.com/cbassuarez/praetorius) embedded as a static sub-app under `/praetorius/`  
- **Hosting**: GitHub Pages (project site)

This repository is a **project-specific implementation**, not a general-purpose template, but the structure should be legible for collaborators and curious developers.

---

## Getting started

### Prerequisites

- Node 18+ (LTS recommended)
- npm 9+ (or a compatible package manager)

### Install dependencies

From the project root (where `package.json` lives):

```bash
npm install
````

### Run the dev server

```bash
npm run dev
```

* Opens a Vite dev server (usually on `http://localhost:5173`).
* Hot reloads on file changes.

### Build for production

```bash
npm run build
```

* Runs TypeScript type-checking and produces a static build in `dist/`.

### Preview the production build

```bash
npm run preview
```

* Serves the `dist/` output locally to test the production build.

---

## Deployment (GitHub Pages)

This project is set up as a **GitHub Pages project site**:

* The site is built with `npm run build`.
* The output is served from the `dist/` folder.
* The Vite config uses a **base path** corresponding to the repository name (e.g. `/web/` for `pkyorke/web`).

When GitHub Pages is configured:

1. Push to the default branch (usually `main`).
2. A GitHub Actions workflow (or Pages build) runs `npm run build`.
3. The built assets are published to the Pages environment.

If you change the repository name or Pages configuration, update the `base` setting in `vite.config.ts` and the GitHub Pages settings accordingly.

> **Note:** Any custom domain configuration (e.g. `pkyorke.com`) is handled at the DNS / Pages settings level and is intentionally not documented here.

---

## Project structure (high-level)

Your structure may evolve, but the key pieces are:

```text
website/
  src/
    AppShell.tsx        # Global layout, navigation, theme toggle
    main.tsx            # React entrypoint
    styles/
      globals.css       # Theme tokens, Liquid Glass styles, typography

    pages/
      HomePage.tsx      # Poster-style hero + featured work + lower strip
      WorksPage.tsx     # Praetorius console frame
      AboutPage.tsx     # Editorial two-column layout
      PressPage.tsx     # Media-first grid (press & assets)
      ContactPage.tsx   # Central glass contact card

  public/
    praetorius/         # Built Praetorius console (static bundle)
```

Focus for collaborators: **everything “content-ish” lives in the page components**, not scattered across config.

---

## Works console / Praetorius integration

The **Works** page embeds a Praetorius console as a framed “screen” inside the site.

* The iframe source is constructed using `import.meta.env.BASE_URL`:

  ```ts
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;
  ```

* The actual static Praetorius build should live in `public/praetorius/` (so it ends up at `/praetorius/` in the deployed site).

If you update the Praetorius project:

1. Build Praetorius.
2. Copy the resulting bundle into `public/praetorius/` (or your configured path).
3. Rebuild this site (`npm run build`) and redeploy.

---

## Editing content (per page)

This section is for future collaborators and the client: **where to change text and high-level content** without touching the design system.

> In general: look in `src/pages/*.tsx`. Most content is plain JSX text inside clearly labeled sections.

### Home (`HomePage.tsx`)

* **Hero title & description**
  Located near the top of `HomePage`:

  ```tsx
  <h1>…</h1>
  <p>…works for instruments, loudspeakers, and architectures…</p>
  ```

  Edit these to change the main headline and short description.

* **Morphing roles**
  At the top of the file:

  ```ts
  const roles = ["composer", "sound artist", "technologist"];
  ```

  You can add/remove roles or rename them. Keep them short (1–2 words each) for best visual results.

* **Current work metadata (hero glass pane)**
  At the bottom section of the hero pane you’ll see:

  ```tsx
  title
  [installation / score title here]
  ```

  and the “installation / electronics” tags. Update these to highlight a current or flagship work. For now this is **static**; it doesn’t need to match the Praetorius data.

* **Lower band “Selected works / Upcoming / Tools & research”**
  The text in this three-column strip is just JSX `<li>` elements. Update titles, dates, and descriptions as needed.

### Works (`WorksPage.tsx`)

* **Intro copy**
  At the top of `WorksPage.tsx`:

  ```tsx
  <p>Scores, loudspeaker pieces, and installations…</p>
  ```

  Change this to refine how the console is described.

* **Praetorius integration**
  Avoid changing the `iframeSrc` line unless you move the console:

  ```ts
  const iframeSrc = `${import.meta.env.BASE_URL}praetorius/index.html`;
  ```

* **Meta bar label**
  The top strip of the console:

  ```tsx
  <span>Praetorius · works console</span>
  ```

  can be updated if you rebrand the console.

### About (`AboutPage.tsx`)

* **Main statement / narrative**
  The left column contains the longer text about practice and background. Edit the `<p>` blocks in `AboutPage.tsx` to change this content. Typography is handled globally; you only manage the text.

* **Snapshot & roles**
  The right column includes glass cards:

  * “Snapshot”: 1–2 sentence bio.
  * “Selected roles”: a small list of appointments / positions.

  Edit the JSX text in those sections; you don’t need to touch layout or classes.

### Press & media (`PressPage.tsx`)

* **Items data**
  At the top of `PressPage.tsx` you’ll find a simple array:

  ```ts
  const items = [
    {
      id: 1,
      type: "photo",
      title: "Studio portrait",
      outlet: "Photographer / credit",
      year: "2025",
      note: "High-res press photo.",
    },
    // …
  ];
  ```

  Add, remove, or edit entries here:

  * `type`: one of `"photo" | "video" | "article"` (used by the filter chips).
  * `title`: headline/label.
  * `outlet`: publication name, photographer, etc.
  * `year`: year tag.
  * `note`: short description (e.g. “High-res image, 300 DPI,” “Feature article,” etc.).

* **Links / downloads**
  If you have real image or article URLs, you can add anchor tags around titles or add explicit download buttons inside each tile.

### Contact (`ContactPage.tsx`)

* **Email address**
  Edit the `href` and visible text:

  ```tsx
  <a href="mailto:info@pkyorke.com">info@pkyorke.com</a>
  ```

* **Social links**
  In the “Social” list, replace the placeholder `Platform / @handle` with actual platform names and URLs.

* **Form fields**
  The contact form is currently a visual shell. To wire it up:

  * Add `onSubmit` logic to the `<form>` element (e.g. send to a form service or API).
  * Or point the form at a third-party endpoint.

  For non-dev edits, you can safely change labels and placeholder text.

---

## Contributing

This is a commissioned artist portfolio, not a general-purpose template. That said:

* **Bug reports / suggestions** are welcome via issues or PRs, especially around accessibility, performance, or integration with Praetorius.
* If you’re interested in the works console itself, see [Praetorius](https://github.com/cbassuarez/praetorius) for the open-source project that powers it.

---

## License

**All rights reserved.**

* The source code and visual design in this repository are not licensed for general reuse.
* For permissions regarding specific assets or code excerpts, please contact the maintainer.

---

## Credits

* **Artist**: p.k yorke
* **Design & development**: Sebastian Suarez-Solis / collaborators
* **Works console**: [Praetorius](https://github.com/cbassuarez/praetorius)

> If you’ve read this far into the README, you might already be the kind of person this console was built for.
