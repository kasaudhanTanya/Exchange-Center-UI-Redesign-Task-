import React from 'react';
import { X, AlertCircle, PlayCircle, Zap, Gamepad2, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import { earnMoreOptions } from '../../data/exchangeData';
import styles from './InsufficientGemsModal.module.css';

export default function InsufficientGemsModal({
  targetOption,
  userGems,
  onClose,
  onSimulateEarn
}) {
  const required = targetOption ? targetOption.requiredGems : 0;
  const missing = targetOption ? Math.max(0, targetOption.requiredGems - userGems) : 0;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'play-circle':
        return <PlayCircle size={20} className={styles.iconAds} />;
      case 'zap':
        return <Zap size={20} className={styles.iconZap} />;
      case 'gamepad-2':
        return <Gamepad2 size={20} className={styles.iconGame} />;
      case 'check-square':
        return <CheckSquare size={20} className={styles.iconPoll} />;
      default:
        return <Sparkles size={20} className={styles.iconDefault} />;
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="earn-gems-title"
    >
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.alertIconWrapper}>
              <AlertCircle size={20} className={styles.alertIcon} />
            </div>
            <div>
              <h2 id="earn-gems-title" className={styles.title}>Earn More Gems</h2>
              <span className={styles.subtitle}>Unlock your desired conversion vault</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Balance Status Card */}
        {targetOption && (
          <div className={styles.statusBox}>
            <div className={styles.statusRow}>
              <div className={styles.statusCol}>
                <span className={styles.statusLabel}>Available Gems</span>
                <span className={styles.statusVal}>{userGems}</span>
              </div>
              <div className={styles.statusDivider}></div>
              <div className={styles.statusCol}>
                <span className={styles.statusLabel}>Required Gems</span>
                <span className={styles.statusValRequired}>{required}</span>
              </div>
            </div>

            <div className={styles.neededBanner}>
              <Sparkles size={14} className={styles.neededIcon} />
              <span>You need <strong>{missing} more Gems</strong> to unlock <strong>"{targetOption.title}"</strong></span>
            </div>
          </div>
        )}

        {/* Earning Pathways List */}
        <div className={styles.pathwayList}>
          <span className={styles.listHeading}>Recommended Earning Activities</span>
          {earnMoreOptions.map(option => (
            <div key={option.id} className={styles.pathwayItem}>
              <div className={styles.itemIcon}>{renderIcon(option.icon)}</div>
              <div className={styles.itemDetails}>
                <div className={styles.itemTitleRow}>
                  <span className={styles.itemTitle}>{option.title}</span>
                  <span className={styles.itemTag}>{option.tag}</span>
                </div>
                <span className={styles.itemTime}>Est. time: {option.time}</span>
              </div>
              <div className={styles.itemReward}>
                <span className={styles.rewardText}>{option.reward}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Simulation Shortcut for Testers */}
        <div className={styles.testerSection}>
          <button
            type="button"
            className={styles.simulateBtn}
            onClick={() => onSimulateEarn(100)}
          >
            <Zap size={16} />
            <span>Simulate Earning +100 Gems (Instant Credit)</span>
          </button>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button
            type="button"
            className={styles.dismissBtn}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
