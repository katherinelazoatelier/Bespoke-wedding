# Katherine Lazo Atelier — website

The redesigned site for [katherinelazo.com](https://www.katherinelazo.com): plain HTML, CSS and a little JavaScript. No build step; open `index.html` in a browser or upload the folder to any web host.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Overview, service cards, booking steps, portfolio, reviews |
| Weddings | `weddings.html` | Wedding Bespoke Package: what's included, 3 collections, process, FAQ |
| Live Art | `live-art.html` | Live event painting for parties and brands |
| Workshops | `workshops.html` | Workshops + Gatherings: public, private parties, corporate |
| Commissions & Design | `commissions.html` | Watercolor, acrylic and fabric commissions, plus surface pattern design (`#pattern`) |
| About | `about.html` | Bio and values |
| Book | `book.html` | Inquiry form, next steps, booking FAQ |

## Where people can book

- **Book Now** button in the header on every page
- A banner across the top of every page ("check your date")
- A "Check my date & book" bar pinned to the bottom of the screen on phones
- A booking band above the footer on every page
- **Book this service** buttons on each service page

Service links open the form with that service already ticked (e.g. `book.html?service=weddings`).

## Before launch checklist

1. **Connect the booking form.** Create a free form at [formspree.io](https://formspree.io), then paste its URL into `FORM_ENDPOINT` at the top of `assets/js/site.js`. Until then, the form opens the visitor's email app instead.
2. **Set your email address** in `CONTACT_EMAIL` in the same file. It updates every email link on the site. Right now it's set to `hello@katherinelazo.com` as a placeholder.
3. **Add your photos** to `assets/img/` and replace the soft watercolor placeholder blocks (`<div class="art ...">`). Each one has a comment showing the `<img>` tag to use.
4. **Add real client reviews** on `index.html`. The three quotes there are placeholders.
5. **Set prices** on the package cards if you want them shown ("Inquire for pricing" right now).
6. **Update social links** (Instagram, Pinterest) in the footer and on `book.html`.
7. **Check the copy:** the About bio, package contents, FAQ answers and policies are drafts to edit in your own words.

## Hosting

Any static host works: GitHub Pages (Settings → Pages → deploy from branch), Netlify, Cloudflare Pages, or upload the files to your current host and point `katherinelazo.com` at it.
