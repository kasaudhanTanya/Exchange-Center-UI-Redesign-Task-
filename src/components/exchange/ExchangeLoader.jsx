import { Gem } from "lucide-react";
import styles from "./ExchangeLoader.module.css";

export default function ExchangeLoader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner}>
        <Gem size={22} strokeWidth={1.75} />
      </span>
      <p className={styles.text}>Preparing your reward conversions…</p>
    </div>
  );
}
