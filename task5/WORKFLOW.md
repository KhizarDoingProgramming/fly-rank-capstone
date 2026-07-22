# Workflow Analysis: Vague vs. Precise Prompting (Task 5)

This document provides a comparative analysis of the settings form implementations on the `task5-round-1` (vague prompt) and `task5-round-2` (precise prompt) branches.

---

## 1. Comparative Breakdown

### Correctness
*   **Round One (Vague):** The form only checked if `name` and `title` were non-empty. It did not validate the format of the social or scheduler URLs, allowing invalid URLs (or arbitrary text) to be submitted.
*   **Round Two (Precise):** Custom regex validators were added to ensure that URLs are formatted correctly (e.g., verifying that the Calendly input starts with `https://calendly.com/` and the GitHub/LinkedIn URLs point to valid user profiles).

### Accessibility
*   **Round One (Vague):** The form lacked proper `htmlFor` associations on labels. There was no focus management or tab semantics, and errors were shown using disruptive native browser `alert()` dialogues.
*   **Round Two (Precise):** Screen-reader accessible markup was implemented using semantic links (`htmlFor`/`id`), explicit ARIA attributes (`aria-selected`, `aria-invalid`, `aria-describedby`), and a custom toast notification with `role="alert"` and `aria-live="assertive"`. Tab navigation is fully keyboard-navigable.

### Edge Cases
*   **Round One (Vague):** Handled no edge cases. Submitted empty spaces as valid names, allowed bios of infinite lengths, and did not guide the user when validation errors occurred in inactive tabs.
*   **Round Two (Precise):** 
    *   Trims input fields to prevent whitespace-only submissions.
    *   Implements a character counter (max 300) on the bio.
    *   Automatically switches active tabs on submit to highlight the tab containing validation errors, preventing hidden validation blocks.

### Review and Correction Effort
*   **Round One (Vague):** The initial generation took about 1 minute. However, the result was incomplete, lacked any visual design alignment, had no testing, and possessed no accessibility. Bringing it to a production-ready standard would require ~30–40 minutes of manual code rewriting.
*   **Round Two (Precise):** Setting up the precise constraints and tests took longer upfront (~5–10 minutes of planning), but the code compiled, successfully executed tests, and styled itself in a premium glassmorphic dark theme on the very first build, requiring zero correction cycles.

---

## 2. AI Mistakes Caught

During the test suite setup for Round Two, a critical mistake was made in `App.test.jsx`. The test runner used fake timers (`vi.useFakeTimers()`) to simulate mock network latency but also utilized `@testing-library/react`'s `waitFor` to assert on state changes:

```javascript
vi.advanceTimersByTime(1300);
await waitFor(() => {
  expect(screen.getByText('Portfolio saved...')).toBeDefined();
});
```

Because fake timers were active, the internal clock inside `waitFor` (which relies on real-world `setInterval`) was blocked, causing the test to time out in 5000ms. 

**Correction:** The timer advancement was wrapped in React's `act()` function, and the assertion was executed synchronously immediately after:

```javascript
act(() => {
  vi.advanceTimersByTime(1300);
});
expect(screen.getByText('Portfolio settings updated successfully!')).toBeDefined();
```

Additionally, the matcher `.toHaveValue()` was initially proposed without importing `@testing-library/jest-dom`, which was corrected to access `.value` on DOM elements directly for environment compatibility.
