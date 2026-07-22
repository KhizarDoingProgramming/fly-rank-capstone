import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus management and keyboard listeners
  useEffect(() => {
    if (isOpen) {
      // 1. Store the previously active element to restore focus on close
      previousActiveElement.current = document.activeElement as HTMLElement;

      // 2. Focus the modal container or the first focusable element
      if (modalRef.current) {
        // Focus container initially
        modalRef.current.focus();
      }

      // 3. Add keydown listener for Escape and Tab trap
      const handleKeyDown = (e: KeyboardEvent) => {
        // Close on Escape
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        // Tab focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
          const focusableElements = Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
          );

          if (focusableElements.length === 0) {
            e.preventDefault();
            return;
          }

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab: if on first, wrap to last
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            // Tab: if on last, wrap to first
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // 4. Restore focus to the triggering element on unmount
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>
        {description && (
          <p id="modal-description" className="modal-desc">
            {description}
          </p>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
