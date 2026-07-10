# Serenity Star — Content Editing Guide

This is a plain-language guide to editing the site without breaking it.
You don't need to know how to code. Most edits are: find the text in the file, retype it, save.

---

## The big picture

The site is a "static" site — a folder of files that any web host can serve directly. There's no database, no backend, no build step. You edit a file, save it, drop the folder on Netlify (or your host), it's live.

**The whole site is in this folder:**

```
Serenity Star Website/
├── index.html         ← Home page
├── events.html        ← Events & weekly classes
├── coaching.html      ← Coaching & the team
├── kambo.html         ← Kambo info
├── retreats.html      ← Retreats (on-property + destination)
├── stay.html          ← Overnight stays
├── contact.html       ← Contact form & details
├── css/
│   └── styles.css     ← All the styling (don't touch this for content edits)
├── js/
│   └── main.js        ← All interactive behavior (don't touch this for content edits)
├── assets/
│   ├── logo/          ← Site logo (PNG)
│   └── photos/        ← Every photo on the site
├── CONTENT_GUIDE.md   ← This file
└── VERSION.md         ← Change history
```

---

## Which file controls which page

| Page on the live site | File to edit |
|---|---|
| Home page (serenitystar.co/) | `index.html` |
| Events & Weekly Classes | `events.html` |
| Coaching | `coaching.html` |
| Kambo | `kambo.html` |
| Retreats | `retreats.html` |
| Stay | `stay.html` |
| Contact | `contact.html` |

Every page has a comment block at the very top (just below `<!DOCTYPE html>`) that lists what sections live on that page. Open the file in any text editor — TextEdit on Mac, Notepad on Windows, or VS Code if you prefer something with syntax highlighting.

---

## How to edit text

Every editable text block on the site is between angle-bracketed tags like `<h1>...</h1>` or `<p>...</p>`. You change the words **between** the tags. You don't change the tags themselves.

**Headlines** live inside `<h1>`, `<h2>`, or `<h3>` tags:

```html
<h1>Real tools for people ready to <em>heal</em> and live differently.</h1>
```

To edit, just retype what's between `<h1>` and `</h1>`. The `<em>` inside is what makes a word italic — leave it alone if you want italics, or remove it if you don't.

**Body paragraphs** live inside `<p>` tags:

```html
<p class="lead">
  Weekly classes, 1:1 coaching, kambo ceremonies, sound baths, contrast
  therapy, and retreats, all in one place at Serenity Star in North Fort
  Myers, Southwest Florida.
</p>
```

The `class="lead"` part is what makes the paragraph slightly bigger. Leave it. Just retype the words.

**Button text** is the words between `<a ...>` and `</a>`:

```html
<a href="events.html" class="btn btn-light btn-arrow">See what's on this week</a>
```

To change the button label, retype "See what's on this week". To change where the button goes, retype the URL between the quotes after `href=`.

**To find a specific spot in a file:** use Find (⌘F on Mac, Ctrl+F on Windows) and search for "EDIT:". I've left markers around the most commonly-changed places.

---

## How to update an event (home page)

Open `index.html`, search for `TO UPDATE EVENTS`. You'll find an HTML comment that walks you through it. Below the comment are three event rows. Each row is one `<div class="event-row">...</div>` block.

To **change** an event, edit the day, weekday/time, tag, title, details, and price text inside that block.

To **add** an event, copy one of the existing `<div class="event-row">...</div>` blocks (everything from the opening tag to the closing tag) and paste it where you want it to appear, then edit the values.

To **remove** an event, delete one whole `<div class="event-row">...</div>` block.

For the full events page (`events.html`), the pattern is similar but each event is an `<article class="card">...</article>`. Same idea: copy, paste, edit, or delete the whole block.

---

## How to update the full calendar

The full calendar on the events page is embedded directly from Google Calendar. You **never edit the website** to add or remove events from it.

1. Go to [calendar.google.com](https://calendar.google.com) on desktop and sign in.
2. Find the "Serenity Star Events" calendar in the left sidebar.
3. Add, change, or remove events directly in Google Calendar.
4. Within a few minutes, the site updates automatically.

**If the calendar shows "you don't have permission to view"**, the calendar isn't public yet. Open `events.html`, search for `CALENDAR PERMISSION FIX NEEDED` — there's a six-step comment walking through how to make the calendar public.

---

## How to update pricing

Prices are plain text. Search the file for the dollar amount or for "per person" / "per session" and you'll find them inline.

Examples:

- Class prices on `events.html`: search for `$20 per person`, `$25 per person`, etc.
- Coaching session rate on `coaching.html`: search for `From $[rate]` and replace `[rate]` with the real number.
- Retreat prices on `retreats.html`: search for `From $4,800` (or similar).

If a price has square brackets like `$[rate]` or `$[—]`, that's a placeholder. Replace the bracketed part with the real number.

---

## How to update retreat dates

Retreat dates live in two places:

1. The "tag" line above the title (e.g., `<span class="card-tag">July 2026 · 2 Days · On the Property</span>`).
2. Sometimes inside the body description.

Open `retreats.html`, find the retreat by its title, and edit the date wherever it appears. Save.

If a retreat doesn't exist anymore, delete the whole `<article class="card">...</article>` block.

If you want to add a new retreat, copy an existing card block, paste it, and edit the date, title, body, image filename, and link.

---

## How to swap a photo

1. Drop the new photo into `assets/photos/`. Keep the filename short, lowercase, with hyphens (`brittany-talk.jpg`, not `Brittany Talk Photo IMG_1234.jpeg`).
2. In the page where you want to use it, find the `<img src="assets/photos/old-name.jpg" ... />` you want to replace and change `old-name.jpg` to your new filename.
3. If the new photo has different proportions (portrait vs. landscape), it will still display — `object-fit: cover` keeps it filling the box.

**Suggested photo dimensions:**

- Hero photos: 2000 × 1200 px or larger
- Card photos: 1200 × 900 px
- Coach portraits: 800 × 1000 px (portrait orientation)
- Aerial / landscape band photos: 2400 × 1200 px

JPG is fine for photos. Use PNG only for things with transparency (like logos).

---

## How to update testimonials

Open `index.html`, search for `Ask Brittany for real testimonials`. Below that comment are three `<article class="quote-card">...</article>` blocks. Each one has a `<p>` with the quote and a `<span>` with the author and city.

Replace the placeholder text inside each `<p>` with the real testimonial. Replace `[Name] · [City]` with the real name and city.

---

## How to update contact info

Most contact info lives in two places:

1. **Footer** of every page (email, Instagram, Calendly link).
2. **`contact.html`** — the main contact page with the form and full details (WhatsApp numbers, etc.).

Footer is identical on every page. If you update it on one page, update it on all 7. (One day this will be templated, but for now it's a copy/paste job.)

To update WhatsApp numbers on `events.html` and `contact.html`, search for `978-501-0652` or `317-796-4474` and replace.

---

## How to swap the logo

1. Export your new logo as a transparent PNG at roughly **400 × 400 pixels** (2x or 3x the display size for retina sharpness).
2. Drop the file at `assets/logo/serenity-star-logo.png` — same filename, just overwrite the old file.
3. That's it. Every page already references that path, so they'll all pick up the new logo on next page load.

**No CSS or HTML edits needed.** The styling for the logo has been stripped of backgrounds, borders, shadows, and filters specifically so a transparent PNG displays cleanly without any unwanted decoration.

If the new logo looks too big or too small, you can adjust its display size in one place: `css/styles.css`, search for `.brand-mark img` and change the `height` value. Default is 44px desktop, 40px tablet, 36px mobile.

---

## How to update Calendly / Mailchimp / Hipcamp links

All booking and signup integrations are referenced as full URLs in the HTML. They're easy to find with Find / Replace.

| Service | What to search for | Where it appears |
|---|---|---|
| Calendly (booking) | `calendly.com/serenitystarfl/30min` | Every page — replace one, copy across all 7 |
| Mailchimp (email signup) | `action="#"` inside `<form class="mailchimp-form"` | `events.html` only — comment above the form walks through Mailchimp setup |
| Hipcamp (stay listing) | `href="#"` inside the Hipcamp button | `stay.html` — comment marks the spot |
| Instagram | `https://instagram.com` | Footer of every page + `contact.html` — replace with `https://instagram.com/yourhandle` |

Individual coach Calendly links live on `coaching.html` in each coach card. HTML comments next to each booking button mark where to paste each coach's personal Calendly link when they send it.

---

## Common rules to keep things safe

1. **Don't change `class="..."` attributes.** They control the styling.
2. **Don't change tag structure.** If a paragraph is `<p>...</p>`, keep the `<p>` and `</p>` intact.
3. **Save the file as UTF-8.** TextEdit on Mac sometimes saves as RTF by default — make sure it's plain text.
4. **Test locally before publishing.** Double-click `index.html` to open it in your browser. Click around. If it looks right, deploy.
5. **Update VERSION.md** whenever you make a significant change. It's a running history — useful for going back if something goes wrong.

---

## If something breaks

The site is plain HTML/CSS/JS. If a page looks broken after an edit, you almost certainly:

- Deleted a closing tag (`</p>`, `</div>`, `</article>`), or
- Removed a quote mark inside an attribute (`class="..."`), or
- Saved the file in the wrong format (RTF instead of plain text).

Undo your last edit and try again, smaller this time. Each edit should change one specific thing.

---

## Deploying changes

1. Open Netlify (or whatever host you use).
2. Drag the entire `Serenity Star Website` folder onto Netlify Drop, or onto your existing site to update it in place.
3. Live in about 30 seconds.

For a friendlier (and trackable) workflow, push the folder to GitHub and connect the GitHub repo to Netlify. Every git push then auto-deploys. Ask for help setting this up the first time.
