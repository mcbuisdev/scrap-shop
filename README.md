# Scrap Shop

A request page for handmade items sewn from fabric scraps. Friends pick a scrap and a pattern, see a preview of the item in that fabric, and send a request by email.

**Live:** https://mcbuisdev.github.io/scrap-shop/

Built with plain HTML, CSS, and JavaScript. No build step.

## Updating fabrics and patterns
Everything is in `data.js`.

- **Add a photo:** put it in `images/fabrics/` and set `image: "images/fabrics/your-file.jpg"` on that fabric. Square crops look best.
- **Mark a scrap used up:** set `available: false`.
- **Add a fabric:** copy an existing entry and give it a new `id`. The `swatch` is only a placeholder for fabrics without a photo.
- **Pattern photos:** add `image: "images/patterns/bowl-cozy.jpg"` to a pattern to replace the drawn silhouette.

## Getting requests by email
1. Create a free form at https://formspree.io and copy its ID (the part after `/f/`).
2. Paste it into `formspreeId` in `data.js`.

Until then, submitting opens the visitor's email app addressed to `fallbackEmail`.
