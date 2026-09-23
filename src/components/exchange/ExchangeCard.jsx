import React from 'react';
import { ArrowRight, Sparkles, AlertCircle, CheckCircle, Lock } from 'lucide-react';
import styles from './ExchangeCard.module.css';

export default function ExchangeCard({ option, userGems, onSelectConversion, onOpenEarnModal }) {
  const isSufficient = userGems >= option.requiredGems;
  const missingGems = isSufficient ? 0 : option.requiredGems - userGems;

  const handleAction = () => {
    if (isSufficient) {
      onSelectConversion(option);
    } else {
      onOpenEarnModal(option);
    }
  };

  return (
    <div
      className={`${styles.card} ${!isSufficient ? styles.insufficientCard : ''}`}
      tabIndex={0}
      role="region"
      aria-label={`Conversion package: ${option.title}`}
    >
      {/* Top Meta Header: Badge & Category */}
      <div className={styles.cardHeader}>
        <span className={styles.rewardType}>{option.rewardType}</span>
        {option.badge && (
          <span className={`${styles.badge} ${option.category === 'Elite' ? styles.badgeElite : ''}`}>
            {option.badge}
          </span>
        )}
      </div>

      {/* 3D Visual Asset Area */}
      <div className={styles.visualContainer}>
        <div className={styles.cardAssetFrame}>
          <img
            src={option.image}
            alt={option.title}
            className={styles.assetImage}
            loading="lazy"
          />
          <div className={styles.ambientAssetGlow}></div>
        </div>

        {option.bonusText && (
          <div className={styles.bonusPill}>
            <Sparkles size={12} className={styles.bonusIcon} />
            <span>{option.bonusText}</span>
          </div>
        )}
      </div>

      {/* Title & Explanation */}
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{option.title}</h3>
        <p className={styles.cardExplanation}>{option.explanation}</p>
      </div>

      {/* Conversion Conversion Pathway */}
      <div className={styles.conversionBlock}>
        <div className={styles.tokenBox}>
          <span className={styles.tokenAmount}>
            <img src="/images/single_gem.jpeg" alt="" className={styles.tokenMicroIcon} />
            {option.requiredGems}
          </span>
          <span className={styles.tokenName}>Gems</span>
        </div>

        <div className={styles.conversionArrowBox}>
          <span className={styles.arrowIcon}>➔</span>
          <span className={styles.rateRatio}>{option.multiplier}</span>
        </div>

        <div className={styles.tokenBoxVe}>
          <span className={styles.tokenAmountVe}>
            <img src="/images/single_VEs.jpeg" alt="" className={styles.tokenMicroIcon} />
            {option.receiveVEs.toLocaleString()}
          </span>
          <span className={styles.tokenNameVe}>VEs</span>
        </div>
      </div>

      {/* Conversion Rate & Availability Footnote */}
      <div className={styles.rateFootnote}>
        <span>Exchange Value: 1 Gem ≈ {(option.receiveVEs / option.requiredGems).toFixed(2)} VEs</span>
        <span className={styles.cooldownTag}>{option.cooldown}</span>
      </div>

      {/* Action / State Area */}
      <div className={styles.cardFooter}>
        {isSufficient ? (
          <button
            type="button"
            className={styles.convertBtn}
            onClick={handleAction}
            aria-label={`Convert ${option.requiredGems} Gems into ${option.receiveVEs} VEs`}
          >
            <span>Convert {option.requiredGems} Gems</span>
            <ArrowRight size={16} className={styles.btnArrow} />
          </button>
        ) : (
          <div className={styles.insufficientContainer}>
            <div className={styles.missingBadge}>
              <AlertCircle size={13} className={styles.alertIcon} />
              <span>Need {missingGems} more Gems</span>
            </div>
            <button
              type="button"
              className={styles.earnMoreBtn}
              onClick={handleAction}
              aria-label={`Insufficient Gems. Click to earn ${missingGems} more Gems`}
            >
              <span>Earn More Gems</span>
              <Sparkles size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
