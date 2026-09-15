import { Gem, Coins, PlayCircle, Gift, ClipboardCheck, Share2, Smartphone, ArrowRight } from "lucide-react";
import styles from "./ExchangeCard.module.css";

const ICONS = {
  "play-circle": PlayCircle,
  gift: Gift,
  "clipboard-check": ClipboardCheck,
  share: Share2,
  smartphone: Smartphone,
};

export default function ExchangeCard({ option, userGems, onConvert }) {
  const Icon = ICONS[option.icon] || Gift;
  const canConvert = userGems >= option.requiredGems;
  const missing = option.requiredGems - userGems;

  return (
    <article className={styles.ticket}>
      <div className={styles.ticketHead}>
        <span className={styles.iconWrap}>
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <span className={styles.label}>{option.label}</span>
      </div>

      <p className={styles.description}>{option.description}</p>

      <div className={styles.perforation} aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className={styles.conversionRow}>
        <div className={styles.amount}>
          <Gem size={16} strokeWidth={1.75} className={styles.gemGlyph} />
          <span>{option.requiredGems} Gems</span>
        </div>
        <ArrowRight size={16} className={styles.rowArrow} aria-hidden="true" />
        <div className={styles.amount}>
          <Coins size={16} strokeWidth={1.75} className={styles.veGlyph} />
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
            You need {missing} more {missing === 1 ? "Gem" : "Gems"} to unlock this conversion.
          </p>
          <button type="button" className={styles.earnButton}>
            Earn more Gems
          </button>
        </div>
      )}
    </article>
  );
}
