import { Gem, Coins } from "lucide-react";
import InfoTooltip from "./InfoTooltip.jsx";
import { infoExplainers } from "../../data/exchangeData.js";
import styles from "./BalanceOverview.module.css";

export default function BalanceOverview({ gems, ves }) {
  return (
    <section className={styles.grid} aria-label="Your balances">
      <div className={styles.card}>
        <div className={`${styles.iconWrap} ${styles.gemIcon}`}>
          <Gem size={20} strokeWidth={1.75} />
        </div>
        <div className={styles.body}>
          <p className={styles.label}>
            Available Gems
            <InfoTooltip title={infoExplainers.gems.title} body={infoExplainers.gems.body} />
          </p>
          <p className={styles.value}>{gems.toLocaleString()}</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.iconWrap} ${styles.veIcon}`}>
          <Coins size={20} strokeWidth={1.75} />
        </div>
        <div className={styles.body}>
          <p className={styles.label}>
            Available VEs
            <InfoTooltip title={infoExplainers.ves.title} body={infoExplainers.ves.body} />
          </p>
          <p className={styles.value}>{ves.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
}
