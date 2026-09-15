import { howExchangeWorks } from "../../data/exchangeData.js";
import styles from "./HowExchangeWorks.module.css";

export default function HowExchangeWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <h2 id="how-it-works-heading" className={styles.heading}>
        How the exchange works
      </h2>
      <ol className={styles.list}>
        {howExchangeWorks.map((item, index) => (
          <li className={styles.item} key={item.step}>
            <span className={styles.step}>{item.step}</span>
            <p className={styles.itemTitle}>{item.title}</p>
            <p className={styles.itemDescription}>{item.description}</p>
            {index < howExchangeWorks.length - 1 && (
              <span className={styles.connector} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
