# VELoop Rewards — Exchange Center (Redesign)

A complete frontend redesign of the VELoop Rewards Exchange Center: the
screen where users convert their earned **Gems** into **VEs**.

This is a **reward conversion center**, not a crypto swap or trading
screen — no price charts, no order books, no buy/sell language. The
existing conversion logic from the reference implementation is kept;
everything about the visual design, layout, and interaction model is new.

## Project overview

The original Exchange Center used repetitive rectangular cards and
crypto-swap-style presentation. This redesign reframes the same
functionality as a "reward voucher" experience: each conversion is shown
as a ticket-style card (perforated edge, required Gems on one side, VEs
received on the other) that a user redeems, rather than trades.

## Exchange Center concept

- **Vault-style balance overview** — Gems and VEs shown side by side as
  the two currencies in your account, each with an info icon explaining
  what it is.
- **Conversion tickets** — every available conversion is a self-contained
  card: what it's called, what it costs, what you receive, and a single
  "Convert" action.
- **Confirm-before-you-commit modal** — clicking Convert never exchanges
  Gems immediately. It opens a confirmation dialog showing the exchange
  and your balances *after* the conversion, with Cancel / Confirm.
- **Clear states** — insufficient Gems, processing, success, empty, and
  error states are all designed explicitly rather than left to default
  browser behavior.

## Features

- Hero header explaining the page in plain language
- Balance overview for Gems and VEs, each with an `ⓘ` explainer tooltip
- "How the exchange works" 5-step overview
- Available conversions grid (ticket-card design)
- Insufficient-Gems state with an "Earn more Gems" call to action
- Confirmation modal with before/after balances
- Processing state that disables the confirm button (prevents double
  conversion) and a success state with a short confirmation animation
- Recent conversions history with status badges (Completed / Processing
  / Failed)
- Exchange rules section
- Loading, empty, and error states for the conversions list
- Fully responsive from 320px mobile up through large desktop displays
- Keyboard-accessible modal (focus on open, `Escape` to close), visible
  focus states, and labeled icon-only buttons

## Exchange logic (kept from the reference implementation)

Conversion type: `gem-to-ve` — a fixed amount of Gems converts to a fixed
amount of VEs, defined per-option in `src/data/exchangeData.js`.

> **Note:** `requiredGems` for the two "Watch Ad" conversions (28 and 39
> Gems) comes directly from the reference screenshot. The reference did
> not expose the matching `receiveVEs` values, so those — and the
> additional conversion types (daily bonus, survey, social share, app
> task) — are placeholder/dummy data at an illustrative ~5.1x rate.
> Replace the values in `src/data/exchangeData.js` with the live numbers
> from the current implementation before shipping to production.

## User flow

1. User opens Exchange Center and sees their current Gems and VEs.
2. User browses available conversions.
3. If they have enough Gems, they tap **Convert**; if not, the card shows
   how many more Gems they need and offers **Earn more Gems** instead.
4. Tapping Convert opens a confirmation modal showing the exchange and
   the resulting balances.
5. User confirms → button shows "Converting…" and is disabled to prevent
   double submission → success state shows the amount received.
6. Balance updates and the conversion appears at the top of Recent
   Conversions.

## Components

```
src/components/exchange/
├── ExchangeHero.jsx        Page header / intro
├── BalanceOverview.jsx     Gems + VEs balance cards
├── ExchangeCard.jsx        Single conversion "ticket"
├── ExchangeModal.jsx       Confirmation / processing / success modal
├── ConversionSuccess.jsx   Success state shown inside the modal
├── ExchangeHistory.jsx     Recent conversions list
├── ExchangeRules.jsx       Exchange rules section
├── HowExchangeWorks.jsx    5-step explainer
├── ExchangeLoader.jsx      Themed loading state
├── EmptyState.jsx          No conversions available
├── ErrorState.jsx          Failed to load, with Retry
└── InfoTooltip.jsx         Reusable ⓘ explainer used across the page
```

`src/pages/ExchangeCenter/ExchangeCenter.jsx` composes all of the above
and owns the page's state (balances, options, modal phase, history).

## Technology stack

- React 18 + Vite
- Bootstrap (grid/reset utilities only — visual design is custom)
- CSS Modules for all component styling
- React Hooks (`useState`, `useEffect`) for state and side effects
- [lucide-react](https://lucide.dev) for icons

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Runs the app locally with hot reload (default: http://localhost:5173).

## Build instructions

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Responsive design

- **Mobile (320px+):** conversion cards stack in a single column, balance
  cards stack vertically.
- **Tablet:** conversion cards flow two-up.
- **Laptop / desktop:** conversion cards flow three-up inside a
  max-width, centered container so content never stretches edge-to-edge
  on large monitors.
- **Large screens (1440px–1920px+):** the container caps at 1040px with
  generous side margins; layout stays balanced rather than stretching.

## Animation system

Motion is intentionally restrained:

- Card hover — subtle lift + border brighten
- Modal — fade-in overlay, slide-up dialog
- Success state — a single pop + expanding ring on the confirmation icon
- Loader — a slow-spinning themed icon, not a generic spinner
- `prefers-reduced-motion` is respected globally (animations are disabled
  for users who request reduced motion)

## Future backend integration

The frontend is structured so a backend can be dropped in without
touching component code:

- All conversion data lives in `src/data/exchangeData.js` — swap the
  static array for a fetch call and feed the result into the same
  `options` state in `ExchangeCenter.jsx`.
- Balance state (`balance.gems`, `balance.ves`) is already isolated in
  `ExchangeCenter.jsx` — point it at a `/user/balance` endpoint.
- The confirm handler (`handleConfirm`) currently simulates a network
  call with `setTimeout`; replace the body with a real API call and keep
  the same `processing` → `success`/`error` phase transitions.
- History items follow a simple shape (`date`, `requiredGems`,
  `receiveVEs`, `status`) that maps directly onto a typical transactions
  API response.

## Deployment

Build the project (`npm run build`) and deploy the `dist/` folder with
Vercel or Netlify. Provide the resulting live URL alongside the GitHub
repository as part of the final deliverable.

## Screenshots

Add screenshots (desktop, tablet, mobile, exchange cards, confirmation
modal, insufficient-Gems state, success state, loading/empty/error
states) to a `/screenshots` folder and reference them here before
submission.
