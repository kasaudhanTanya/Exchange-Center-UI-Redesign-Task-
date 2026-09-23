import React, { useState, useEffect } from 'react';
import { X, ArrowDown, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import styles from './ExchangeModal.module.css';

export default function ExchangeModal({
  option,
  userBalances,
  onClose,
  onConfirm
}) {
  const [isProcessing, setIsProcessing] = useState(false);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && !isProcessing) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isProcessing]);

  if (!option) return null;

  // Post-conversion calculations
  const gemsAfter = userBalances.gems - option.requiredGems;
  const vesAfter = userBalances.ves + option.receiveVEs;
  const svesAfter = option.bonusSVEs ? userBalances.sves + option.bonusSVEs : userBalances.sves;

  const handleConfirmClick = () => {
    if (isProcessing) return; // double-click prevention
    setIsProcessing(true);
    // Simulate realistic 1.2s conversion operation with feedback
    setTimeout(() => {
      onConfirm(option);
    }, 1200);
  };

  return (
    <div
      className={styles.backdrop}
      onClick={() => !isProcessing && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modalContent}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleBox}>
            <span className={styles.categoryLabel}>{option.rewardType}</span>
            <h2 id="modal-title" className={styles.modalTitle}>Confirm Conversion</h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            disabled={isProcessing}
            aria-label="Close confirmation dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Conversion Pathway Visualization */}
          <div className={styles.pathwayCard}>
            {/* From Gems */}
            <div className={styles.tokenRow}>
              <div className={styles.tokenColLeft}>
                <img
                  src="/images/single_gem.png"
                  alt="Gems to deduct"
                  className={styles.tokenAvatar}
                />
                <div className={styles.tokenLabelGroup}>
                  <span className={styles.tokenAmountGem}>
                    -{option.requiredGems} Gems
                  </span>
                  <span className={styles.tokenSubtext}>Deducted from balance</span>
                </div>
              </div>
              <span className={styles.badgeDebit}>Debit</span>
            </div>

            {/* Down Arrow Connector */}
            <div className={styles.connectorRow}>
              <div className={styles.connectorLine}></div>
              <div className={styles.arrowCircle}>
                <ArrowDown size={14} className={styles.arrowDownIcon} />
              </div>
              <div className={styles.connectorLine}></div>
            </div>

            {/* To VEs */}
            <div className={styles.tokenRow}>
              <div className={styles.tokenColLeft}>
                <img
                  src="/images/single_VEs.png"
                  alt="VEs to credit"
                  className={styles.tokenAvatar}
                />
                <div className={styles.tokenLabelGroup}>
                  <span className={styles.tokenAmountVe}>
                    +{option.receiveVEs.toLocaleString()} VEs
                  </span>
                  <span className={styles.tokenSubtext}>Credited to balance</span>
                </div>
              </div>
              <span className={styles.badgeCredit}>Credit</span>
            </div>

            {/* Bonus Perk if applicable */}
            {option.bonusText && (
              <div className={styles.bonusBanner}>
                <span className={styles.bonusStar}>★</span>
                <span>Includes {option.bonusText}</span>
              </div>
            )}
          </div>

          {/* Account Balance Summary After Conversion */}
          <div className={styles.balanceSummaryBox}>
            <span className={styles.summaryTitle}>Post-Conversion Balance Preview</span>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCol}>
                <span className={styles.summaryLabel}>Gems After Conversion</span>
                <div className={styles.summaryValueRow}>
                  <span className={styles.summaryOldVal}>{userBalances.gems}</span>
                  <span className={styles.summaryArrow}>➔</span>
                  <span className={styles.summaryNewValGem}>{gemsAfter.toLocaleString()}</span>
                </div>
              </div>

              <div className={styles.summaryDivider}></div>

              <div className={styles.summaryCol}>
                <span className={styles.summaryLabel}>VEs After Conversion</span>
                <div className={styles.summaryValueRow}>
                  <span className={styles.summaryOldVal}>{userBalances.ves.toLocaleString()}</span>
                  <span className={styles.summaryArrow}>➔</span>
                  <span className={styles.summaryNewValVe}>{vesAfter.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-fraud / Guaranteed Rate Notice */}
          <div className={styles.guaranteeNotice}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span>Guaranteed rate: 1 Gem ≈ {(option.receiveVEs / option.requiredGems).toFixed(2)} VEs. Zero fees.</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className={styles.modalFooter}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`${styles.confirmBtn} ${isProcessing ? styles.btnProcessing : ''}`}
            onClick={handleConfirmClick}
            disabled={isProcessing}
            aria-busy={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 size={16} className={styles.spinner} />
                <span>Converting...</span>
              </>
            ) : (
              <span>Confirm Conversion</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
