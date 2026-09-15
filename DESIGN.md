---
name: SignPass Dual-Tone Administrative Hub
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444653'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#6a5f00'
  on-secondary: '#ffffff'
  secondary-container: '#fae100'
  on-secondary-container: '#6f6300'
  tertiary: '#532a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#743d00'
  on-tertiary-container: '#ffa85d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#fde400'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system bridges conversational simplicity with architectural precision. It serves two distinct user journeys within a single mobile-first web app: prospective store owners seeking sign design quotes through a frictionless entry flow, and signage contractors/licensing specialists managing rigorous municipal permits, elevation drawings, and structural safety audits.

The aesthetic philosophy balances **Human Warmth (Service Initiation)** with **Technical Authority (Permit Administration)**:
- **Consultation & Lead Intake**: Approachable, tactile, and highly legible. It adopts warm signal tones to reduce bureaucratic intimidation for local business owners.
- **Permitting & Blueprints Hub**: Dense, crisp, and systematic. Inspired by contemporary administrative and architectural tooling, it relies on structured data rows, precise badge matrices, and strict technical contrast.

The emotional tone must project speed, legal compliance, and craftsmanship—eliminating the dread of municipal rejection while maintaining instantaneous field accessibility on handheld devices.

## Colors

The color system operates on functional separation:

- **Smart Administrative Blue (`#1E40AF`)**: The primary anchor for institutional authority, navigation anchors, primary submission buttons in regulatory stages, and active status indicators. An interactive electric tint (`#2563EB`) handles focus states and active links.
- **Service Yellow (`#FEE500`)**: The secondary attention hue reserved for customer consultation banners, initial quote CTAs, and instant Kakao-integrated notification indicators. For text accessibility on yellow elements, high-contrast dark neutral (`#111827`) is mandatory.
- **Civic Amber (`#D97706` / `#F59E0B`)**: The tertiary functional color for pending approvals, regulatory warnings, safety reinspection notices, and architectural draft review alerts.
- **Deep Slate Neutral (`#0F172A`)**: Base neutral for typography, high-contrast borders, dark elevation frames, and structural division lines. Surface backgrounds default to `#F8FAFC`, stepping into pure `#FFFFFF` for data cards to keep legibility under high outdoor ambient light.

## Typography

The type system prioritizes structural hierarchy and fast visual parsing for field inspections and mobile inputs.

- **Primary & Interface**: `Plus Jakarta Sans` delivers wide geometric apertures, offering high legibility at dense scales while retaining human warmth during onboarding.
- **Technical & Metric**: `JetBrains Mono` is deployed strictly for blueprint dimensions (e.g., `W: 4200mm × H: 900mm`), permit serial numbers, municipal district codes, and timestamp logs.
- All Korean text renderings leverage system-native fallbacks (`Pretendard`, `-apple-system`) while inheriting the structural line-height and weight bindings established here.

## Layout & Spacing

The layout utilizes a fluid, screen-constrained mobile column architecture with a desktop clamp at `480px` for mobile web emulation, expanding to an adaptive 12-column grid when viewed on larger contractor tablets and workstations.

- **Mobile Viewport (≤640px)**: 4-column system, 16px screen margins, 12px gutter. Floating action controls and persistent bottom navigation bars are anchored with `env(safe-area-inset-bottom)` awareness.
- **Tablet / Field Display (641px - 1024px)**: 8-column layout, 24px outer margin. Split-screen orientation enabling the permit document checklist on the left and CAD/color schema preview on the right.
- **Desktop Dashboard (>1024px)**: 12-column administrative layout pinned to a max container width of `1280px` with persistent left sidebar navigation.

## Elevation & Depth

Visual hierarchy uses clean planar stacking rather than heavy atmospheric blurring, reflecting technical reliability:

- **Level 0 (Canvas)**: `#F8FAFC` base tone. Ground layer for page scroll views.
- **Level 1 (Card & Module)**: `#FFFFFF` with a crisp structural hairline border (`1px solid #E2E8F0`). Flat appearance with no ambient blur.
- **Level 2 (Dropdowns, Floating Modals & Bottom Sheets)**: Soft technical offset: `0 8px 24px -4px rgba(15, 23, 42, 0.08)`, paired with a `1px solid #CBD5E1` boundary.
- **Level 3 (Cad & Document Inspection Lightbox)**: Full dark overlay (`rgba(15, 23, 42, 0.85)`) with an inner glass rim (`inset 0 1px 0 rgba(255, 255, 255, 0.1)`), emphasizing technical drawings and color swatch precision without background interference.

## Shapes

The design system maintains a balanced `roundedness: 2` (base `8px`, containers `16px`, pills `9999px` strictly for status badges):

- Form inputs, interactive list cells, and technical specification cards use `rounded-md` (`8px`) to convey precision and structural stability.
- Customer intake cards, multi-step progress containers, and sheet surfaces use `rounded-lg` (`16px`) for tactile warmth.
- Administrative indicator tags, permit status pills, and thumbnail counters use full pill styling (`9999px`) to maintain contrast with rectangular data inputs.

## Components

### Buttons
- **Consultation Primary**: Background `#FEE500`, label `#111827`, font weight 700. Used exclusively for intake completions and KakaoTalk sync.
- **Administrative Primary**: Background `#1E40AF`, label `#FFFFFF`, hover `#1D4ED8`, active scale down (0.98). Used for permit submission, inspection approvals, and file uploads.
- **Secondary Technical**: Outlined `1.5px solid #CBD5E1`, background `#FFFFFF`, text `#0F172A`.

### Input Fields & Steppers
- Clear distinction between editable customer inputs and fixed administrative attributes.
- Inputs feature persistent floating micro-labels, inline unit indicators (e.g., `mm`, `kg`, `층`), and an explicit error state (`#DC2626`) paired with Korean statutory guidance cues.

### Permit Status Badges
- High-contrast tag matrix leveraging `JetBrains Mono` for metadata:
  - `접수대기 (Pending)`: Background `#FEF3C7`, Text `#B45309`.
  - `구청심의중 (In Review)`: Background `#DBEAFE`, Text `#1E40AF`.
  - `허가완료 (Approved)`: Background `#DCFCE7`, Text `#15803D`.
  - `보완요청 (Action Required)`: Background `#FEE2E2`, Text `#B91C1C`.

### Cards & Blueprint Previews
- Technical inspection cards feature split views: left 80px thumbnail of the elevation scheme/photo with an aspect-ratio lock, right partition showing store name, district code, and statutory compliance status.
- Document preview modals include pan/zoom overlays, grid measurement markers, and direct approval stamp signatures.

### Bottom Navigation & Tab Bars
- Fixed 56px bottom navigation bar with dual operational mode switcher: "고객 접수 (Customer Portal)" vs. "인허가 관리 (Admin Hub)".
- Active items highlighted with a smart blue pill backing; subtle yellow indicator dot for unread quote responses.