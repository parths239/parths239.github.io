# Parth Sharma — portfolio website

A responsive, static website reconstructed from five screenshots and the supplied screen recording. No server, database, or build step is required. You can host it for free on Netlify, GitHub Pages, Cloudflare Pages, or another static hosting provider.

## Preview on your computer

Extract the ZIP. Double-click `index.html`, or open a terminal in the `parth-portfolio` folder and run:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Customize before launch

1. Open `site-config.js` in a text editor to check your **email and LinkedIn** (taken from the recording) and add GitHub profile, live project and repository URLs. Blank links intentionally fall back to the contact section and aren't silently redirected to somebody else's profile.
2. Open `resume.html` to edit your education/experience/project descriptions. It currently reproduces only basic information visible in the screenshots; the printable version is **not a substitute** for your detailed current resume. The button "Print / Save as PDF" allows saving a browser-generated PDF.
3. Replace `assets/portrait.png`, `assets/project-*.png`, and experience/skill logo images with original high-resolution files if you have them. The current graphics are crops from the provided screenshots and may look soft on large displays.
4. Update the section copy in `index.html` and verify that dates, skills, roles and descriptions are still current.
5. Optionally replace the blue `assets/favicon.svg` logo.

## Launch with Netlify Drop (no coding required)

1. Sign in at https://app.netlify.com/drop.
2. Drag the **unzipped `parth-portfolio` folder** onto the upload area (not the ZIP file). The folder must contain `index.html` at its root.
3. Netlify provides a temporary `*.netlify.app` URL. Test the home page, projects, resume page, and mobile menu.
4. In Netlify, open **Domain management → Add a domain** and enter your existing custom domain.
5. At your domain registrar / DNS host, set exactly the DNS records shown by Netlify's domain setup screen. The records depend on whether you're connecting an apex domain, a `www` subdomain, or Netlify DNS.
6. After DNS propagation, check HTTPS and choose whether the `www` or non-`www` domain is primary, with redirect enabled for the other.

## Alternatively, publish via GitHub Pages

Create a public repository, upload the *contents* of this folder to the repository root, then enable **Settings → Pages → Deploy from a branch** (branch `main`, folder `/ (root)`). For a custom domain, follow the DNS setup shown in GitHub Pages settings. GitHub Pages supports `index.html` and `resume.html` as-is.

## Files

- `index.html`: the portfolio sections and project cards.
- `experience.html`: the detailed experience page shown in the recording.
- `projects.html`: a project listing.
- `projects/laguna.html`, `projects/yelpcamp.html`, `projects/movienest.html`: detailed project pages.
- `resume.html`: browsable and printable basic resume.
- `styles.css`: colors, typography, page layouts and mobile breakpoints.
- `script.js`: mobile navigation, active-section highlighting and configurable contact/project links.
- `site-config.js`: your email and social/project links (edit before publishing).
- `assets/`: images extracted from the provided screenshots, plus the SVG favicon.

## Notes

The site's reference colors are cream `#f8ecdf`, dark green `#294f3f`, and gold `#eba53d`. Fonts load from Google Fonts (Poppins), with system font fallbacks. No analytics, tracking, or external JS libraries are included.

## Updated from the screen recording

The reference video shows that the project cards navigate to standalone pages with large images, GitHub / Live Site buttons and descriptions, and that **Read details** navigates to a long, separate Experience page. These behaviors have been recreated. Blank GitHub/project URLs show an explanation instead of linking to unrelated sites. The Resume links currently lead to a draft printable page until you supply your PDF.

The screenshots extracted from the recording are provisional assets; please supply high-resolution originals to replace them for launch.
