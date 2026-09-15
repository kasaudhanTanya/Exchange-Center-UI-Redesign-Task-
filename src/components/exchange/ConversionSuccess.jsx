import { Check } from "lucide-react";
import styles from "./ConversionSuccess.module.css";

export default function ConversionSuccess({ option, onContinue }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.badge}>
        <Check size={26} strokeWidth={2.5} />
        <span className={styles.burst} aria-hidden="true" />
      </div>
      <h3 className={styles.title}>Conversion complete</h3>
      <p className={styles.detail}>
        {option.requiredGems} Gems converted. +{option.receiveVEs} VEs added to your balance.
      </p>
      <button type="button" className={styles.continueButton} onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
