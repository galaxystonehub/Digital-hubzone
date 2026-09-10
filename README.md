# Digital Hub Zone

A lightweight product-deals storefront. Static site — no build tools, no server needed.

## Files
- `index.html` — page structure
- `style.css` — theme (light/dark), layout, colors
- `script.js` — search, category filter, theme toggle, share button
- `products.js` — your product list (edit this file to add/remove products)

## Add your real products
Open `products.js` and replace each `link` value with your actual AliExpress /
Daraz / Temu affiliate link, and swap the `image` placeholder for a real
product photo URL. Keep the `source` field — it shows the small "Via
AliExpress / Daraz / Temu" tag, which affiliate programs require so the link
is identifiable as a partner link.

The link is not printed anywhere on the page as visible or hoverable text —
the "Get this deal" button opens it through JavaScript only when someone taps
it, so a visitor browsing normally never sees the raw URL. One honest note:
this is a static site with no real server, so like any website's page
source, the link still exists inside `products.js` itself — anyone who
deliberately opens "view source" / inspects the page could find it. There is
no way to fully hide a destination URL on a site with no backend; this
approach just keeps it out of the normal browsing experience.

## Publish on GitHub Pages — from your phone
1. Extract the zip you downloaded — you'll get a folder with `index.html`,
   `style.css`, `script.js`, `products.js`, `README.md`.
2. Open GitHub.com in your phone's browser (or the GitHub app) and sign in.
3. Tap **+** → **New repository**. Name it `digital-hub-zone`, keep it
   Public, and create it.
4. On the new repo's page, tap **Add file → Upload files**.
5. From your file manager, select all files from the extracted folder and
   upload them. Commit the upload.
6. Go to the repo's **Settings → Pages**.
7. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
8. Wait a minute, then your site is live at:
   `https://<your-username>.github.io/digital-hub-zone/`

## Custom domain (optional, later)
Once you're ready, GitHub Pages supports connecting a custom domain from the
same Settings → Pages screen.
