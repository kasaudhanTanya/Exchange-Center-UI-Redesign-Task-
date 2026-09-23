import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Check, Sparkles, ArrowRight, Wallet } from 'lucide-react';
import styles from './ConversionSuccess.module.css';

export default function ConversionSuccess({
  conversionDetails,
  onClose,
  onViewHistory
}) {
  useEffect(() => {
    // Fire elegant reward celebration burst
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#fbbf24', '#38bdf8', '#10b981', '#ffffff']
      });
    } catch (e) {
      // In case canvas is not supported in tests
    }
  }, []);

  if (!conversionDetails) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <div className={styles.modalCard}>
        {/* Glow behind success checkmark */}
        <div className={styles.burstGlow}></div>

        <div className={styles.iconCircle}>
          <Check size={32} className={styles.checkIcon} />
        </div>

        <div className={styles.badge}>
          <Sparkles size={12} className={styles.sparkle} />
          <span>Reward Conversion Finalized</span>
        </div>

        <h2 id="success-title" className={styles.title}>Conversion Complete!</h2>

        <div className={styles.detailCard}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Gems Converted:</span>
            <span className={styles.detailValGem}>
              -{conversionDetails.requiredGems} Gems
            </span>
          </div>

          <div className={styles.detailRowVe}>
            <span className={styles.detailLabel}>VEs Added to Balance:</span>
            <span className={styles.detailValVe}>
              +{conversionDetails.receiveVEs.toLocaleString()} VEs
            </span>
          </div>

          {conversionDetails.bonusText && (
            <div className={styles.bonusRow}>
              <span className={styles.bonusLabel}>Bonus Perk:</span>
              <span className={styles.bonusVal}>{conversionDetails.bonusText}</span>
            </div>
          )}
        </div>

        <p className={styles.note}>
          Your new balance has been updated immediately across your VELOOP Rewards account.
        </p>

        <div className={styles.btnGroup}>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={onClose}
          >
            <span>Continue Exchanging</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => {
              onClose();
              if (onViewHistory) onViewHistory();
            }}
          >
            <span>View Recent Conversions</span>
          </button>
        </div>
      </div>
    </div>
  );
}
