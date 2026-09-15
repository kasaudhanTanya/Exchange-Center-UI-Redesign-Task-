import { ShieldCheck } from "lucide-react";
import InfoTooltip from "./InfoTooltip.jsx";
import { exchangeRules, infoExplainers } from "../../data/exchangeData.js";
import styles from "./ExchangeRules.module.css";

export default function ExchangeRules() {
  return (
    <section className={styles.section} aria-labelledby="rules-heading">
      <div className={styles.headingRow}>
        <ShieldCheck size={18} className={styles.headingIcon} aria-hidden="true" />
        <h2 id="rules-heading" className={styles.heading}>
          Exchange rules
        </h2>
        <InfoTooltip title={infoExplainers.rules.title} body={infoExplainers.rules.body} />
      </div>
      <ul className={styles.list}>
        {exchangeRules.map((rule, index) => (
          <li key={index} className={styles.item}>
            {rule}
          </li>
        ))}
      </ul>
    </section>
  );
}
