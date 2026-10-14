/* ─────────────────────────────────────────────────────────────
   Scrap Shop data — edit this file to update the shop.

   FABRICS
   - id:        unique, no spaces
   - name:      shown on the swatch
   - size:      "small" | "medium" | "large"  (how big the scrap is)
                The "surprise" entry uses "any" and means you pick the fabric.
   - available: false greys it out once the scrap is used up
   - image:     path to a photo, e.g. "images/fabrics/sunny-gingham.jpg"
                Leave it out (or "") to use the placeholder swatch below.
   - swatch:    CSS background used as a placeholder until you add a photo
   - tags:      optional, used for the color filter

   PATTERNS
   - minSize:   smallest scrap that works for this item
   - image:     optional photo of a finished piece
   ───────────────────────────────────────────────────────────── */

window.SCRAP_SHOP = {
  // Paste your Formspree form ID here (e.g. "xyzabcde") to get requests by email
  // without leaving the page. Leave empty and the form falls back to opening
  // the visitor's email app with the request filled in.
  formspreeId: "",
  fallbackEmail: "morgan.cronanderbuis@gmail.com",

  fabrics: [
    // Special tile: the visitor lets you choose. Keep it first.
    { id: "surprise", name: "Surprise me", size: "any", available: true, special: true,
      swatch: "radial-gradient(circle, rgba(255,255,255,.35) 1.2px, transparent 1.6px) 0 0 / 10px 10px, conic-gradient(#e8b840 0 25%, #b6383a 0 50%, #3b5677 0 75%, #9db293 0) 0 0 / 100% 100%" },
    { id: "sunny-gingham", name: "Sunny Gingham", size: "large", available: true, tags: ["yellow"],
      swatch: "repeating-linear-gradient(0deg, rgba(232,184,64,.55) 0 12px, transparent 12px 24px), repeating-linear-gradient(90deg, rgba(232,184,64,.55) 0 12px, #fbf3dc 12px 24px)" },
    { id: "denim-ticking", name: "Denim Ticking", size: "large", available: true, tags: ["blue"],
      swatch: "repeating-linear-gradient(90deg, #3b5677 0 3px, #e9e4d8 3px 9px, #3b5677 9px 10px, #e9e4d8 10px 22px)" },
    { id: "cherry-dot", name: "Cherry Dot", size: "medium", available: true, tags: ["red"],
      swatch: "radial-gradient(circle at 25% 25%, #fbefe6 3px, transparent 4px) 0 0 / 16px 16px, radial-gradient(circle at 75% 75%, #fbefe6 3px, transparent 4px) 0 0 / 16px 16px, #b6383a" },
    { id: "sage-plaid", name: "Sage Plaid", size: "medium", available: true, tags: ["green"],
      swatch: "repeating-linear-gradient(0deg, rgba(70,96,70,.35) 0 6px, transparent 6px 26px), repeating-linear-gradient(90deg, rgba(70,96,70,.35) 0 6px, transparent 6px 26px), repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 1px, transparent 1px 13px), #9db293" },
    { id: "plum-pinstripe", name: "Plum Pinstripe", size: "small", available: true, tags: ["purple"],
      swatch: "repeating-linear-gradient(90deg, #5b3a5e 0 9px, #e8d9e4 9px 10px)" },
    { id: "rust-chevron", name: "Rust Chevron", size: "medium", available: true, tags: ["orange"],
      swatch: "linear-gradient(135deg, #f3e6d6 25%, transparent 25%) -12px 0 / 24px 24px, linear-gradient(225deg, #f3e6d6 25%, transparent 25%) -12px 0 / 24px 24px, linear-gradient(315deg, #f3e6d6 25%, transparent 25%) 0 0 / 24px 24px, linear-gradient(45deg, #f3e6d6 25%, transparent 25%) 0 0 / 24px 24px, #c0632f" },
    { id: "mint-check", name: "Mint Check", size: "small", available: true, tags: ["green"],
      swatch: "conic-gradient(#a8d8c4 25%, #eef8f3 0 50%, #a8d8c4 0 75%, #eef8f3 0) 0 0 / 18px 18px" },
    { id: "midnight-stars", name: "Midnight Stars", size: "large", available: true, tags: ["blue"],
      swatch: "radial-gradient(circle, #f2d77c 1.5px, transparent 2px) 0 0 / 22px 22px, radial-gradient(circle, rgba(242,215,124,.6) 1px, transparent 1.5px) 11px 11px / 22px 22px, #1f2a44" },
    { id: "blush-stripe", name: "Blush Stripe", size: "medium", available: false, tags: ["pink"],
      swatch: "repeating-linear-gradient(45deg, #efc4c4 0 10px, #fbecea 10px 20px)" },
    { id: "lemon-floral", name: "Lemon Floral", size: "small", available: true, tags: ["yellow"],
      swatch: "radial-gradient(circle at 50% 50%, #e6a93a 2px, transparent 3px) 0 0 / 20px 20px, radial-gradient(circle at 50% 50%, #fff 5px, transparent 6px) 0 0 / 20px 20px, radial-gradient(circle at 50% 50%, #7ea36b 3px, transparent 4px) 10px 10px / 20px 20px, #f6e7a6" },
    { id: "charcoal-linen", name: "Charcoal Linen", size: "large", available: true, tags: ["neutral"],
      swatch: "repeating-linear-gradient(0deg, rgba(255,255,255,.06) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 4px), #3e3d40" },
    { id: "oat-houndstooth", name: "Oat Houndstooth", size: "medium", available: true, tags: ["neutral"],
      swatch: "conic-gradient(from 45deg, #8a7a62 25%, #ece3d2 0 50%, #8a7a62 0 75%, #ece3d2 0) 0 0 / 14px 14px" }
  ],

  patterns: [
    { id: "bowl-cozy", name: "Bowl Cozy", minSize: "small",
      blurb: "A microwave-safe cradle so you can grab a hot bowl of soup without a towel.",
      sizes: ["Small bowl", "Large bowl"] },
    { id: "pot-holder", name: "Pot Holder", minSize: "small",
      blurb: "Quilted, double-insulated square with a hanging loop.",
      sizes: ["Standard 8\"", "Big 10\""] },
    { id: "zip-pouch", name: "Zipper Pouch", minSize: "medium",
      blurb: "Lined pouch for pencils, makeup, chargers, or snacks.",
      sizes: ["Small", "Medium"] },
    { id: "drawstring-bag", name: "Drawstring Bag", minSize: "medium",
      blurb: "Soft gift or project bag with a cord closure.",
      sizes: ["Gift size", "Project size"] },
    { id: "glasses-case", name: "Eyeglasses Case", minSize: "small",
      blurb: "Soft, padded sleeve with a snap flap to keep your glasses scratch-free.",
      sizes: ["Reading glasses", "Sunglasses"] },
    { id: "custom", name: "Something different", minSize: "small", custom: true,
      blurb: "Have another idea? Describe it in the notes and I'll see what the scrap can do.",
      sizes: ["Describe in notes"] },
    { id: "surprise-item", name: "Surprise me", minSize: "small", special: true,
      blurb: "Let me decide what to make. Tell me who it's for or how it'll be used if you like.",
      sizes: ["You pick"] }
  ]
};
