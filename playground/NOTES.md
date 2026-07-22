# Task 8 Comparison: Custom vs. Shadcn (Radix UI) Components

This document records the comparison and review of hand-crafted accessible components (Modal, Tabs, Disclosure) against the industry-standard `shadcn/ui` components (which wrap `@radix-ui` primitives).

---

## 1. Custom Implementation Summary

### A. Modal Dialog (`src/components/Modal.tsx`)
*   **Focus Trap**: Managed via a `keydown` listener inside a `useEffect`. It captures `Tab` and `Shift + Tab`, querying all focusable nodes and manually focusing the first or last element to trap the focus block.
*   **Focus Restore**: Captures `document.activeElement` on open and calls `.focus()` on the trigger node on unmount.
*   **Escape to Close**: Listens to the `Escape` key to execute the close callback.

### B. Tabs list (`src/components/Tabs.tsx`)
*   **Keyboard Navigation**: An `onKeyDown` handler listens for `ArrowRight`/`ArrowLeft` to activate the next/prev tab header, as well as `Home`/`End` to jump to boundaries.
*   **A11y index**: Implements `tabIndex={0}` on the active tab header and `tabIndex={-1}` on inactive tab headers.
*   **ARIA bindings**: Integrates matching `aria-controls` and `aria-selected` flags on triggers, linked to panels with `aria-labelledby`.

### C. Disclosure Accordion (`src/components/Disclosure.tsx`)
*   **Keyboard**: Utilizes native `<button>` element triggers which handle `Space` and `Enter` activations by default.
*   **ARIA**: Manages `aria-expanded` states linked to panels using dynamic React `useId()` mappings for `aria-controls`.

---

## 2. Gaps Handled by Shadcn (Radix UI) That We Missed

Upon reviewing the source code of shadcn's `dialog.tsx` and `tabs.tsx`, the following concrete gaps and edge cases were identified:

### 1. React Portal Rendering (DOM Escaping)
*   **Our Version**: Renders inline inside the parent DOM tree. If a parent container has `overflow: hidden`, `z-index: 10`, or `transform` properties, our modal will be clipped, distorted, or incorrectly layered.
*   **Shadcn/Radix**: Wraps dialog content in `<DialogPrimitive.Portal>`. This renders the modal at the root level (`document.body`) using React Portals, completely isolating it from parent styling limits.

### 2. Viewport Scroll Lock & Layout Shifts
*   **Our Version**: When our modal overlay is active, the user can still use the mouse wheel or touch gesture to scroll the background page layout in the viewport.
*   **Shadcn/Radix**: Radix UI automatically applies `overflow: hidden` to `document.body` when the modal is open. To prevent the layout from "jumping" when the vertical scrollbar is removed, Radix dynamically calculates scrollbar width and injects compensating padding-right on the body.

### 3. Pointer-Events Locking & Outside Dismissal
*   **Our Version**: Clicking the background overlay closes the modal, but pointer events (like hover highlights or click triggers) are still active on background links behind the overlay.
*   **Shadcn/Radix**: Radix applies `pointer-events: none` directly to the `body` during modal open states, creating a complete click blocker. Radix also tracks touch propagation to ensure touch dismissals are safe on mobile screen sizes.

### 4. Custom State Styling Selectors (`data-*` attributes)
*   **Our Version**: We must manually append styling classes (e.g. `className={isActive ? 'active' : ''}`) to trigger state updates in CSS.
*   **Shadcn/Radix**: Radix maps all active state metrics to HTML data attributes (e.g., `data-state="active"`, `data-state="closed"`, `data-disabled="true"`). This allows developers to write clean, state-driven styling selectors (like `data-[state=active]:bg-primary`) instead of managing ad-hoc class concatenations in JS.
