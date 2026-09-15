import { useEffect, useRef } from "react";
import { X, Gem, Coins, ArrowDown } from "lucide-react";
import ConversionSuccess from "./ConversionSuccess.jsx";
import styles from "./ExchangeModal.module.css";

export default function ExchangeModal({ option, phase, balance, onCancel, onConfirm, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && phase !== "processing") {
        onCancel();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [phase, onCancel]);

  if (!option) return null;

  const gemsAfter = balance.gems - option.requiredGems;
  const vesAfter = balance.ves + option.receiveVEs;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={(e) => e.target === e.currentTarget && phase !== "processing" && onCancel()}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exchange-modal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        {phase !== "processing" && (
          <button type="button" className={styles.closeButton} aria-label="Close dialog" onClick={onCancel}>
            <X size={18} />
          </button>
        )}

        {phase === "success" ? (
          <ConversionSuccess option={option} onContinue={onClose} />
        ) : (
          <>
            <h2 id="exchange-modal-title" className={styles.title}>
              Confirm conversion
            </h2>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <Gem size={18} className={styles.gemGlyph} />
                <span>{option.requiredGems} Gems</span>
              </div>
              <ArrowDown size={16} className={styles.summaryArrow} aria-hidden="true" />
              <div className={styles.summaryRow}>
                <Coins size={18} className={styles.veGlyph} />
                <span>{option.receiveVEs} VEs</span>
              </div>
            </div>

            <dl className={styles.afterGrid}>
              <div>
                <dt>Gems after conversion</dt>
                <dd>{gemsAfter.toLocaleString()}</dd>
              </div>
              <div>
                <dt>VEs after conversion</dt>
                <dd>{vesAfter.toLocaleString()}</dd>
              </div>
            </dl>

            <div className={styles.actions}>
              <button type="button" className={styles.cancelButton} onClick={onCancel} disabled={phase === "processing"}>
                Cancel
              </button>
              <button type="button" className={styles.confirmButton} onClick={onConfirm} disabled={phase === "processing"}>
                {phase === "processing" ? "Converting…" : "Confirm conversion"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
