import React from 'react';
import { ArrowLeft, ShieldCheck, Sparkles, Bell, HelpCircle } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ balances, onOpenEarnModal }) {
  return (
    <header className={styles.navbar}>
      <div className={`container-custom ${styles.navInner}`}>
        {/* Left: Brand & Navigation */}
        <div className={styles.navLeft}>
          <a href="#dashboard" className={styles.backLink} title="Return to Dashboard">
            <ArrowLeft size={16} className={styles.backIcon} />
            <span className={styles.backText}>Dashboard</span>
          </a>
          <div className={styles.divider}></div>
          <div className={styles.brand}>
            <div className={styles.logoBadge}>
              <img
                src="/images/single_VEs.jpeg"
                alt="VELOP Logo"
                className={styles.logoImg}
              />
            </div>
            <div className={styles.brandMeta}>
              <div className={styles.brandTitleRow}>
                <span className={styles.brandName}>VELOP</span>
                <span className={styles.brandBadge}>REWARDS</span>
              </div>
              <span className={styles.brandSubtitle}>Reward Conversion Vault</span>
            </div>
          </div>
        </div>

        {/* Center: Live Rate & Security Badge */}
        <div className={styles.navCenter}>
          <div className={styles.verifiedBadge}>
            <ShieldCheck size={14} className={styles.verifiedIcon} />
            <span>Official Fixed Rates • Instant Credit</span>
          </div>
        </div>

        {/* Right: User Balance Summary & Actions */}
        <div className={styles.navRight}>
          <div className={styles.quickBalances}>
            {/* Quick Gem balance */}
            <div className={`${styles.balancePill} ${styles.gemPill}`}>
              <img
                src="/images/single_gem.jpeg"
                alt="Gems"
                className={styles.pillIcon}
              />
              <span className={styles.pillValue}>{balances.gems.toLocaleString()}</span>
              <span className={styles.pillLabel}>Gems</span>
            </div>

            {/* Quick VE balance */}
            <div className={`${styles.balancePill} ${styles.vePill}`}>
              <img
                src="/images/single_VEs.jpeg"
                alt="VEs"
                className={styles.pillIcon}
              />
              <span className={styles.pillValue}>{balances.ves.toLocaleString()}</span>
              <span className={styles.pillLabel}>VEs</span>
            </div>
          </div>

          {/* User profile avatar pill */}
          <div className={styles.userProfile}>
            <img
              src="/images/tap_coin.jpeg"
              alt="User Avatar"
              className={styles.avatarImg}
            />
            <div className={styles.userMeta}>
              <span className={styles.userName}>{balances.userName || 'Alex Mercer'}</span>
              <span className={styles.userTier}>{balances.userTier || 'Gold Tier'}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
