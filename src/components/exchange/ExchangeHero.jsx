import { Gem } from "lucide-react";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>Reward Center</div>
        <h1 className={styles.title}>Exchange your Gems for VEs</h1>
        <p className={styles.subtitle}>
          Convert your eligible Gems into VEs and continue your reward
          journey instantly. No limits, just your rewards.
        </p>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.orbit}>
          <span className={`${styles.token} ${styles.tokenGem}`}>
            <Gem size={20} strokeWidth={2} />
          </span>
          <span className={styles.arrow}>→</span>
          <span className={`${styles.token} ${styles.tokenVe}`}>VE</span>
        </div>
      </div>

    </header>
  );
}
