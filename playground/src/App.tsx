import { useState } from 'react';
import { Modal } from './components/Modal';
import { Tabs } from './components/Tabs';
import { Disclosure } from './components/Disclosure';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabItems = [
    {
      id: 'react',
      label: 'React + TS',
      content: (
        <div>
          <h3>React & TypeScript Core</h3>
          <p>Hand-crafted components built with native state hooks, custom focus refs, and strong typing constraints. No external packages are used.</p>
        </div>
      )
    },
    {
      id: 'accessibility',
      label: 'W3C ARIA Specs',
      content: (
        <div>
          <h3>Accessibility Compliance</h3>
          <p>Each element features explicit semantic roles, matching controls-labels ID bindings, and keyboard listeners matching standard authoring practices.</p>
        </div>
      )
    },
    {
      id: 'shadcn',
      label: 'Shadcn Comparison',
      content: (
        <div>
          <h3>Comparison and Auditing</h3>
          <p>Radix primitives are compared in detail to analyze edge cases like viewport portals, touch scroll overrides, and background clicks prevention.</p>
        </div>
      )
    }
  ];

  return (
    <div className="playground-app">
      <header className="playground-header">
        <h1>W3C ARIA Accessible Playground</h1>
        <p>A suite of accessible widgets built completely from scratch in React + TypeScript, tested keyboard-only.</p>
      </header>

      <main className="playground-main">
        {/* Component 1: Modal Dialog */}
        <section className="widget-section">
          <h2>1. Modal Dialog</h2>
          <p className="widget-instructions">
            <strong>Keyboard Check:</strong> Tab to the button below, press <code>Enter</code> to open. Inside the modal, Tab or Shift-Tab will cycle focus and remain locked inside the modal. Press <code>Escape</code> to close, and focus will return to the trigger button.
          </p>
          <button
            type="button"
            className="btn-trigger"
            onClick={() => setIsModalOpen(true)}
          >
            Launch Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Focus-Locked Modal Dialog"
            description="This dialog traps focus inside using a keyboard event listener and returns it to the trigger button on close."
          >
            <div className="modal-inner-content">
              <p>Try pressing Tab to navigate between these inputs. You cannot escape into the background page.</p>
              <div className="modal-form-group">
                <label htmlFor="modal-input-name">User Name:</label>
                <input type="text" id="modal-input-name" placeholder="Enter name..." />
              </div>
              <div className="modal-form-group">
                <label htmlFor="modal-input-email">User Email:</label>
                <input type="email" id="modal-input-email" placeholder="Enter email..." />
              </div>
              <footer className="modal-footer-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="button" className="btn-primary" onClick={() => {
                  alert("Settings Submitted!");
                  setIsModalOpen(false);
                }}>
                  Confirm Save
                </button>
              </footer>
            </div>
          </Modal>
        </section>

        {/* Component 2: Tabs */}
        <section className="widget-section">
          <h2>2. Tab List Interface</h2>
          <p className="widget-instructions">
            <strong>Keyboard Check:</strong> Tab to the tab headers. Use the <code>Left/Right Arrow</code> keys to switch tabs. Press <code>Home</code> to jump to the first tab, and <code>End</code> to jump to the last tab.
          </p>
          <Tabs items={tabItems} label="A11y Comparison Tabs" />
        </section>

        {/* Component 3: Disclosure */}
        <section className="widget-section">
          <h2>3. Disclosure Widget (Collapsible)</h2>
          <p className="widget-instructions">
            <strong>Keyboard Check:</strong> Tab to the disclosure header. Press <code>Space</code> or <code>Enter</code> to toggle visibility of the hidden panel.
          </p>
          <div className="disclosure-list">
            <Disclosure title="How is the focus trap implemented?">
              <p>We query all focusable elements inside the modal wrapper container using standard DOM selectors. If the active element hits the first or last boundaries during tab presses, we prevent default behavior and manually call `.focus()` to loop it.</p>
            </Disclosure>
            <Disclosure title="How are ARIA controls connected?">
              <p>We dynamically assign a unique React `useId()` value to the panel content block. The triggering button references this ID in its `aria-controls` attribute, and updates its `aria-expanded` boolean based on open states.</p>
            </Disclosure>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
