# Mamas and Mentors International

The official organizational brand website for **Mamas and Mentors
International** — a faith-led nonprofit founded by Dr. Charity C.
Campbell-Kapela (Dr. CK).

This is the organizational home base. All registration is handled
externally via GoHighLevel.

## Stack

- React 18 + React Router 6
- Vite 5
- Tailwind CSS 3
- Custom @font-face for the *Wonderful Branding* display font
- Google Fonts: Playfair Display (serif) + Lato (body)

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Deployment

Netlify-ready out of the box:

- `netlify.toml` configures the build (`npm run build` → `dist`)
- `public/_redirects` enables React Router single-page routing

## Custom Font

Drop the `Wonderful Branding` font into `public/fonts/`:

```
public/fonts/WonderfulBrandingPersonalUse-Wyrgz.otf
```

Until the file is present, the site gracefully falls back to
*Playfair Display* (loaded from Google Fonts) so headlines still feel
elegant.

## External Links

All registration / external action links are placeholders defined in
`src/data/content.js`. Swap the strings in the `LINKS` object with the
final GoHighLevel URLs:

| Key             | Used for                                  |
|-----------------|-------------------------------------------|
| `REGISTER`      | Sticky nav CTA + every "Register Free" CTA |
| `VIP`           | Every "Go VIP – $147" CTA                  |
| `ASSESSMENT`    | Resource Hub + Home assessment teaser      |
| `VIP_SWAG_BAG`  | Live link (already wired to register URL)  |
| `PODCAST`       | Beyond Borders podcast link                |
| `INSTAGRAM`     | Social                                    |
| `FACEBOOK`      | Social                                    |
| `YOUTUBE`       | Social                                    |
| `LINKEDIN`      | Social                                    |
| `EMAIL`         | Contact mailto                             |
| `BOOKING`       | Speaking inquiry form                      |

## Site Map

| Route        | Page          |
|--------------|---------------|
| `/`          | Home          |
| `/about`     | About         |
| `/immvc`     | IMMVC         |
| `/community` | Community     |
| `/resources` | Resource Hub  |
| `/connect`   | Connect       |

## Brand

- Primary magenta `#db3d9e`
- Secondary teal `#079fa6`
- Coral red `#ff2768`
- Blush `#ffc4d4`
- Cyan `#05e0e9`
- Gold `#D4AF37`
- Ink `#0b0b10`

Modern Glam / Luxe — mature, polished, editorial. Faith-led women's
movement meets high-end conference brand.
