import React, { useState, useRef, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

import Navbar from '../../components/common/Navbar';
import DemoControls from '../../components/common/DemoControls';
import ExchangeHero from '../../components/exchange/ExchangeHero';
import BalanceOverview from '../../components/exchange/BalanceOverview';
import HowExchangeWorks from '../../components/exchange/HowExchangeWorks';
import ExchangeGrid from '../../components/exchange/ExchangeGrid';
import ExchangeModal from '../../components/exchange/ExchangeModal';
import ConversionSuccess from '../../components/exchange/ConversionSuccess';
import InsufficientGemsModal from '../../components/exchange/InsufficientGemsModal';
import ExchangeHistory from '../../components/exchange/ExchangeHistory';
import ExchangeRules from '../../components/exchange/ExchangeRules';
import ExchangeLoader from '../../components/exchange/ExchangeLoader';

import {
  initialUserBalances,
  conversionOptions,
  initialHistory
} from '../../data/exchangeData';

import styles from './ExchangeCenter.module.css';

export default function ExchangeCenter() {
  // ── Core State ──────────────────────────────────────────────
  const [balances, setBalances] = useState(initialUserBalances);
  const [history, setHistory] = useState(initialHistory);

  // ── Modal State ──────────────────────────────────────────────
  const [selectedOption, setSelectedOption] = useState(null);        // confirmation modal
  const [successDetails, setSuccessDetails] = useState(null);        // success modal
  const [insufficientOption, setInsufficientOption] = useState(null); // earn-more modal

  // ── Balance change animation trigger ─────────────────────────
  const [balanceDelta, setBalanceDelta] = useState(0); // increments on conversion

  // ── Demo / Reviewer State ─────────────────────────────────────
  const [demoMode, setDemoMode] = useState('normal'); // 'normal' | 'loading' | 'empty' | 'error'

  // ── Section Refs ──────────────────────────────────────────────
  const conversionsRef = useRef(null);
  const historyRef = useRef(null);

  // ── Handlers ─────────────────────────────────────────────────
  const scrollToConversions = useCallback(() => {
    conversionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToHistory = useCallback(() => {
    historyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  /** User selects a conversion card — open confirmation modal */
  const handleSelectConversion = useCallback((option) => {
    setSelectedOption(option);
  }, []);

  /** User does not have enough gems — open earn-more modal */
  const handleOpenEarnModal = useCallback((option) => {
    setInsufficientOption(option);
  }, []);

  /** Simulate earning gems from the insufficient-gems modal shortcut */
  const handleSimulateEarn = useCallback((amount) => {
    setBalances(prev => ({ ...prev, gems: prev.gems + amount }));
    setInsufficientOption(null);
  }, []);

  /** User confirms conversion in modal */
  const handleConfirmConversion = useCallback((option) => {
    // Deduct gems, credit VEs, update SVEs/tokens if bonus
    setBalances(prev => ({
      ...prev,
      gems: prev.gems - option.requiredGems,
      ves: prev.ves + option.receiveVEs,
      sves: option.bonusSVEs ? prev.sves + option.bonusSVEs : prev.sves
    }));

    // Add new history entry at the top
    const newEntry = {
      id: `hist-${Date.now()}`,
      date: 'Just now',
      requiredGems: option.requiredGems,
      receiveVEs: option.receiveVEs,
      title: option.title,
      status: 'completed',
      statusLabel: 'Completed',
      txRef: `VLP-${Math.floor(Math.random() * 90000) + 10000}`
    };
    setHistory(prev => [newEntry, ...prev]);

    // Trigger balance animation
    setBalanceDelta(prev => prev + 1);

    // Close confirmation modal, open success modal
    setSelectedOption(null);
    setSuccessDetails(option);
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setSuccessDetails(null);
  }, []);

  const handleCloseConfirmation = useCallback(() => {
    setSelectedOption(null);
  }, []);

  const handleCloseInsufficient = useCallback(() => {
    setInsufficientOption(null);
  }, []);

  // ── Demo mode controls ────────────────────────────────────────
  const handleSetDemoMode = useCallback((mode) => {
    setDemoMode(mode);
  }, []);

  const handleResetDemo = useCallback(() => {
    setDemoMode('normal');
  }, []);

  // ── Retry Handler ─────────────────────────────────────────────
  const handleRetry = useCallback(() => {
    setDemoMode('normal');
  }, []);

  // ── Determine what catalog to display based on demo mode ───────
  const visibleOptions = demoMode === 'empty' ? [] : conversionOptions;

  return (
    <div className={styles.page}>
      {/* ── Sticky Navbar ── */}
      <Navbar balances={balances} onOpenEarnModal={() => handleOpenEarnModal(null)} />

      {/* ── Main Content ── */}
      <main className={styles.mainContent}>

        {/* ── Hero Section ── */}
        <ExchangeHero onScrollToConversions={scrollToConversions} />

        {/* ── Separator ── */}
        <div className={styles.sectionSep}></div>

        {/* ── Balance Overview ── */}
        <BalanceOverview
          balances={balances}
          onOpenEarnModal={() => handleOpenEarnModal(null)}
          recentDelta={balanceDelta}
        />

        {/* ── How It Works ── */}
        <div className={styles.sectionSep}></div>
        <HowExchangeWorks />

        {/* ── Exchange Catalog Section (with demo state handling) ── */}
        <div className={styles.sectionSep}></div>
        <div ref={conversionsRef}>
          {demoMode === 'loading' && <ExchangeLoader />}

          {demoMode === 'error' && (
            <div className={styles.errorState}>
              <div className={styles.errorCard}>
                <AlertCircle size={36} className={styles.errorIcon} />
                <h3 className={styles.errorTitle}>Unable to Load Conversions</h3>
                <p className={styles.errorDesc}>
                  We couldn't fetch the latest exchange packages. Please check your connection and try again.
                </p>
                <button
                  type="button"
                  className={styles.retryBtn}
                  onClick={handleRetry}
                >
                  <RefreshCw size={16} />
                  <span>Retry</span>
                </button>
              </div>
            </div>
          )}

          {(demoMode === 'normal' || demoMode === 'empty') && (
            <ExchangeGrid
              options={visibleOptions}
              userGems={balances.gems}
              onSelectConversion={handleSelectConversion}
              onOpenEarnModal={handleOpenEarnModal}
            />
          )}
        </div>

        {/* ── Exchange History ── */}
        <div className={styles.sectionSep}></div>
        <div ref={historyRef}>
          <ExchangeHistory history={history} />
        </div>

        {/* ── Rules & FAQ ── */}
        <div className={styles.sectionSep}></div>
        <ExchangeRules />
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className="container-custom">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <img
                src="/images/single_VEs.png"
                alt="VELOOP Logo"
                className={styles.footerLogo}
              />
              <div>
                <span className={styles.footerBrandName}>VELOOP Rewards</span>
                <span className={styles.footerBrandTag}>Official Exchange Center</span>
              </div>
            </div>
            <div className={styles.footerNote}>
              <p>VEs and Gems are virtual reward currencies. Not financial instruments.</p>
              <p>© 2026 VELOOP Rewards. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Demo Controls (always visible) ── */}
      <DemoControls
        demoMode={demoMode}
        onSetMode={handleSetDemoMode}
        onReset={handleResetDemo}
      />

      {/* ── Modal Layer ── */}
      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          userBalances={balances}
          onClose={handleCloseConfirmation}
          onConfirm={handleConfirmConversion}
        />
      )}

      {successDetails && (
        <ConversionSuccess
          conversionDetails={successDetails}
          onClose={handleCloseSuccess}
          onViewHistory={scrollToHistory}
        />
      )}

      {insufficientOption !== null && (
        <InsufficientGemsModal
          targetOption={insufficientOption}
          userGems={balances.gems}
          onClose={handleCloseInsufficient}
          onSimulateEarn={handleSimulateEarn}
        />
      )}
    </div>
  );
}
