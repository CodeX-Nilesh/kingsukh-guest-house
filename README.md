# Kingsukh Guest House

Marketing site for Kingsukh Guest House, a guest house in Manpur, Barhanti near Baranti Hill and Lake.

Plain HTML5 + Tailwind CSS + vanilla JavaScript — no build step is required to view the site, only to
recompile the CSS after editing styles or markup.

## Project structure

```
index.html          All page markup (single page, section-based)
css/input.css        Tailwind source (design tokens, custom keyframes/utilities)
assets/css/styles.css  Compiled, minified CSS (generated — do not hand-edit)
js/script.js         Navigation, hero slideshow, scroll reveals, gallery lightbox, contact form
assets/images/        Site photography
tailwind.config.js    Tailwind theme (colors, fonts, etc.)
```

## Development

Requires Node.js (used only to run the Tailwind CLI; nothing ships to the browser from `node_modules`).

```sh
npm install
npm run watch   # rebuilds assets/css/styles.css on change while you edit
```

Then open `index.html` directly in a browser, or serve the folder with any static file server.

## Production build

```sh
npm run build   # writes a minified assets/css/styles.css
```

Deploy `index.html`, `assets/`, and `js/` — nothing else is required at runtime.
