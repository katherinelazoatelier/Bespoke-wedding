# Applying the Canva designs to Squarespace

Canva website designs can't be imported straight into Squarespace. Use each Canva page as the blueprint and rebuild it with Squarespace sections. All the copy is in the Canva designs and in the HTML pages in this repo, so you can copy and paste it.

## 1. Set your site styles once (Site Styles → Fonts & Colors)

| Use | Value |
| --- | --- |
| Page background | `#F8F3EC` cream |
| Alternate section background | `#FFFDF9` white, `#ECD5C8` blush |
| Dark sections, header bar, footer | `#2C2623` ink |
| Text | `#2C2623` |
| Accent (links, labels) | `#8F4F43` deep rose |
| Extra accent | `#B9786A` rose, `#9AA891` sage |
| Headings font | Cormorant Garamond (regular, not bold) |
| Body / buttons font | Jost Light; buttons in uppercase with wide letter spacing |
| Primary button | ink `#2C2623` fill, cream text, square corners |
| Secondary button | outline, ink text |

## 2. Pages and navigation (Pages panel)

Main navigation, in this order:

1. Home (`/`)
2. Weddings (`/weddings`)
3. Live Art (`/live-art`)
4. Workshops (`/workshops`)
5. Commissions & Design (`/commissions`)
6. About (`/about`)
7. Book (`/book`). In **Header → Button**, turn the button on, label it **Book Now** and link it to `/book`. That puts a booking button in the header on every page, desktop and mobile.

Also turn on **Announcement Bar** (Site Styles / Marketing): "Now booking weddings & events for 2027 — check your date", linked to `/book`.

## 3. Building each page

For each Canva page, add sections from top to bottom to match it:

| Canva section | Squarespace section to add |
| --- | --- |
| Hero with headline + 2 buttons + photo | Section → **Images / Hero**, or a blank section with Image + Text + Button blocks |
| Service cards / package cards | Section → **Cards** (or **List**, card layout); each card gets a button to `/book` |
| Image + checklist split | Section → **Image + text** layout |
| Dark "How it works" steps | Blank section, background ink; **List** section with 4 items |
| Gallery | Section → **Gallery** (grid) |
| Testimonials | Section → **Testimonials** / Quote blocks |
| FAQ | **Accordion** block |
| Blush booking band | Blank section, blush background, centered text + button |

## 4. Booking form (Book page)

Add a **Form block** with these fields:

- Checkbox, required: *I'm interested in*. Options: Wedding Bespoke Package, Live Art Experience, Workshop / Craft Party, Commission, Surface Pattern Design
- Name (required), Email (required), Phone
- Date: *Event date*
- Text: *Venue / city*
- Dropdown: *Guest count* (Under 25, 25–75, 75–150, 150+, Not an event)
- Dropdown: *Approximate budget* (Under $1,000, $1,000–$2,500, $2,500–$5,000, $5,000+, Not sure yet)
- Textarea, required: *Tell me about your vision*
- Text: *How did you hear about me?*

Form settings: **Storage → Email** (your inbox). Post-submit message: "Thank you! Your inquiry is in. I'll reply within 48 hours with availability and next steps."

If you'd like visitors to choose a time slot themselves, add **Squarespace Scheduling** (Acuity) for a free 20-minute "Discovery call" and link a second button to it.

## 5. Images

In Canva, replace the placeholder photos with your own work, then download any decorative graphics (watercolor washes, patterns) as PNG via **Share → Download** and upload them to Squarespace as Image blocks or section backgrounds.
