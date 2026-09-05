---
name: julianduque.co
description: A quiet working index for Julián Duque's talks, communities, open source, and writing, in midnight ink and dawn paper.
colors:
    ink-ground: "#20232f"
    deep-ink: "#191c26"
    ink-surface: "#282c39"
    warm-paper: "#f1eee8"
    muted-ink: "#b5b6be"
    dim-ink: "#868a97"
    hairline: "rgba(241, 238, 232, 0.18)"
    hairline-strong: "rgba(241, 238, 232, 0.42)"
    focus-violet: "#b58aef"
    focus-violet-soft: "rgba(181, 138, 239, 0.15)"
    dawn-ground: "#f2efe8"
    dawn-deep: "#e5ded2"
    dawn-surface: "#ebe5da"
    dawn-text: "#292633"
    dawn-muted: "#625e68"
    dawn-focus-violet: "#6e3fa0"
typography:
    display:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "clamp(28px, 4vw, 54px)"
        fontWeight: 500
        lineHeight: 1.16
        letterSpacing: "-0.025em"
    headline:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "clamp(22px, 3vw, 34px)"
        fontWeight: 500
        lineHeight: 1.16
        letterSpacing: "-0.025em"
    title:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "clamp(20px, 2vw, 28px)"
        fontWeight: 500
        lineHeight: 1.16
        letterSpacing: "-0.025em"
    body:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "15px"
        fontWeight: 400
        lineHeight: 1.55
        letterSpacing: "normal"
    prose:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "15px"
        fontWeight: 400
        lineHeight: 1.7
        letterSpacing: "normal"
    action:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "13px"
        fontWeight: 500
        lineHeight: 1.55
        letterSpacing: "normal"
    section:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "16px"
        fontWeight: 500
        lineHeight: 1.16
        letterSpacing: "0.08em"
    label:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "12px"
        fontWeight: 400
        lineHeight: 1.55
        letterSpacing: "0.08em"
    small:
        fontFamily: "IBM Plex Mono, Liberation Mono, monospace"
        fontSize: "11px"
        fontWeight: 400
        lineHeight: 1.55
        letterSpacing: "0.04em"
rounded:
    thumbnail: "3px"
    soft: "6px"
spacing:
    xs: "8px"
    sm: "12px"
    md: "16px"
    lg: "24px"
    section: "42px"
    gutter: "clamp(20px, 4vw, 52px)"
components:
    button-primary:
        backgroundColor: "transparent"
        textColor: "{colors.focus-violet}"
        typography: "{typography.action}"
        rounded: "{rounded.soft}"
        padding: "10px 16px"
        height: "42px"
    button-quiet:
        backgroundColor: "transparent"
        textColor: "{colors.warm-paper}"
        typography: "{typography.action}"
        rounded: "{rounded.soft}"
        padding: "10px 16px"
        height: "42px"
    button-small:
        backgroundColor: "transparent"
        textColor: "{colors.warm-paper}"
        typography: "{typography.action}"
        rounded: "{rounded.soft}"
        padding: "6px 10px"
        height: "34px"
    focus-chip:
        backgroundColor: "transparent"
        textColor: "{colors.muted-ink}"
        typography: "{typography.small}"
        rounded: "{rounded.soft}"
        padding: "5px 10px"
---

# Design System: julianduque.co

## Overview

**Creative North Star: "The Working Index, Dawn to Midnight"**

julianduque.co is a reference card, not a pitch. It shares its visual world with Tarot Arcana: a single warm monospaced voice, midnight ink for low light and dawn paper for bright rooms, hairline rules instead of containers, and one muted violet that appears only where the visitor can act. Where Tarot Arcana lets card art carry color, this site lets the portrait, the stage photographs, and YouTube thumbnails carry it. Everything else stays low-chroma and planar.

The page is a set of ruled lists. Sections open and close in place, rows keep the same reading order at every width, and the interface never elevates itself above the things it links to.

**Key Characteristics:**

- Same semantic palette roles in both themes; light mode is composed warm paper, never inverted white.
- IBM Plex Mono for every role, self-hosted in 400, 400 italic, and 500.
- Hairline divisions, open ground, and tabular metadata in place of cards, badges, or colored tags.
- Violet reserved for the current navigation item, counts, focus rings, hover, and primary actions.
- One authored motion: the portrait turns face-up when the home page opens.
- Six-pixel ceiling on radii; thumbnails tighten to three.

## Colors

### Primary

- **Focus Violet / Dawn Focus Violet:** The sole interactive accent. Current navigation underline, section counts, hover color on titles, primary button border and text, keyboard focus outline and halo.
- **Soft Focus Violet:** Translucent wash for button hover only.

### Neutral

- **Ink Ground / Dawn Ground:** The continuous page ground and the navigation, footer, and every section.
- **Deep Ink / Dawn Deep:** Scrollbar track, code block ground, and the fill behind YouTube embeds while they load.
- **Ink Surface / Dawn Surface:** Inline code background only.
- **Warm Paper / Dawn Text:** Primary copy, titles, and the brand mark.
- **Muted Ink / Dawn Muted:** Role line, ledes, metadata, inactive navigation, footer links, and chip text.
- **Dim Ink:** Separator dots, reading-time notes, disabled cells, and the copyright line.
- **Hairline / Strong Hairline:** Row and section rules; strong for image edges, quiet buttons, and the portrait frame.

### Named Rules

**The Violet Signal Rule.** Violet means "you can act here" or "you are here." It never fills a surface or decorates a heading.

**The Photographs Carry Color Rule.** The portrait, stage photos, and video thumbnails are the only saturated material. Data lists carry no color-coded badges; `badgeColor` and `color` fields in the JSON data are ignored by the templates.

**The Dawn / Midnight Rule.** Theme changes remap roles only. `data-theme` on the root wins; without it, `prefers-color-scheme` decides. Both palettes must pass 4.5:1 for body and muted text.

## Typography

**Display, Body, and Label Font:** IBM Plex Mono, self-hosted from `@fontsource/ibm-plex-mono` through Eleventy passthrough copy into `assets/fonts/`.

**Character:** One monospaced voice makes the site read as a maintained notebook rather than a marketing page. Hierarchy comes from scale, weight 500 versus 400, uppercase tracking, and rules.

### Hierarchy

- **Display** (500, fluid 28–54px, 1.16): The name on the home page and every page or post title.
- **Headline** (500, fluid 22–34px): Archive year headings and prose `h2`.
- **Title** (500, fluid 20–28px): Employer groups on Work and prose `h3`.
- **Body** (400, 15px, 1.55): Row titles, ledes, and the hero role line.
- **Prose** (400, 15px, 1.7): Markdown pages and posts, capped at 68ch.
- **Action** (500, 13px): Buttons, pagination, post navigation titles, section counts.
- **Section** (500, 16px, 0.08em, uppercase): Collapsible section titles.
- **Label** (400, 12px, 0.08em, uppercase): Navigation, row metadata, post meta, footer links, share label.
- **Small** (400, 11px, 0.04em): Focus chips, reading time, copyright.

### Named Rules

**The One Voice Rule.** No second typeface, ever. The brand mark is the same face in uppercase with wide tracking.

**The Useful Line Rule.** Prose, ledes, and the hero paragraph stop at 68ch.

## Layout

The navigation and footer span the viewport inside fluid gutters of 20–52px. Content sits in a centered column capped at 1040px. Home opens with a two-column hero (copy left, 224px portrait right) and continues into a single ruled index. Work and posts use the same column; the post body and its share and navigation rows are capped at the prose measure so the page keeps one left edge.

Spacing follows 8/12/16/24px with 42px as the section interval. Rows carry 14–16px of vertical padding between hairlines.

**Breakpoints:** at 1080px the portrait narrows; at 760px the navigation compresses to 60px, the hero stacks with the portrait first at 132px, and post navigation becomes one column; at 600px the navigation wraps to two rows (brand and theme control, then destinations on a hairline) and index rows drop to a single column with the date under the title; at 420px labels tighten.

**The Rule Becomes Stack Rule.** A vertical divider (post navigation, entry columns) rotates into a horizontal hairline below 760px and preserves order.

**The Open Desk Rule.** Sections, rows, and navigation share one ground. There are no cards.

## Elevation & Depth

Flat by default. The home portrait is the one physical object and receives the Card Ambient shadow (`0 16px 42px rgba(4, 5, 10, 0.32)` in ink, `rgba(50, 40, 30, 0.2)` on paper). Keyboard focus adds a 1px violet outline offset 3px and a 3px soft violet halo. Nothing else lifts.

## Shapes

Buttons, images, chips, code blocks, and embeds use 6px corners. YouTube thumbnails use 3px. Rules are 1px. Chevrons and the link glyph are authored SVG with square caps and a 1.4 stroke.

**The Six-Pixel Ceiling Rule.** No pills, no oversized radii.

## Components

### Navigation

70px bar on one hairline. Brand at 16px uppercase 500; destinations at 12px uppercase muted. Hover and current brighten to primary text; the current destination gets a 2px violet underline on the hairline. The theme control is a 36px square with a hairline border showing a sun in ink and a moon on paper; it stores the choice in `localStorage.theme`.

### Hero

Display name, muted role line, one paragraph of prose, focus chips (hairline, 6px, 11px uppercase), and the portrait with a strong hairline and ambient shadow. The portrait animates once from 82° with a brief blur over 620ms on an exponential ease-out; reduced-motion collapses it.

### Index Section

A `<details>` element between hairlines. The summary row is 66px: uppercase section title, violet tabular count, and a square-capped chevron that rotates when open. When open, a hairline separates the summary from a muted 13px lede and the entry list. Talks and the first Work group open by default.

### Entry Row

Grid of optional 96px thumbnail (16:9, 3px, strong hairline), title with optional description, uppercase metadata line with dot separators, and a right-aligned tabular date or year. Hover turns the title violet and underlines it; the thumbnail border turns violet.

### Buttons

Primary: transparent, violet border and text, 42px. Quiet: strong hairline border, primary text. Small: 34px for share and pagination. Hover adds the soft violet wash; the current pagination page uses the violet border.

### Post

Display title, uppercase meta row (date, reading time, category) over a hairline, prose body, share row (copy link, LinkedIn, Bluesky, X as small quiet buttons; copy confirms inline as "Copied"), and a two-cell previous/next navigation between hairlines with a vertical rule that becomes horizontal on narrow screens.

### Lists

Content: rows of fixed-width date, weighted title with category label, and dim reading time. Archive: headline year with a violet count, then day-month plus title rows.

### Prose

Markdown pages use the prose measure, 1.7 line-height, violet-underlined links, 1px-ruled blockquotes, hairline tables, and responsive 16:9 embeds framed by a strong hairline.

## Do's and Don'ts

### Do:

- **Do** keep every list scannable without opening anything: title, source, date.
- **Do** let the portrait and thumbnails be the only saturated material.
- **Do** reserve violet for current state, counts, hover, focus, and primary actions.
- **Do** preserve reduced-motion and visible keyboard focus.
- **Do** add new content as JSON rows or Markdown files; never as one-off markup.

### Don't:

- **Don't** reintroduce colored badges, icon rows, gradients, glass, or elevated cards.
- **Don't** add a second typeface or a system sans for "readability."
- **Don't** use icon-only navigation or decorative icons; text labels carry the meaning.
- **Don't** invert photographs or tint them per theme.
- **Don't** let light mode drift to pure white and black.
