# Changelog

All notable changes to this project will be documented in this file.

---

## [1.2.0] - 2026-07-31

### Changed
*   Realigned all remaining portfolio sections (**Experience**, **Education**, **Projects**, **Certifications**, **Organizations**, **Publications**, and **Get In Touch**) to follow a uniform, responsive 2-column split desktop grid matching the Hero and About modules.
*   Shifted alternating, center-aligned timelines (**Education** and **Organizations**) into single-column, left-aligned vertical timelines on the right column.
*   Stacked search inputs, sorting options, stats, and filter category tabs vertically inside the sticky left column for **Projects** and **Publications**.
*   Removed all colorful background gradients, liquid morphing patterns, and pulsing shadows from all cards, replacing them with sharp, minimalist glass tiles and thin monochromatic borders.

---

## [1.1.0] - 2026-07-31

### Addedx
*   `docs/architecture.md`: Detailed system, data flow, and file layout documentation.
*   `docs/content-strategy.md`: Technical copywriting standards and ATS keyword lists.
*   `docs/roadmap.md`: Strategic project roadmap detailing backlog requirements.
*   `docs/changelog.md`: This file, documenting all recent releases.
*   `CONTRIBUTING.md`: Development policies, coding specifications, and guidelines.
*   `src/components/Footer`: Added a clean layout component with quick connection social links and a pulsing career status indicator.
*   `src/components/Skills`: Implemented an image loading fallback mechanism that dynamically replaces missing tech icons with initial letter badges.

### Changed
*   `src/vars.css`: Realigned system tokens to match the **Atom Minimalist Design System** (monochromatic blacks/grays, accent blue, and sharp `2px`/`4px` border radii).
*   `src/index.css`: Injected a stationary 60px grid pattern into the body background for a blueprint/architectural layout.
*   `src/data/history.json`: Corrected experience records:
    *   **Arna Teknologi Peduli**: Updated role to *Software Developer* using **Blazor** and **.NET Core**.
    *   **Technova Integrasi Solusi**: Updated role to *Backend Developer* using **Golang** and the **Gin** framework.
    *   Rewrote responsibility bullets to match the Action-Technology-Impact model.
*   `src/data/projects.json`: Prioritized Telkom University final projects, added advisor mentions, and reframed minor projects into professional descriptions.
*   `src/data/publications.json`: Formed a key takeaway block for the research publications modal.
*   `src/components/Hero`: Adjusted stats indicators (GPA, Deployed Solutions, Combined Experience) and badges to show Cypress, Golang, and Blazor.
*   `src/components/About`: Refactored profile cards into Software & API Dev, Systems Analysis, and QA Testing modules.
*   `src/components/GetInTouch`: Copywritten CTA banners to focus on recruiter connection opportunities.
*   `index.html`: Optimized page keywords, titles, and schema JSON-LD scripts for crawl engines.

### Fixed
*   `src/components/ErrorBoundary`: Escaped single quotes to satisfy eslint rules.
*   `src/components/GetInTouch`: Fixed syntax unescaped character warnings.
*   `src/components/Skills`: Defaulted active category tab to "Development" to prevent empty rendering, resolved unescaped quotes, and cleaned unused map variables.
*   `src/components/Organizations`: Fixed unused `isVisible` state warnings by wiring it directly to scroll entry animations.
*   `src/utils.js`: Cleaned unexpected log warnings.
