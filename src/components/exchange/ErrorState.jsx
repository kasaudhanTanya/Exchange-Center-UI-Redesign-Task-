import { AlertTriangle } from "lucide-react";
import styles from "./ErrorState.module.css";

export default function ErrorState({ onRetry }) {
  return (
    <div className={styles.wrap} role="alert">
      <span className={styles.iconWrap}>
        <AlertTriangle size={22} strokeWidth={1.75} />
      </span>
      <h3 className={styles.title}>Unable to load exchange options</h3>
      <p className={styles.body}>Please try again.</p>
      <button type="button" className={styles.retryButton} onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}
