# Blog Editorial Guide

## Where To Edit

Run the app:

```bash
npm run dev
```

Then open:

```text
/admin/index.html
```

Tina saves blog posts into `content/posts/*.mdx`.

## Publishing Flow

1. Open Tina admin.
2. Create a new post or open an existing one.
3. Fill in:
   `title`, `subtitle`, `excerpt`, `author`, `authorImage`, `date`, `coverImage`, `tags`.
4. Build the article using `Content` blocks.
5. Save the post.
6. Review it at `/insights`.
7. Open the full article at `/insights/[slug]`.

## Content Blocks

Use blocks in this order-driven way:

- `emphasis`
  Use for the opening thought, a sharp transitional line, or a strong editorial sentence.

- `paragraph`
  Use for normal body copy.

- `heading`
  Use for section breaks. Keep headings short and declarative.

- `quote`
  Use for one standout line only when it deserves visual separation.

## Writing Rules

- Start with `emphasis` or a strong `paragraph`.
- Do not stack multiple `quote` blocks together.
- Keep paragraphs short and readable.
- Use headings every 2 to 5 paragraphs when the idea shifts.
- Avoid empty blocks. The app skips them, but clean entries are still the standard.
- Do not paste markdown syntax like `##`, `>`, or `-`.

## Good Structure Example

1. `emphasis`
2. `paragraph`
3. `paragraph`
4. `heading`
5. `paragraph`
6. `quote`
7. `heading`
8. `paragraph`

## Notes

- If `content` is missing or messy, the app falls back safely.
- Unsupported future block types are ignored instead of crashing.
- Heading `meta.level` exists for future use, but you do not need it for normal publishing right now.
