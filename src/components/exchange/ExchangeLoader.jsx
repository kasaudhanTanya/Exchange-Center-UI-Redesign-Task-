import React from 'react';
import styles from './ExchangeLoader.module.css';

export default function ExchangeLoader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderCard}>
        {/* Orbiting gem + coin animation */}
        <div className={styles.orbitRing}>
          <div className={styles.orbitInner}></div>
          <div className={styles.gemOrbit}>
            <img src="/images/single_gem.jpeg" alt="" className={styles.orbitImgGem} />
          </div>
          <div className={styles.veOrbit}>
            <img src="/images/single_VEs.jpeg" alt="" className={styles.orbitImgVe} />
          </div>
        </div>

        <div className={styles.loaderText}>
          <span className={styles.loaderTitle}>Loading Vault Packages</span>
          <span className={styles.loaderSubtitle}>Fetching available conversion opportunities…</span>
        </div>

        {/* Progress shimmer bars */}
        <div className={styles.shimmerBar}></div>
        <div className={`${styles.shimmerBar} ${styles.shimmerShort}`}></div>
        <div className={`${styles.shimmerBar} ${styles.shimmerMid}`}></div>
      </div>
    </div>
  );
}
