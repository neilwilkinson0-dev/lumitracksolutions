@AGENTS.md

# Lumitrack Solutions website

Marketing site for **Lumitrack Solutions Ltd**, an independent consultancy for
organisations delivering computer-based tests (CBT). The owner has nearly 25 years
in the industry. Audience: prospective clients. It replaces a placeholder
WordPress site at lumitracksolutions.co.uk.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`; no `tailwind.config`)
- Fonts via `next/font/google`: Inter (body, `font-sans`), Outfit (headings and wordmark, `font-display`)
- Hosted on Vercel. No CMS, no database: content lives in the code.

## Commands

- `npm run dev`: local dev server on http://localhost:3000
- `npm run lint`: ESLint (Next core-web-vitals + TypeScript rules)
- `npx tsc --noEmit`: typecheck
- `npm run build`: production build (run before pushing)

## Structure

```
brand/              Original logo files as supplied
src/
  app/
    layout.tsx      Root layout: fonts, default metadata, Header/Footer
    page.tsx        Home
    services/       Services page (renders lib/content.ts services, anchor per slug)
    about/          About page
    contact/        Contact page, ContactForm (client) and actions.ts (Server Action)
    globals.css     Tailwind import + brand theme tokens
    icon.svg        Favicon
  components/       Shared UI (Container, Header, MobileNav, Footer, Logo, LogoMark,
                    PageHeader, CtaBand, CheckIcon)
  lib/site.ts       Site-wide constants: name, owner, email, URL, nav links
  lib/content.ts    Shared content: services, sectors, audiences, credential, career
```

## Decisions

- **Pages:** Home, Services, About, Contact. Every page is static except the
  contact form submission.
- **Voice:** first person ("I help..."), since this is a sole-practitioner consultancy.
  UK English spelling throughout.
- **Look:** light, bright and warm; personal and approachable first, modern second.
  Warm off-white (`paper`, `cream`), dark `ink` text and the logo's amber (`amber`,
  `amber-soft`, `amber-mark`). Use `amber-deep` for small amber text (contrast).
  Colour tokens are defined in `@theme` in `globals.css`; use them, not raw hex values.
  No photo of the owner on the site.
- **Audience:** awarding bodies, certification providers and test platform vendors,
  internationally. Engagements are short advisory pieces or defined projects.
- **Logo:** the supplied originals (black PNGs) are in `brand/`. `components/LogoMark.tsx` is the
  sun-and-clipboard icon redrawn as SVG so it can be recoloured (rays default to amber);
  `components/Logo.tsx` pairs it with the wordmark set in Outfit. `app/icon.svg` is the favicon.
- **Content:** shared copy lives in `lib/content.ts`; page-specific copy inline in each page. There is
  no CMS. Don't invent client names, testimonials, statistics or credentials;
  only use facts the owner has supplied.
- **Client JS:** keep it minimal. Only `MobileNav` is a client component so far.
- **Contact form:** `contact/actions.ts` validates input, drops honeypot (`website` field)
  submissions, and sends a plain-text email via the Resend HTTP API (no SDK) with
  Reply-To set to the sender. Env vars (see `.env.example`): `RESEND_API_KEY` (required),
  `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Without a key the form shows a "please email
  me directly" fallback. Secrets live in Vercel env vars, never in the repo.
- **Owner facts supplied so far:** first name Neil; founded 2025; nearly 25 years in CBT,
  mostly at vendors; Chair of E-ATP in 2023; sectors IT certification, university
  entrance, legal, medical, financial. Proud projects and client problems not yet supplied.
- **Metadata:** set `metadataBase` and a title template in the root layout; each page
  exports its own `metadata` with a title and description.
- **Workflow:** work on the feature branch; Vercel builds a preview for it. Changes go to
  `main` (the live site) only once the owner has approved them.
