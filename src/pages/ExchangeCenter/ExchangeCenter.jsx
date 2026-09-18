import { useEffect, useState } from "react";
import ExchangeHero from "../../components/exchange/ExchangeHero.jsx";
import BalanceOverview from "../../components/exchange/BalanceOverview.jsx";
import HowExchangeWorks from "../../components/exchange/HowExchangeWorks.jsx";
import ExchangeCard from "../../components/exchange/ExchangeCard.jsx";
import ExchangeModal from "../../components/exchange/ExchangeModal.jsx";
import ExchangeHistory from "../../components/exchange/ExchangeHistory.jsx";
import ExchangeRules from "../../components/exchange/ExchangeRules.jsx";
import ExchangeLoader from "../../components/exchange/ExchangeLoader.jsx";
import EmptyState from "../../components/exchange/EmptyState.jsx";
import ErrorState from "../../components/exchange/ErrorState.jsx";
import {
  userBalance as initialBalance,
  exchangeOptions,
  exchangeHistory as initialHistory,
} from "../../data/exchangeData.js";
import styles from "./ExchangeCenter.module.css";

export default function ExchangeCenter() {
  const [loadStatus, setLoadStatus] = useState("loading"); // loading | loaded | error
  const [options, setOptions] = useState([]);
  const [balance, setBalance] = useState(initialBalance);
  const [history, setHistory] = useState(initialHistory);

  const [activeOption, setActiveOption] = useState(null);
  const [modalPhase, setModalPhase] = useState(null); // confirm | processing | success

  const [activeTab, setActiveTab] = useState("conversions"); // conversions | history | info

  useEffect(() => {
    const timer = setTimeout(() => {
      setOptions(exchangeOptions);
      setLoadStatus("loaded");
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  function handleRetry() {
    setLoadStatus("loading");
    setTimeout(() => {
      setOptions(exchangeOptions);
      setLoadStatus("loaded");
    }, 800);
  }

  function openConfirm(option) {
    setActiveOption(option);
    setModalPhase("confirm");
  }

  function closeModal() {
    setActiveOption(null);
    setModalPhase(null);
  }

  function handleConfirm() {
    if (!activeOption || modalPhase === "processing") return;
    setModalPhase("processing");
    setTimeout(() => {
      setBalance((prev) => ({
        gems: prev.gems - activeOption.requiredGems,
        ves: prev.ves + activeOption.receiveVEs,
      }));
      setHistory((prev) => [
        {
          id: `hist-${Date.now()}`,
          date: "Today",
          requiredGems: activeOption.requiredGems,
          receiveVEs: activeOption.receiveVEs,
          status: "completed",
        },
        ...prev,
      ]);
      setModalPhase("success");
    }, 1400);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.overviewGrid}>
          <ExchangeHero />
          <BalanceOverview gems={balance.gems} ves={balance.ves} />
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabsList}>
            <button
              className={`${styles.tab} ${activeTab === "conversions" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("conversions")}
            >
              Available Conversions
            </button>
            <button
              className={`${styles.tab} ${activeTab === "history" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("history")}
            >
              Exchange History
            </button>
            <button
              className={`${styles.tab} ${activeTab === "info" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("info")}
            >
              How it Works & Rules
            </button>
          </div>
        </div>

        {activeTab === "conversions" && (
          <section className={styles.tabContent} aria-labelledby="conversions-heading">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Exchange menu</p>
                <h2 id="conversions-heading">Choose how to convert</h2>
                <p>Pick an eligible reward source to turn your Gems into VEs.</p>
              </div>
              <span className={styles.optionCount}>{options.length || 6} options</span>
            </div>

            {loadStatus === "loading" && <ExchangeLoader />}

            {loadStatus === "error" && <ErrorState onRetry={handleRetry} />}

            {loadStatus === "loaded" && options.length === 0 && <EmptyState />}

            {loadStatus === "loaded" && options.length > 0 && (
              <div className={styles.grid}>
                {options.map((option) => (
                  <ExchangeCard key={option.id} option={option} userGems={balance.gems} onConvert={openConfirm} />
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "history" && (
          <section className={styles.tabContent}>
            <ExchangeHistory history={history} />
          </section>
        )}

        {activeTab === "info" && (
          <section className={`${styles.tabContent} ${styles.infoTab}`}>
            <HowExchangeWorks />
            <ExchangeRules />
          </section>
        )}
      </div>

      {modalPhase && (
        <ExchangeModal
          option={activeOption}
          phase={modalPhase}
          balance={balance}
          onCancel={closeModal}
          onConfirm={handleConfirm}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
