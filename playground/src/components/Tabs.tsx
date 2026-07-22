import React, { useRef, useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  label: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, label }) => {
  const [activeTabId, setActiveTabId] = useState(items[0]?.id || '');
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const activeIndex = items.findIndex((item) => item.id === activeTabId);

  // Focus utility
  const focusTab = (id: string) => {
    setActiveTabId(id);
    const tabEl = tabRefs.current[id];
    if (tabEl) {
      tabEl.focus();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newIndex = activeIndex;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = (activeIndex + 1) % items.length;
        e.preventDefault();
        focusTab(items[newIndex].id);
        break;
      case 'ArrowLeft':
        newIndex = (activeIndex - 1 + items.length) % items.length;
        e.preventDefault();
        focusTab(items[newIndex].id);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(items[0].id);
        break;
      case 'End':
        e.preventDefault();
        focusTab(items[items.length - 1].id);
        break;
      default:
        break;
    }
  };

  return (
    <div className="tabs-container">
      {/* Tab List */}
      <div
        role="tablist"
        aria-label={label}
        className="tabs-list"
        onKeyDown={handleKeyDown}
      >
        {items.map((item) => {
          const isActive = item.id === activeTabId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`tab-header-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTabId(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {items.map((item) => {
        const isActive = item.id === activeTabId;
        return (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            tabIndex={0}
            className="tab-panel-content"
            hidden={!isActive}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
};
