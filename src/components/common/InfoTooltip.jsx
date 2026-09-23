import React, { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import styles from './InfoTooltip.module.css';

export default function InfoTooltip({ title, content, position = 'top' }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <span className={styles.wrapper} ref={containerRef}>
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.active : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsOpen(true)}
        aria-label={title ? `Information: ${title}` : 'More information'}
        title="Click for details"
      >
        <Info size={14} className={styles.icon} />
      </button>

      {isOpen && (
        <div
          className={`${styles.popover} ${styles[position]}`}
          role="tooltip"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.popoverHeader}>
            <span className={styles.title}>{title}</span>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
          </div>
          <p className={styles.content}>{content}</p>
        </div>
      )}
    </span>
  );
}
