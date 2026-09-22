import { ArrowRight } from "lucide-react";
import gemImage from "../../assets/single_gem.jpeg";
import veImage from "../../assets/single_VEs.jpeg";
import styles from "./ExchangeHero.module.css";

export default function ExchangeHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>Reward Center</div>
        <h1 className={styles.title}>Exchange your Gems for VEs</h1>
        <p className={styles.subtitle}>
          Convert your eligible Gems into VEs and continue your reward
          journey instantly.
          <br />
          No limits, just your rewards.
        </p>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.orbit}>
          <span className={`${styles.token} ${styles.tokenGem}`}>
            <img src={gemImage} alt="Gem" />
          </span>
          <ArrowRight className={styles.arrow} aria-hidden="true" />
          <span className={`${styles.token} ${styles.tokenVe}`}>
            <img src={veImage} alt="VE" />
          </span>
        </div>
      </div>

    </header>
  );
}
