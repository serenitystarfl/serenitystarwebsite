# Serenity Star — Version History

A running changelog. Add a new dated entry at the top whenever you make a significant change. Keep entries short and concrete.

## 2026-06-22 — Gallery page, event reorder, TikTok fix

What changed:
- Fixed broken TikTok URL site-wide: `https://tiktok.com/@SerenityStarFL` → `https://www.tiktok.com/@serenitystarfl` (replaced on all 7 existing pages + gallery).
- Re-ordered Upcoming Events on the homepage to chronological week order: Wed (Evening Reset) → Thu (Bridge Between) → Fri (Divine Alignment).
- Re-ordered weekly cards on the Events page to the same Wed → Thu → Fri order (Sauna By Inquiry stays last).
- New page: **gallery.html** — masonry-style grid of 33 photos from `assets/photos/gallery/`, with click-to-open lightbox (keyboard nav: arrows + Escape) and lazy-loaded images. All images were resized to max 1600px wide and re-encoded as progressive JPEGs (q=82); combined gallery weight dropped from ~150 MB raw to ~14 MB. The original HEIC file was converted to JPG.
- Added "Gallery" link to the desktop nav, mobile nav, and footer Explore list across all 8 pages.
- New CSS: `.gallery-grid` (CSS columns masonry, 3/2/1 columns at 900px/480px breakpoints), `.lightbox` styles.
- New JS in `js/main.js`: lightbox open/close + prev/next + keyboard navigation.

Files modified:
- index.html, events.html, coaching.html, kambo.html, retreats.html, stay.html, contact.html
- css/styles.css
- js/main.js

Files added:
- gallery.html
- assets/photos/gallery/ (33 optimized JPGs)


## 2026-06-17 — Mobile coaches fix + retreat ordering

What changed:
- Fixed mobile bug where team grid stayed invisible on coaching page. Root cause: `.reveal` IntersectionObserver used `threshold: 0.12`, which can be unreachable for very tall elements on small screens. Lowered to `0.01` and removed `.reveal` from the team-grid wrapper specifically. Added a CSS keyframe fallback so any `.reveal` element reveals after 2.5s even if the observer never fires, plus a `prefers-reduced-motion` override.
- Re-ordered destination retreat cards chronologically: Soulrender Tulum (Sep 11–15, 2026) → South Africa Yoga Safari (Nov 29 – Dec 5, 2026) → Portugal (2027).
- Replaced generic card tags with real date ranges on Soulrender and South Africa cards.

Files modified:
- js/main.js
- css/styles.css
- coaching.html
- retreats.html


Format:

```
## YYYY-MM-DD — Short summary

What changed:
- One line per change

Files modified:
- file1.html
- file2.html
- css/styles.css
```

---

## 2026-06-17 (final patch) — Jenny Rull testimonial, Events Stripe links, Stay Main House note, facilitator tile dark, Olivia email fix, Tally URLs live

What changed:
- stay.html What to Expect bullet list: added a first bullet The Main House is not available for rent. Camper accommodations are available throughout the property. Other four bullets unchanged.
- index.html testimonials: Jenny Rull placeholder fully replaced with her real testimonial (meeting Brittany at Publix, joining the Thursday Bridge Between group as a traveling nurse, opening up about her Plant Medicine and Kambo experiences, sitting with Brittany for a Kambo session before her next contract).
- events.html: All three weekly-event Book a Spot button hrefs migrated from Calendly to direct Stripe checkout. Bridge Between -> https://buy.stripe.com/9B66oAd7wghraTBbUCf3a00. Divine Alignment -> https://buy.stripe.com/dRm9AMffE2qBgdVe2Kf3a01. The Evening Reset -> https://buy.stripe.com/fZucMY5F40it7HpgaSf3a02. HTML comments updated from STRIPE: placeholder note to Stripe checkout direct payment markers. Button labels kept as Book a spot per spec.
- coaching.html Facilitator and Practitioner rental tile: background switched from cream-soft to var(--ink) (near-black) with cream-soft text and clay-coloured eyebrow for contrast. Button restyled from btn-ghost to btn-outline-light so it reads cleanly on the dark background. Copy and layout structure unchanged.
- coaching.html Olivia Wolfe Book with Olivia link: mailto target changed to OHWOLFE@gmail.com. Routes directly to email draft on desktop and mobile.
- retreats.html South Africa Yoga Safari Retreat Join the Waitlist button: TALLY placeholder href replaced with https://tally.so/r/PdPa81. TALLY placeholder HTML comment removed.
- retreats.html Portugal Retreat Join the Waitlist button: TALLY placeholder href replaced with https://tally.so/r/ODVWog. TALLY placeholder HTML comment removed. Urgency line Limited to 12 spaces, reserve your space today preserved.

Files modified:
- stay.html
- index.html
- events.html
- coaching.html
- retreats.html
- VERSION.md

---

## 2026-06-17 (consolidated update) — Facilitator names, footer Contact Us + Rent Our Space, Voice of the Rose removed, Stay sauna update, Soulrender filename fix

What changed:
- index.html: Bridge Between event row meta now shows With Aubrey + Brittany (replaces Max 20 spots). Divine Alignment row meta now shows With Vitaliy (replaces Max 15 spots). Existing Stripe links and Reserve Your Spot button labels unchanged.
- events.html: Voice of the Rose Sound Bath with Susie card removed entirely from the Special Events Coming Up section. The Art of Shamanism and the practitioner-rental dark card remain as the only two cards there, kept visually separate.
- events.html: Sauna and Cold Plunge Session card body replaced. Card tag now reads By Inquiry. Body copy: Private and group sauna and cold plunge sessions available. Inquire here. (with Inquire here linking to contact.html). All previous $75/hour pricing and group-pricing-coming-soon notes removed. Single Inquire here button replaces Book a session.
- coaching.html: New facilitator/practitioner rental CTA panel added at the bottom of Ways to Work Together. Dashed-border cream-soft block sits below the two offering cards, clearly separate, with eyebrow For Facilitators and Practitioners and CTA Book a discovery call routing to Brittany Calendly.
- coaching.html: Olivia Wolfe Book with Olivia button now uses mailto:oscarhotelwhiskeyoscarlimafredecho@gmail.com. The previous contact.html href and Replace with Olivia Calendly comment are removed.
- All 7 page footers: Contact text changed to Contact Us. New list item added directly below: Rent Our Space, linking to contact.html. Order in Connect column: Contact Us, Rent Our Space, Book a discovery call, Instagram, WhatsApp community, TikTok, email.
- retreats.html South Africa Yoga Safari Retreat: CTA button text changed to Join the Waitlist with target=_blank rel=noopener. The placeholder href is # with a clearly-marked TALLY comment instructing where to drop the South Africa Tally waitlist form URL when received.
- retreats.html Portugal Retreat: italic urgency line updated to Limited to 12 spaces, reserve your space today. CTA button text changed to Join the Waitlist with the same TALLY placeholder comment for the Portugal Tally form URL.
- retreats.html Soulrender Tulum Transformation Retreat card: image src updated to assets/photos/soulrender-retreat-page.jpg (the actual filename on disk). onerror tropical fallback removed since the real image is in place. Card body restructured to include an Includes: bullet list (private cenote excursion, beach day and shopping in Tulum, sacred fire circles, creative art experiences, private cave celebration dinner). External Soulrender link preserved.
- stay.html hero intro paragraph updated to The Main House is not available for guest rentals. Camper accommodations are available on the property, primarily for guests coming in for coaching, kambo, or retreats.
- stay.html sauna pricing line replaced: removed $75/hour wording and the Book via the events page link. New text: Private and group sauna and ice bath sessions are available. Inquire here. (Inquire here linking to contact.html).

Files modified:
- index.html
- events.html
- coaching.html
- retreats.html
- stay.html
- contact.html (footer)
- kambo.html (footer)
- VERSION.md

---

## 2026-06-17 (master update) — Stripe checkout on homepage, Art of Shamanism, Tulum retreat, Portugal urgency, Immersive price, Jenny Rull placeholder

What changed:
- index.html: All 3 homepage event Book a Spot buttons now route to direct Stripe Checkout links (NOT Venmo, NOT Calendly). Bridge Between -> https://buy.stripe.com/9B66oAd7wghraTBbUCf3a00 (button: Reserve Your Spot - $20). Divine Alignment -> https://buy.stripe.com/dRm9AMffE2qBgdVe2Kf3a01 (button: Reserve Your Spot - $25). Replaced the third homepage event row (previously Voice of the Rose with Susie) with The Evening Reset weekly event (Cold Plunge 6pm + Sound Bath 7pm, facilitated by Tiffany Maria Macia) -> https://buy.stripe.com/fZucMY5F40it7HpgaSf3a02 (button: Reserve Your Spot - $35). HTML comments above each button updated from Venmo references to Stripe checkout notes. target=_blank rel=noopener preserved.
- events.html: NEW Special Events card added between Voice of the Rose and the practitioner outreach card -> The Art of Shamanism with Megan. July 2 at 7:00pm, $30, photo megan-coaching-headshot.jpg, Stripe checkout https://buy.stripe.com/eVqbIUffEe9jgdV2k2f3a03 with button Reserve Your Spot - $30. Card matches existing Special Events styling exactly.
- index.html testimonials: 4th testimonial card added for Jenny Rull. Content marked as UNCHANGED - KEEP PREVIOUS VERSION in the brief but no prior Jenny Rull testimonial existed on file. Card body is a clearly-marked placeholder with an HTML comment instructing where to paste her quote when received.
- retreats.html Portugal Retreat: card-tag changed from 2027 - Dates TBC to 2027 - Limited to 12 spaces. Added an italic urgency line (Limited to 12 spaces. Spots are filling.) styled with the clay accent colour. CTA button text changed from Join the waitlist to Reserve your space today.
- retreats.html Immersive Container card: price line changed from Application required to $4,500 - Application required.
- coaching.html Immersive Container card: same pricing update -> $4,500 - Application required.
- retreats.html: NEW Destination Retreat card added after Portugal -> Soulrender Presents: Tulum Transformation Retreat (5 days / 4 nights, full body text from brief covering jungle setting, daily yoga + Pilates + breathwork + meditation + sound healing + Mayan ceremonies + workshops, plus cenote excursion + beach day + fire circles + cave dinner). External link to soulrenderretreatstulum.com with target=_blank rel=noopener. Image references assets/photos/tulum-retreat.jpg with onerror fallback to garden-banana.jpg (tropical foliage) so the card renders cleanly until Brittany drops in the real Soulrender hero image. Card matches existing destination retreat card styling.

Files modified:
- index.html
- events.html
- coaching.html
- retreats.html
- VERSION.md

---

## 2026-06-17 (patch) — Homepage Book-a-Spot → Venmo, Olivia photo fix, Events Venmo removed

What changed:
- index.html: All 3 "Book a spot" buttons in the Upcoming Events section now link to https://www.venmo.com/u/SerenityStarFL (direct Venmo payment). Previously they pointed to Brittany'''s Calendly. The HTML comment above each button updated from "STRIPE: replace href ..." to "Book a Spot routes directly to Brittany'''s Venmo payment link." so the new behavior is clear in source. target="_blank" rel="noopener" preserved.
- coaching.html: Olivia Wolfe coach card image swapped from assets/photos/olivia-coaching-headshot.jpeg (full-body shot that required CSS transform: scale(2.6) to crop) to assets/photos/olivia-headshot-photo.jpg (clean headshot). The transform: scale and transform-origin inline styles removed so the new headshot displays at native crop, matching the styling of every other coach card.
- events.html: All 4 "Pay via Venmo (Brittany)" buttons removed from the event cards (Bridge Between, Divine Alignment, Evening Reset, Sauna and Cold Plunge). Existing Book a Spot / Book a Session anchors and their flex-row wrappers stay intact — the row now contains only the primary booking CTA, which expands to fill the row width on its own. Venmo integration is unchanged everywhere else on the site (e.g. homepage Book a Spot buttons).

Files modified:
- index.html
- coaching.html
- events.html
- VERSION.md

---

## 2026-06-15 (round 2) — Final revision: Personalized retreat moved, Olivia + Brittany coaching photos, address, Venmo, Bridge Between schedule, WhatsApp widget

What changed:
- retreats.html: Removed the "A Personalized Retreat at Serenity Star" card entirely from the Retreats page. The offering still lives on coaching.html under "Ways to Work Together" (no change there). File-header comment updated to reflect new card list (Immersive Container, Women's Retreat, Alignment Experience) and notes that the 1:1 Personalized Retreat intentionally lives on Coaching instead.
- coaching.html: Brittany's coach card image swapped from brittany-kambo-frog.jpg to brittany-kambo-coaching.jpg (cohesive with the kambo coaching context).
- coaching.html: NEW coach card added at the end of the team grid — Olivia Wolfe, "Iridology & Holistic Wellness Consultations". Uses assets/photos/olivia-coaching-headshot.jpeg with a CSS transform: scale(2.6) and transform-origin: 50% 22% to crop tightly to her face from the full-body source image. Full bio included. Booking button currently routes to contact.html with an HTML comment marking where to drop Olivia's Calendly link when ready.
- coaching.html file-header comment updated to include Olivia in the team list.
- events.html "Pay via Venmo (Brittany)" button added next to every "Book a spot" / "Book a session" button (Bridge Between, Divine Alignment, Evening Reset, Sauna and Cold Plunge). New CSS class .btn-venmo styles them in Venmo blue (#3D95CE), responsive sizing on mobile. Each pair sits in a flex row so existing Stripe/Calendly placeholders are untouched and Venmo is presented as an additional option.
- A Bridge Between scheduling: every "Every Thursday" reference replaced with "Select Thursdays" / "Offered on select Thursdays (limited schedule)" across index.html (offerings card + upcoming event row), events.html (card tag + description), and coaching.html (Aubrey's bio).
- Address added to every footer "The Land" section across all 7 pages: 7031 Rich Rd, North Fort Myers, FL 33917. Clickable to Google Maps via maps.google.com URL with target="_blank" rel="noopener". The "Address shared on confirmation" placeholder line is removed.
- contact.html right-side info column: "The Land" block heading changed to "Address" and the placeholder text replaced with the full clickable address.
- NEW WhatsApp Community floating widget: CSS in styles.css (.wa-widget — fixed bottom-right, WhatsApp green #25D366, responsive: pill on desktop, collapses to icon-only at ≤420px). Injection via js/main.js (vanilla DOM injection on DOMContentLoaded equivalent, runs inside the existing IIFE). Appears on every page automatically. Link to https://chat.whatsapp.com/LCV1WsL05Qp3bKisuwAA6p with proper aria-label and title for the supporting text. z-index 40 so it sits above content but below the mobile nav overlay (z-index 60).

Files modified:
- retreats.html
- coaching.html
- events.html
- index.html
- contact.html
- All 7 page footers (address line)
- css/styles.css
- js/main.js
- VERSION.md

---

## 2026-06-15 — Final production migration: exact filenames, SA Yoga Safari card, legacy paths removed

What changed:
- stay.html hero img: assets/photos/stay-camper.jpg + onerror fallback → assets/photos/camper-exterior-accommodation.jpg (single src, no fallback). New SEO-friendly alt text.
- events.html Evening Reset card img: assets/photos/evening-reset.jpg + onerror fallback → assets/photos/evening-reset-event.jpg (single src). New alt text.
- coaching.html Immersive Container card img: assets/photos/immersive-container.jpg + onerror fallback → assets/photos/immersive-container-program.png. New alt text.
- retreats.html Immersive Container card img: same migration → immersive-container-program.png.
- retreats.html Portugal Retreat card img: assets/photos/portugal.jpg → assets/photos/portugal-retreat-hero.png. New alt text.
- retreats.html South Africa card: replaced placeholder body with the full South Africa Yoga Safari Retreat description (Kruger National Park, 7 days, daily yoga + breathwork + meditation + safari game drives + nervous system reset). Tag updated to "2026 · 7 Days · Kruger National Park". Title updated to "South Africa Yoga Safari Retreat". Existing south-africa.jpg image kept.
- All onerror fallback patterns pointing at legacy filenames (stay-bus-golden.jpg, aerial-lake-deck-barn.jpg, sauna-deck-sunset.jpg) removed since the production files are now in place.
- Zero legacy image references remain in the deployed HTML.

Files modified:
- stay.html
- events.html
- coaching.html
- retreats.html
- VERSION.md

---

## 2026-06-10 (final-round) — Two new testimonials, Evening Reset event, Immersive Container, photo placeholders, SEO meta, audit doc

What changed:
- index.html testimonials: two placeholder cards replaced with Leticia Uribe's long-form testimonial and Erik Anderson's recovery-focused testimonial. All three cards are now real.
- coaching.html: Aubrey's "Book with Aubrey" button now links to https://calendly.com/aubreyleonard (new tab). Vitaliy's button now links to https://calendly.com/divinealignment1266/safariwellnessretreatdiscoverysession.
- coaching.html: Brittany's coach card now uses brittany-kambo-frog.jpg so the founder split section (snake photo, brittany-founder.jpg) and the team grid no longer carry the same photo.
- coaching.html: The Immersive Container card rewritten with "Return to Self" flagship copy. Tag is now "Flagship · 12 Weeks". References assets/photos/immersive-container.jpg with onerror fallback to aerial-lake-deck-barn.jpg.
- retreats.html: Personalized Retreat photo swapped from brittany-founder.jpg (red dress / snake) to brittany-onproperty.jpg (sauna in background).
- retreats.html: NEW flagship card "The Immersive Container: Return to Self" added with Brittany's new copy. Same image-path + fallback pattern as the coaching card.
- retreats.html Women's Retreat pricing: $4,000 per person → Starting at $500+.
- retreats.html Portugal Retreat description rewritten with the Shaman João / drum circle / overnight sound immersion copy. Image path unchanged at portugal.jpg (Brittany to overwrite the file with the new drum-circle photo).
- events.html: NEW weekly card "Evening Reset: Cold Plunge & Sound Bath" added to the Every Week section. Wednesdays 6:00pm / 7:00pm with Tiffany Maria Macia, $35 per person. Image references assets/photos/evening-reset.jpg with onerror fallback to sauna-deck-sunset.jpg.
- stay.html hero photo: switched to reference assets/photos/stay-camper.jpg with onerror fallback to stay-bus-golden.jpg. Drop the new camper photo at that path and it appears automatically.
- All 7 pages: Open Graph + Twitter Card meta tags added (og:title, og:description, og:type, og:image, og:url, twitter:card, twitter:title, twitter:description, twitter:image).
- FINAL_AUDIT.md created with page-by-page summary, remaining launch items, missing content recommendations, SEO + conversion + mobile + trust recommendations, and launch readiness score (currently 8/10) with the specific gap to 10.

Files modified:
- index.html
- events.html
- coaching.html
- retreats.html
- stay.html
- contact.html (OG meta only)
- kambo.html (OG meta only)
- FINAL_AUDIT.md (new)
- VERSION.md

---

## 2026-06-10 (later 3) — Formspree contact form, Mailchimp signup, WhatsApp community link

What changed:
- contact.html contact form is now wired to Formspree (https://formspree.io/f/xbdekpky). Added hidden _replyto field set to serenitystarfl@gmail.com. Added a green success div (#form-success) directly above the form that shows after a successful submission. Submit button now carries id="form-submit". Removed the old "Replace the demo handler in js/main.js" developer note paragraph.
- js/main.js contact-form handler replaced with an async fetch to Formspree. On success the form is hidden and the success message appears; on failure (HTTP error or network error) the button resets and an alert directs people to email serenitystarfl@gmail.com.
- events.html newsletter form wired to the Serenity Star Mailchimp audience (https://serenitystarwellness.us12.list-manage.com/subscribe/post?u=39a93b07fe026bcb90cc39a70&id=45cb70325d&f_id=00f28de3f0). Added a FNAME input alongside EMAIL. Added the Mailchimp anti-bot honeypot (b_39a93b07fe026bcb90cc39a70_45cb70325d) inside the form. Button still reads "Stay in the loop" with type="submit". Form opens confirmation in a new tab (target="_blank").
- Added mc-validate.js script tag at the bottom of events.html (just before </body>). Note: index.html does not currently host a newsletter form, so the Mailchimp wiring only applies to events.html for now. If/when a signup form is added to index.html, copy the same form block + the mc-validate.js script include.
- Added "Join our WhatsApp community" list item to the Connect column of every footer (all 7 pages), placed directly below Instagram and above TikTok. Link target: https://chat.whatsapp.com/LCV1WsL05Qp3bKisuwAA6p with target="_blank" rel="noopener".
- contact.html right-side contact info column: added a new "Community" block under the Instagram block, inviting visitors to join the Serenity Star WhatsApp community. Same group link.
- index.html dark CTA section: added a soft secondary line below the "Get in touch" button reading "Or join our free community on WhatsApp" linking to the same group URL.

Files modified:
- contact.html
- index.html
- events.html
- coaching.html (footer only)
- kambo.html (footer only)
- retreats.html (footer only)
- stay.html (footer only)
- js/main.js
- VERSION.md

---

## 2026-06-10 (later 2) — Lauren's booking link live

What changed:
- Lauren Tancredi's "Book with Lauren" button on coaching.html now links directly to her booking widget (https://link.mypractos.com/widget/booking/M6lBga6PVlF0tkelloZf) with target="_blank" rel="noopener". The "Replace with Lauren's Calendly link when ready." placeholder comment has been removed.

Files modified:
- coaching.html
- VERSION.md

---

## 2026-06-10 (later) — First testimonial live, sauna pricing live, real Hipcamp link

What changed:
- index.html testimonials: first quote card replaced with Talon McChesney's full testimonial (left intact at full length; the auto-fit flex grid stretches the card to fit). The second and third cards remain as placeholders, each now preceded by a comment "Real testimonials coming. Replace these placeholders when Brittany sends them." so they're easy to find later.
- index.html Ice Bath and Sauna offering card body: now reads "Cedar barrel sauna and cold plunge on the deck. Private sessions from $75/hour. The fastest way to reset your body and nervous system."
- events.html Sauna and Cold Plunge Session card: price line is now "Private session — $75 per hour" with a smaller italic note below it: "Group session pricing coming soon."
- stay.html What to Expect section: added a small note under the amenities bullet list reading "Private sauna sessions from $75/hour. Book via the events page." with the phrase linked to events.html.
- stay.html Hipcamp button: href replaced with the real Hipcamp share URL (hipcamp.onelink.me/ZwFp ...) with target="_blank" and rel="noopener". The "Brittany is sending the Hipcamp listing link" placeholder comment is removed since the link is live.

Files modified:
- index.html
- events.html
- stay.html
- VERSION.md

---

## 2026-06-10 — Lauren Tancredi live

What changed:
- Lauren Tancredi's coach card on coaching.html: placeholder swapped for her real headshot (assets/photos/lauren-headshot.jpg). Role line set to "Ceremonialist · Breathwork · Transformational Coaching". Bio replaced with her full bio (Santa Monica Yoga 200-hour training, The Breath Center in LA, somatic coaching, Human Design, personal transformation). "Lauren's photo and bio are coming" comment removed; replaced with a "Replace with Lauren's Calendly link when ready." comment next to the booking button.

Files modified:
- coaching.html
- assets/photos/lauren-headshot.jpg (new)
- VERSION.md

---

## 2026-06-09 (final-3) — Brittany's content pass: coaching restructure, kambo rewrite, new Women's Retreat

What changed:
- index.html hero: "live differently" -> "live aligned". "contrast therapy" -> "channeled energy work".
- index.html healing section: "live differently" -> "reach their highest potential". Body paragraph rewritten to mention spiritual circle, yoga, sound healing, energy work, cold plunge/sauna, extended coaching container, kambo.
- index.html offerings: Spiritual Circles description drops "energy work". Sound Baths description switches "Susie" -> "Tiffany".
- index.html retreats teaser: removed "Spaces are small and the work is real." closing sentence.
- events.html Sauna and Cold Plunge card photo: swapped from sauna-deck-sunset.jpg (plastic hot tub visible) to sauna-inside-people.jpg (clean interior).
- coaching.html hero body: now lists 1:1 sessions + longer immersive containers (personalized week-long retreats, 28-day containers, 12-week immersive integration coaching).
- coaching.html founder section: full bio replaced. Lead paragraph covers breathwork/energy healing/chakra/Kambo, three certifications (Soma Breathwork, Somatic Channeling Energy, Kambo Practitioner), and Brittany's passion for helping clients step beyond fear, conditioning, and old stories.
- coaching.html founder second paragraph: updated to mention coaching, plant medicine prep/integration, Somatic Channeling, Breathwork, and Kambo.
- coaching.html Brittany coach card: bio replaced with the full updated bio. Role line updated to "Founder, Breathwork, Energy Healing, Kambo".
- coaching.html "Ways to Work Together" cards rebuilt: One-on-One Coaching card replaced with "A Personalized Retreat at Serenity Star" ($4,800, brittany-onproperty.jpg). Six-Month Immersive card replaced with "The Immersive Container" (3 months, two in-person retreats at start and close, 10 weeks of integration between). Two HTML comments inside: "Brittany is sending a full description for this by Wednesday" and "Brittany is sending a photo for this".
- coaching.html team grid: Chaney Rebecca card removed (she is Chicago-based and only visits for the retreat). Order is now Brittany, Aubrey, Vitaliy, Lauren, Tiffany, Joe.
- coaching.html Lauren card: added HTML comment "Lauren's photo and bio are coming. Update when Brittany resends."
- coaching.html meta description updated to remove "six-month".
- retreats.html Personalized Retreat card: title is now "A Personalized Retreat at Serenity Star". Photo swapped to brittany-founder.jpg. Body rewritten to mention working with the Serenity Star team. Apply button routes to Brittany's Calendly.
- retreats.html NEW card: "Women's Retreat at Serenity Star" added to the on-property grid. Quarterly cadence. studio-hug.jpg image. $4,000 per person. Apply button to Brittany's Calendly.
- retreats.html Portugal card: description rewritten to cover sound healing, vibration, breathwork, cacao, nature, drum circles, beach time, grounding, shamanic drum-making, and a full-moon overnight sound immersion. Button changed to "Join the waitlist" routing to Brittany's Calendly. HTML comment added for the Portugal photo update.
- retreats.html Chaney's Alignment Experience card: untouched as requested.
- kambo.html hero photo swap: hero now uses kambo-frog.jpg (the calmer wide close-up of the frog). brittany-kambo-frog.jpg moves to the Safety section split image. brittany-kambo-coaching.jpg moves up to the mid-page image band. This fixes the desktop crop that was clipping Brittany's face. The .hero-media--brittany-frog class is no longer applied here, so the kambo hero now uses the default object-position.
- kambo.html hero body: replaced with Brittany's personal Kambo story (started 2022, brain tumor diagnosis, lifelong connection to frogs, CKPI certification).
- kambo.html "What is kambo?" first paragraph: replaced with the longer Phyllomedusa Bicolor / Giant Monkey Tree Frog / 16-peptide explanation. Second paragraph kept verbatim.
- kambo.html Process step 3 (The Ceremony): replaced with the full ceremony description (Sage, Mapacho, intention, dots on upper arm or ankle, medicine stays on for 20 minutes).
- kambo.html Process step 4 (Rest & Integration): replaced with the resting-place / tea and snack copy.
- stay.html added HTML comment above the hero noting Brittany is sending camper photos. Hipcamp button comment updated to "Brittany is sending the Hipcamp listing link."

Files modified:
- index.html
- events.html
- coaching.html
- kambo.html
- retreats.html
- stay.html
- VERSION.md

---

## 2026-06-09 (final-2) — Tiffany live + coaching image band swap

What changed:
- Coaching page atmospheric image band: swapped from studio-hug.jpg to studio-light-feature.jpg (the meditation studio with the blue light water feature). The "We meet you where you are" quote stays.
- Tiffany Maria Macia coach card on coaching.html: placeholder photo replaced with her real headshot (assets/photos/tiffany-headshot.png). Role line updated to "Intuitive Healing · Massage Therapy · Sound". Bio replaced with her full bio describing therapeutic massage, reflexology, lymphatic drainage, guided meditation, and sound therapy. Calendly link unchanged.

Files modified:
- coaching.html
- assets/photos/tiffany-headshot.png (new)
- VERSION.md

---

## 2026-06-09 (final) — Wired in real photos for Vitaliy, South Africa, Portugal

What changed:
- Vitaliy's coach card on coaching.html now uses the new clean headshot. The `object-position: center top` inline style (which was cropping into the multi-shot grid) has been removed since the new photo is a single centered subject.
- South Africa retreat card on retreats.html now uses assets/photos/south-africa.jpg (real safari photo) instead of the clay-gradient placeholder.
- Portugal retreat card on retreats.html now uses assets/photos/portugal.jpg (Lisbon rooftops at golden hour) instead of the sage-gradient placeholder.
- The two new files were uploaded with spaces in their names (`south-africa safari.jpg`, `portugal-retreat scene.jpg`); they have been kept on disk under their original names and also copied to the clean kebab-case filenames the site references.

Files modified:
- coaching.html
- retreats.html
- assets/photos/south-africa.jpg (new)
- assets/photos/portugal.jpg (new)
- assets/photos/vitaliy-headshot.jpg (replaced)
- VERSION.md

---

## 2026-06-09 (later) — Site-wide contact details, Stripe-ready events, simplified CTAs

What changed:
- Email everywhere updated to serenitystarfl@gmail.com (was hello@serenitystar.co).
- Instagram updated to @SerenityStarFL (link points to instagram.com/SerenityStarFL).
- TikTok added site-wide as @SerenityStarFL — new footer link on every page, dedicated card on Contact.
- WhatsApp simplified to a single number: 978-501-0625 (Brittany). The second number (317-796-4474) and the old 978-501-0652 are removed from every page.
- Top-nav "Book a call" CTAs now route to coaching.html on every page (was direct Calendly). Brittany's direct Calendly link remains where it is the explicit Brittany-specific action: kambo hero CTA, her founder section, her coach card, and her 1:1 / Immersive offering cards.
- Homepage Hero secondary button: "Book a Call with One of Our Coaches" → coaching.html.
- Homepage Property tile heading: "A space where you can finally exhale." (replaces the literal feature list).
- Homepage "See the full calendar" link now anchors directly to the calendar section on events.html (#full-calendar).
- Homepage Stay tile body updated to the new copy: "Accommodations are available on the property for guests traveling in for events, retreats, and experiences at Serenity Star."
- Homepage Start Here CTA replaced with "Get in Touch" → contact.html (was direct Calendly).
- Events page weekly cards' booking buttons each carry a STRIPE: comment so they're easy to find and swap to Stripe Payment Links when ready. Calendly link remains as the placeholder action.
- Events page calendar section now has id="full-calendar" so the homepage link can deep-link to it.
- Coaching page hero now has a single CTA: "See our coaching options" → #coaches (the secondary Calendly button is removed).
- Coaching page bottom embedded Calendly section replaced with a simple "Get in Touch" CTA → contact.html.
- Coaching page #discovery placeholder buttons on Aubrey, Vitaliy, Chaney, and Lauren cards now point to contact.html (the #discovery anchor section is gone).
- Retreats page Alignment Experience: $4,800 price line removed, CTA changed to "Book now" linking to the Eventbrite event URL.
- Retreats page Destination image band: property photo replaced with a forest-gradient placeholder + HTML comment to drop in an airport/international photo.
- Retreats page South Africa card: banana-tree photo replaced with a clay-gradient "Safari photo coming soon" placeholder + HTML comment.
- Retreats page Portugal card: aerial-trees photo replaced with a sage-gradient "Portugal photo coming soon" placeholder + HTML comment.
- Retreats page bottom Calendly inquiry section replaced with "Get in Touch" → contact.html. South Africa and Portugal waitlist buttons also moved off Calendly to contact.html until real waitlist URLs arrive.
- Stay page Hipcamp section retitled "Stay With Us" with the new body copy. Button label is now "Book on Hipcamp". Bottom CTA still routes to "Get in Touch" → contact.html.
- Contact page: the "Or skip the form / Book a 30-minute call" Calendly block is removed entirely. Single email, single WhatsApp number (Brittany only), Instagram, TikTok, and address.
- VERSION.md and CONTENT_GUIDE.md remain (no edits to the guide needed; routing rules described there still apply).

Files modified:
- index.html
- events.html
- coaching.html
- kambo.html (only the global text swaps + nav CTA)
- retreats.html
- stay.html
- contact.html
- VERSION.md

---

## 2026-06-09 — Maintainability refactor, transparent logo, kambo hero crop

What changed:
- Added a top-of-file HTML comment block to every page explaining what it controls and how to safely edit it.
- Added inline `EDIT:` markers next to the most commonly-changed elements (page headline, hero intro, footer block) so non-technical editors can find them with browser Find.
- Wrote `CONTENT_GUIDE.md` covering: file-to-page mapping, how to edit text / prices / dates / photos / testimonials / contact info, how to swap the logo, how to update the Google Calendar without touching code, common rules to avoid breaking things, and deploy steps.
- Refactored the logo container (`.brand-mark`) for a transparent PNG: stripped the cream background fill, padding, border-radius, and the circular crop on the img itself. No backgrounds, borders, shadows, filters, or blend-modes that would obscure or recolor the new transparent PNG.
- Set responsive logo heights driven entirely by `height` on the img with `width: auto` so the logo is never stretched (desktop 44px, tablet 40px, mobile 36px). Footer logo is slightly larger for visual balance on dark background.
- Updated every HTML reference from `serenity-star-logo.jpeg` to `serenity-star-logo.png` (header brand-mark, footer brand-mark, favicon link). The PNG file at `assets/logo/serenity-star-logo.png` will be overwritten by the new transparent PNG when it's dropped in.
- Added a new CSS class `.hero-media--brittany-frog` for the kambo hero, with `object-position: center 30%` on desktop and `center 35%` on mobile. Replaces the previous inline `object-position: center 15%` (which was pushing the frame too far up and cropping Brittany's eyes).

Files modified:
- index.html
- events.html
- coaching.html
- kambo.html
- retreats.html
- stay.html
- contact.html
- css/styles.css
- CONTENT_GUIDE.md (new)
- VERSION.md (new)
- assets/logo/serenity-star-logo.png (new transparent PNG, 500x500 RGBA, ~556 KB — installed)
