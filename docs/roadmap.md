# Project Roadmap

This document outlines the milestones, completed phases, and future development goals for the portfolio project.

---

## Phase 1: Re-positioning & Copywriting (Completed)
*   **Objective**: Re-align portfolio contents to focus on Information Systems versatility.
*   **Key Deliverables**:
    *   Rewrite `history.json` following the Action-Technology-Impact framework.
    *   Transition "What I Do" sections from role-based cards to capability-based modules.
    *   Update education description to reflect honors graduation (Cum Laude).
    *   Refocus contact forms and headlines to target HR professionals and hiring managers.

## Phase 2: Design System Realignment (Completed)
*   **Objective**: Transition from default gradients to the monochromatic "Atom Minimalist System" theme.
*   **Key Deliverables**:
    *   Update `src/vars.css` to define strict black, surface grays, and accent blue color variables.
    *   Set border radii to sharp angles (`2px`, `4px`, `0px`).
    *   Integrate a stationary 60px grid pattern overlay inside `src/index.css` for a blueprint/architectural parallax feel.
    *   Build a responsive, styled `<Footer />` component with social links and status badges.
    *   Write image fallback lifecycle routines inside `<Skills />` to render text templates if files fail to fetch.

## Phase 3: Developer Experience & Quality Assurance (Completed)
*   **Objective**: Ensure the repository is stable, accessible, and structured for developers.
*   **Key Deliverables**:
    *   Create `CONTRIBUTING.md` documenting coding and design guidelines.
    *   Resolve all ESLint warnings and errors.
    *   Establish production compile tests via Vite bundler.

## Phase 4: Future Enhancements (Backlog)

### 1. Interactive Technical Features
*   **PDF Resume Exporter**: Integrate a button allowing recruiters to print a clean PDF summary directly from the site.
*   **Interactive System Diagram**: Add a visual flow chart showing the 4-layer architecture of the IoT Air Quality Monitoring System research project on hover.
*   **Dynamic Theme Toggle**: Support a contrast shift between the deep black blueprint layout and a stark white layout for varied reading environments.

### 2. CI/CD & Deployments
*   **Automated Testing Pipeline**: Integrate GitHub Actions to run ESLint syntax checks and compile production builds on every pull request.
*   **Vitals Tracking**: Set up Lighthouse metrics audits in dev builds to ensure SEO, accessibility, and loading speeds stay near 100%.
