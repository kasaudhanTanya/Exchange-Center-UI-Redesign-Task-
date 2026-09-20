import { Gem, Coins, ArrowRight, Zap } from "lucide-react";
import RewardArtwork from "./RewardArtwork.jsx";
import styles from "./ExchangeCard.module.css";

export default function ExchangeCard({ option, userGems, onConvert }) {
  const canConvert = userGems >= option.requiredGems;
  const missing = option.requiredGems - userGems;

  return (
    <article className={`${styles.ticket} ${option.highlight ? styles.highlighted : ""}`}>
      {option.badge && (
        <div className={styles.badge}>
          {option.highlight && <Zap size={12} />}
          {option.badge}
        </div>
      )}
      {/* <div className={styles.ticketHead}>
        <span className={styles.iconWrap}>
          <Icon size={18} strokeWidth={2} />
        </span>
        <span className={styles.label}>{option.label}</span>
      </div> */}

<div className={styles.ticketHead}>

  <RewardArtwork conversionId={option.id} />

  <div className={styles.ticketInfo}>
    <span className={styles.label}>
      {option.label}
    </span>

    <span className={styles.assetLabel}>
      GEM REWARD
    </span>
  </div>

</div>
      

      <p className={styles.description}>{option.description}</p>

      <hr className={styles.separator} />

      <div className={styles.conversionRow}>
        <div className={styles.amount}>
          <Gem size={16} strokeWidth={2} className={styles.gemGlyph} />
          <span>{option.requiredGems} Gems</span>
        </div>
        <ArrowRight size={16} className={styles.rowArrow} aria-hidden="true" />
        <div className={styles.amount}>
          <Coins size={16} strokeWidth={2} className={styles.veGlyph} />
          <span>{option.receiveVEs} VEs</span>
        </div>
      </div>

      {canConvert ? (
        <button type="button" className={styles.convertButton} onClick={() => onConvert(option)}>
          Convert {option.requiredGems} Gems
        </button>
      ) : (
        <div className={styles.insufficient}>
          <p className={styles.insufficientText}>
            You need {missing} more {missing === 1 ? "Gem" : "Gems"} to unlock.
          </p>
          <button type="button" className={styles.earnButton}>
            Earn more Gems
          </button>
        </div>
      )}
    </article>
  );
}
