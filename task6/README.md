# Interactive Capstone Portfolio Application (Task 6)

This React single-page application (SPA) represents the high-fidelity portfolio website built for **Ghulam Mustafa Khizar (Frontend AI Engineering Intern)** for the Week 3 FlyRank assignment.

---

## 1. Application Overview
The application showcases Ghulam's sitemap-driven proof statement in an interactive interface, integrating three key modules:
1.  **Interactive Strategy Headline**: Hovering over segment highlights (Target, Claim, Action) reveals the underlying conversion mechanics. Contains a modal toggler displaying the portfolio's SVG sitemap.
2.  **Lighthouse-Audited Case Studies**: 3 project cards displaying real-world performance metrics (Performance, Load Time, Bundle Size) and detailed architectural challenge modals.
3.  **Booking and Contact Hub**: Features an interactive mock Calendly scheduler widget (permitting date, slot selection, and validated reservation confirmation) and a fully validated inquiry form with custom validation toasts.

---

## 2. Prompts Used During Development
*   **Prompt 1 (Scaffolding)**: 
    *   *“Create a React portfolio SPA in App.jsx. Render a modern Header, an interactive Hero statement that updates a strategic detail box on hover, an active AI Toolkit grid, a Case Studies grid showing 3 projects with modals for deep dives, and an interactive mock scheduler where visitors can book a 15-minute slot.”*
*   **Prompt 2 (Styling)**: 
    *   *“Generate a premium custom stylesheet in App.css using Outfit & Inter typography, deep space dark navy backgrounds, glassmorphism cards with subtle purple accents, interactive slide-in toasts, and smooth micro-animations for saving indicators.”*
*   **Prompt 3 (Testing)**: 
    *   *“Write a comprehensive test suite in App.test.jsx checking sitemap modal toggling, deep-dive modal rendering, date slot progression in the scheduler form, and validation rules for contact inputs.”*

---

## 3. How AI Assisted Throughout the Build
*   **Boilerplate & Layout Skeleton**: The AI drafted the core HTML layout structure and structural layout blocks (using Lucide-React icons) in a few seconds.
*   **Visual Assets & CSS Systems**: Generated responsive flexbox and CSS Grid styling cards, setting up custom HSL variables that support responsive overlays on mobile devices.
*   **Test Suite Foundation**: Provided the setup hooks for testing interactive state changes, mock clicks, and timing transitions.

---

## 4. Manual Refactoring and Corrections Made
After reviewing the generated code, several adjustments were made manually:

### A. React Inline SVG CamelCase Warnings
The initial AI-generated SVG sitemap contained standard HTML/SVG dash-separated attributes (`stop-color`, `font-family`, `font-size`, `stroke-dasharray`, `marker-end`, `letter-spacing`). React throws DOM console errors for these.
*   *Correction*: Manually converted these properties to camelCase (e.g. `stopColor`, `fontFamily`, `fontSize`, `strokeDasharray`, `markerEnd`, `letterSpacing`) to guarantee warning-free rendering.

### B. Vitest Fake Timer Testing Latency
The test script ran `vi.useFakeTimers()` to simulate network saving latency, but matched it with an asynchronous `waitFor()` block which timed out.
*   *Correction*: Advanced the clocks synchronously within React's `act()` wrapper:
    ```javascript
    act(() => {
      vi.advanceTimersByTime(1300);
    });
    expect(screen.getByText('Reservation Confirmed!')).toBeDefined();
    ```

### C. Query Selector Collisions
The query `screen.getByText(/I build/)` failed because the phrase "I build" appeared twice (once in the hero title, once in the proof statement text).
*   *Correction*: Changed it to `screen.getAllByText(/I build/)[0]` to target the specific DOM node correctly.
