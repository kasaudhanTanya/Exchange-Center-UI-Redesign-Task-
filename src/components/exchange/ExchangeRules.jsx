import React, { useState } from 'react';
import { ShieldCheck, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { exchangeRules } from '../../data/exchangeData';
import styles from './ExchangeRules.module.css';

export default function ExchangeRules() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 'faq-1',
      q: 'Can I reverse a completed conversion?',
      a: 'No. All Gem-to-VE conversions are final and irreversible once confirmed. Please verify amounts on the review screen before confirming.'
    },
    {
      id: 'faq-2',
      q: 'When will my converted VEs reflect in my balance?',
      a: 'VEs are credited instantly to your balance upon confirmation. There is zero processing delay.'
    },
    {
      id: 'faq-3',
      q: 'Can I perform multiple conversions in a single session?',
      a: 'Yes. You can perform as many eligible conversions as your Gem balance allows, subject to per-package availability and eligibility.'
    },
    {
      id: 'faq-4',
      q: 'Do conversion rates change frequently?',
      a: 'Exchange rates are predefined by VELOOP Rewards. They may update seasonally based on platform campaigns, but will always be clearly published before confirmation.'
    }
  ];

  return (
    <section className={styles.section} aria-label="Exchange Rules and FAQ">
      <div className="container-custom">
        <div className={styles.twoCol}>
          {/* Rules Column */}
          <div className={styles.rulesCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={20} className={styles.headerIcon} />
              </div>
              <div>
                <h2 className={styles.cardTitle}>Exchange Rules & Policies</h2>
                <p className={styles.cardSubtitle}>Official VELOOP Rewards conversion guidelines</p>
              </div>
            </div>

            <div className={styles.rulesList}>
              {exchangeRules.map((rule, idx) => (
                <div key={rule.id} className={styles.ruleItem}>
                  <div className={styles.ruleNumberBadge}>{(idx + 1).toString().padStart(2, '0')}</div>
                  <div className={styles.ruleMeta}>
                    <span className={styles.ruleTitle}>{rule.title}</span>
                    <span className={styles.ruleDesc}>{rule.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Column */}
          <div className={styles.faqCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}>
                <Info size={20} className={styles.headerIconBlue} />
              </div>
              <div>
                <h2 className={styles.cardTitle}>Frequently Asked Questions</h2>
                <p className={styles.cardSubtitle}>Quick answers about reward conversions</p>
              </div>
            </div>

            <div className={styles.faqList}>
              {faqs.map(faq => (
                <div key={faq.id} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    aria-expanded={expandedFaq === faq.id}
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === faq.id
                      ? <ChevronUp size={16} className={styles.chevron} />
                      : <ChevronDown size={16} className={styles.chevron} />
                    }
                  </button>
                  {expandedFaq === faq.id && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
