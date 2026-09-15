import { CheckCircle2, Clock, XCircle } from "lucide-react";
import styles from "./ExchangeHistory.module.css";

const STATUS_META = {
  completed: { label: "Completed", icon: CheckCircle2, className: "statusCompleted" },
  pending: { label: "Processing", icon: Clock, className: "statusPending" },
  failed: { label: "Failed", icon: XCircle, className: "statusFailed" },
};

export default function ExchangeHistory({ history }) {
  if (!history || history.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="history-heading">
      <h2 id="history-heading" className={styles.heading}>
        Recent conversions
      </h2>
      <ul className={styles.list}>
        {history.map((item) => {
          const meta = STATUS_META[item.status] || STATUS_META.completed;
          const StatusIcon = meta.icon;
          return (
            <li className={styles.row} key={item.id}>
              <span className={styles.date}>{item.date}</span>
              <span className={styles.amounts}>
                {item.requiredGems} Gems → {item.receiveVEs} VEs
              </span>
              <span className={`${styles.status} ${styles[meta.className]}`}>
                <StatusIcon size={14} />
                {meta.label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
