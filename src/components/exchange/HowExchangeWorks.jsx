import React from 'react';
import { howExchangeWorks } from '../../data/exchangeData';
import { Gem, Layers, Calculator, CheckCircle2, Coins, ArrowRight } from 'lucide-react';
import styles from './HowExchangeWorks.module.css';

const stepIcons = [
  <Gem size={18} className={styles.iconGem} />,
  <Layers size={18} className={styles.iconLayers} />,
  <Calculator size={18} className={styles.iconCalc} />,
  <CheckCircle2 size={18} className={styles.iconCheck} />,
  <Coins size={18} className={styles.iconCoins} />
];

export default function HowExchangeWorks() {
  return (
    <section className={styles.section} aria-label="How Reward Exchange Works">
      <div className="container-custom">
        <div className={styles.header}>
          <div className={styles.badge}>Simple 5-Step Process</div>
          <h2 className={styles.title}>How Exchange Works</h2>
          <p className={styles.subtitle}>
            Converting your hard-earned Gems into VELOOP VEs is direct, fast, and transparent.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {howExchangeWorks.map((item, index) => (
            <div key={item.step} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumberBadge}>{item.step}</div>
                <div className={styles.stepIconWrapper}>
                  {stepIcons[index]}
                </div>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.description}</p>
              </div>

              {index < howExchangeWorks.length - 1 && (
                <div className={styles.stepConnector}>
                  <ArrowRight size={14} className={styles.connectorArrow} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
