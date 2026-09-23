import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Coins } from 'lucide-react';
import InfoTooltip from '../common/InfoTooltip';
import { infoDefinitions } from '../../data/exchangeData';
import styles from './ExchangeHero.module.css';

export default function ExchangeHero({ onScrollToConversions }) {
  return (
    <section className={styles.heroSection}>
      <div className={`container-custom ${styles.heroContainer}`}>
        {/* Left Column: Typography & Supporting Content */}
        <div className={styles.textContent}>
          <div className={styles.eyebrowBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>VELOOP REWARD CONVERSION VAULT</span>
          </div>

          <h1 className={styles.headline}>
            Turn Your Earned <span className={styles.gemText}>Gems</span> Into{' '}
            <span className={styles.veText}>VEs</span>
          </h1>

          <p className={styles.subheadline}>
            Convert your eligible Gems into official VELOOP virtual currency. Enjoy guaranteed conversion
            rates with instant balance updates—no trading complexities, no gas fees, strictly rewards.
            <InfoTooltip
              title={infoDefinitions.exchangeRate.title}
              content={infoDefinitions.exchangeRate.content}
              position="bottom"
            />
          </p>

          {/* Value Propositions */}
          <div className={styles.featurePills}>
            <div className={styles.pill}>
              <Zap size={14} className={styles.pillIconZap} />
              <span>Instant Credit</span>
            </div>
            <div className={styles.pill}>
              <ShieldCheck size={14} className={styles.pillIconShield} />
              <span>Verified Fixed Rates</span>
            </div>
            <div className={styles.pill}>
              <Coins size={14} className={styles.pillIconCoins} />
              <span>Zero Deductions</span>
            </div>
          </div>

          {/* Quick CTA to skip straight to packages */}
          <div className={styles.heroActions}>
            <button
              type="button"
              className={styles.primaryCta}
              onClick={onScrollToConversions}
            >
              <span>Explore Available Conversions</span>
              <ArrowRight size={16} className={styles.arrowIcon} />
            </button>
          </div>
        </div>

        {/* Right Column: Gem → VE Conversion Visual */}
        <div className={styles.visualCol}>
          <div className={styles.vaultCard}>
            {/* Background ambient glows */}
            <div className={styles.ambientGlowGem}></div>
            <div className={styles.ambientGlowVe}></div>

            <div className={styles.vaultDisplay}>
              {/* Gem Side */}
              <div className={styles.nodeGem}>
                <div className={styles.imgWrapperGem}>
                  <img
                    src="/images/single_gem.png"
                    alt="Luminous Purple Gem"
                    className={`${styles.heroImage} animate-float`}
                  />
                  <div className={styles.itemGlowPurple}></div>
                </div>
                <div className={styles.nodeLabel}>
                  <span className={styles.nodeTitle}>Earned Gems</span>
                  <span className={styles.nodeMeta}>Activity Credits</span>
                </div>
              </div>

              {/* Conversion Energy Pathway */}
              <div className={styles.energyPathway}>
                <div className={styles.energyLine}>
                  <div className={styles.energyPulse}></div>
                </div>
                <div className={styles.conversionHub}>
                  <span className={styles.hubSymbol}>➔</span>
                </div>
                <span className={styles.pathwayText}>Reward Vault</span>
              </div>

              {/* VE Side */}
              <div className={styles.nodeVe}>
                <div className={styles.imgWrapperVe}>
                  <img
                    src="/images/single_VEs.png"
                    alt="Golden VELOOP VE Coin"
                    className={`${styles.heroImage} animate-float`}
                    style={{ animationDelay: '1.2s' }}
                  />
                  <div className={styles.itemGlowGold}></div>
                </div>
                <div className={styles.nodeLabel}>
                  <span className={styles.nodeTitleGold}>VELOOP VEs</span>
                  <span className={styles.nodeMeta}>Redeemable Currency</span>
                </div>
              </div>
            </div>

            {/* Bottom Vault Guarantee Strip */}
            <div className={styles.vaultFooter}>
              <div className={styles.statusDot}></div>
              <span>Platform Fixed Rate Conversion Protocol Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
