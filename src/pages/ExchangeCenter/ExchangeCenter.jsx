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
        <ExchangeHero />
        <BalanceOverview gems={balance.gems} ves={balance.ves} />

        <section className={styles.conversionsSection} aria-labelledby="conversions-heading">
          <h2 id="conversions-heading" className={styles.conversionsHeading}>
            Available conversions
          </h2>

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

        <HowExchangeWorks />
        <ExchangeHistory history={history} />
        <ExchangeRules />
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
