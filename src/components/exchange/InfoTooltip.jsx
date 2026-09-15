import { useState, useRef, useEffect } from "react";
import { Info } from "lucide-react";
import styles from "./InfoTooltip.module.css";

export default function InfoTooltip({ title, body }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <span className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={`More information: ${title}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Info size={14} strokeWidth={2.25} />
      </button>
      {open && (
        <span role="tooltip" className={styles.bubble}>
          <strong className={styles.bubbleTitle}>{title}</strong>
          <span className={styles.bubbleBody}>{body}</span>
        </span>
      )}
    </span>
  );
}
