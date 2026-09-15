import { Gift } from "lucide-react";
import styles from "./EmptyState.module.css";

export default function EmptyState() {
  return (
    <div className={styles.wrap}>
      <span className={styles.iconWrap}>
        <Gift size={22} strokeWidth={1.75} />
      </span>
      <h3 className={styles.title}>No conversions available right now</h3>
      <p className={styles.body}>New reward conversion opportunities will appear here when available.</p>
    </div>
  );
}
