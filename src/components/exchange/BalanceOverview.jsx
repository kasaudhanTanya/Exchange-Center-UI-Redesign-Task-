import React, { useState, useEffect } from 'react';
import { PlusCircle, Wallet, TrendingUp, Sparkles } from 'lucide-react';
import InfoTooltip from '../common/InfoTooltip';
import { infoDefinitions } from '../../data/exchangeData';
import styles from './BalanceOverview.module.css';

export default function BalanceOverview({ balances, onOpenEarnModal, recentDelta }) {
  const [gemAnim, setGemAnim] = useState(false);
  const [veAnim, setVeAnim] = useState(false);

  // Trigger brief highlight animation whenever balances update
  useEffect(() => {
    if (recentDelta) {
      setGemAnim(true);
      setVeAnim(true);
      const timer = setTimeout(() => {
        setGemAnim(false);
        setVeAnim(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [balances.gems, balances.ves, recentDelta]);

  return (
    <section className={styles.balanceSection} aria-label="Your Account Balances">
      <div className="container-custom">
        <div className={styles.balanceGrid}>
          {/* Card 1: Available Gems */}
          <div className={`${styles.balanceCard} ${styles.gemCard} ${gemAnim ? styles.cardHighlight : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.labelGroup}>
                <span className={styles.cardTitle}>Available Gems</span>
                <InfoTooltip
                  title={infoDefinitions.gems.title}
                  content={infoDefinitions.gems.content}
                  position="top"
                />
              </div>
              <span className={styles.cardTypeBadge}>Input Reward</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.assetVisualWrapper}>
                <img
                  src="/images/single_gem.jpeg"
                  alt="Available Gems"
                  className={styles.assetImg}
                />
                <div className={styles.glowGem}></div>
              </div>
              <div className={styles.amountGroup}>
                <div className={styles.amountRow}>
                  <span className={`${styles.amountValue} ${gemAnim ? styles.pulsingValue : ''}`}>
                    {balances.gems.toLocaleString()}
                  </span>
                  <span className={styles.unitText}>Gems</span>
                </div>
                <span className={styles.subtext}>Ready for instant vault conversion</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button
                type="button"
                className={styles.earnBtn}
                onClick={onOpenEarnModal}
                title="Earn more Gems through ads & tasks"
              >
                <PlusCircle size={15} />
                <span>Earn More Gems</span>
              </button>
              <div className={styles.rateHint}>
                <span>100% Eligible</span>
              </div>
            </div>
          </div>

          {/* Card 2: Available VEs */}
          <div className={`${styles.balanceCard} ${styles.veCard} ${veAnim ? styles.cardHighlightVe : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.labelGroup}>
                <span className={styles.cardTitle}>Available VEs</span>
                <InfoTooltip
                  title={infoDefinitions.ves.title}
                  content={infoDefinitions.ves.content}
                  position="top"
                />
              </div>
              <span className={styles.cardTypeBadgeVe}>Redeemable Currency</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.assetVisualWrapper}>
                <img
                  src="/images/single_VEs.jpeg"
                  alt="Available VEs"
                  className={styles.assetImg}
                />
                <div className={styles.glowVe}></div>
              </div>
              <div className={styles.amountGroup}>
                <div className={styles.amountRow}>
                  <span className={`${styles.amountValueVe} ${veAnim ? styles.pulsingValueVe : ''}`}>
                    {balances.ves.toLocaleString()}
                  </span>
                  <span className={styles.unitTextVe}>VEs</span>
                </div>
                <span className={styles.subtext}>Redeemable for cash, gift cards & perks</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.redemptionReady}>
                <Wallet size={15} className={styles.walletIcon} />
                <span>Wallet Active • Payout Ready</span>
              </div>
              <div className={styles.veStatusPill}>Verified</div>
            </div>
          </div>

          {/* Card 3: Auxiliary Prestige Balances (SVEs & Golden Tokens) */}
          <div className={`${styles.balanceCard} ${styles.auxCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.labelGroup}>
                <span className={styles.cardTitle}>Vault Pass & Tier Perks</span>
                <InfoTooltip
                  title={infoDefinitions.sves.title}
                  content={infoDefinitions.sves.content}
                  position="top"
                />
              </div>
              <span className={styles.cardTypeBadgeSilver}>Bonus Assets</span>
            </div>

            <div className={styles.auxList}>
              {/* SVEs item */}
              <div className={styles.auxItem}>
                <div className={styles.auxAssetIconWrapper}>
                  <img
                    src="/images/single_SVEs.jpeg"
                    alt="SVEs Bonus Coin"
                    className={styles.auxAssetIcon}
                  />
                </div>
                <div className={styles.auxMeta}>
                  <span className={styles.auxLabel}>Silver VEs (SVEs)</span>
                  <span className={styles.auxValue}>{balances.sves || 125} SVEs</span>
                </div>
                <span className={styles.auxTag}>Tier Bonus</span>
              </div>

              {/* Tokens item */}
              <div className={styles.auxItem}>
                <div className={styles.auxAssetIconWrapper}>
                  <img
                    src="/images/Signle_Token.jpeg"
                    alt="Golden Token"
                    className={styles.auxAssetIcon}
                  />
                </div>
                <div className={styles.auxMeta}>
                  <span className={styles.auxLabel}>Golden Pass Tokens</span>
                  <span className={styles.auxValue}>{balances.tokens || 3} Pass</span>
                </div>
                <span className={styles.auxTagGold}>VIP Entry</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.auxNote}>
                <Sparkles size={14} className={styles.sparkleSmall} />
                <span>Earned automatically with premium conversion bundles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
