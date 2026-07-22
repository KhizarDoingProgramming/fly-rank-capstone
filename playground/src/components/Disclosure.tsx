import React, { useState, useId } from 'react';

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="disclosure-container">
      {/* Trigger Button */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="disclosure-trigger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span className={`disclosure-arrow ${isOpen ? 'open' : ''}`}>
          &#9656;
        </span>
      </button>

      {/* Collapsible Panel */}
      <div
        id={panelId}
        className="disclosure-panel"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};
