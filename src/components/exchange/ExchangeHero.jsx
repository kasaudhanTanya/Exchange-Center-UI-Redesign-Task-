import { Gem } from "lucide-react";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>Exchange Center</p>
        <h1 className={styles.title}>Turn your Gems into VEs</h1>
        <p className={styles.subtitle}>
          Convert your eligible Gems into VEs and continue your reward
          journey — no charts, no trading, just your rewards, converted.
        </p>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.orbit}>
          <span className={`${styles.token} ${styles.tokenGem}`}>
            <Gem size={22} strokeWidth={1.75} />
          </span>
          <span className={styles.arrow}>→</span>
          <span className={`${styles.token} ${styles.tokenVe}`}>VE</span>
        </div>
      </div>
    </header>
  );
}
