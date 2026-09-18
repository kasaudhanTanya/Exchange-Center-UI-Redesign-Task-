import { useState } from "react";
import styles from "./ExchangeCenter.module.css";

import ExchangeHero
  from "../components/exchange/ExchangeHero";

import BalanceOverview
  from "../components/exchange/BalanceOverview";

import ExchangeCard
  from "../components/exchange/ExchangeCard";

import ExchangeModal
  from "../components/exchange/ExchangeModal";

import ConversionSuccess
  from "../components/exchange/ConversionSuccess";

import ExchangeHistory
  from "../components/exchange/ExchangeHistory";

import ExchangeRules
  from "../components/exchange/ExchangeRules";

import HowExchangeWorks
  from "../components/exchange/HowExchangeWorks";

import {
  exchangeOptions,
  initialHistory
} from "../data/exchangeData";


export default function ExchangeCenter() {

  // -----------------------
  // BALANCE
  // -----------------------

  const [gems, setGems] = useState(420);

  const [ves, setVes] = useState(2850);


  // -----------------------
  // SELECTED CONVERSION
  // -----------------------

  const [selectedOption, setSelectedOption] =
    useState(null);


  // -----------------------
  // LOADING
  // -----------------------

  const [loading, setLoading] =
    useState(false);


  // -----------------------
  // SUCCESS
  // -----------------------

  const [successOption, setSuccessOption] =
    useState(null);


  // -----------------------
  // HISTORY
  // -----------------------

  const [history, setHistory] =
    useState(initialHistory);


  // -----------------------
  // OPEN MODAL
  // -----------------------

  const handleConvert = (option) => {

    if (gems < option.requiredGems) {

      alert("You don't have enough Gems.");

      return;
    }

    setSelectedOption(option);
  };


  // -----------------------
  // CONFIRM CONVERSION
  // -----------------------

  const handleConfirm = () => {

    if (!selectedOption) {
      return;
    }


    if (
      gems <
      selectedOption.requiredGems
    ) {

      alert("Insufficient Gems.");

      return;
    }


    setLoading(true);


    // Simulating API request

    setTimeout(() => {

      // Update Gems

      setGems(
        current =>
          current -
          selectedOption.requiredGems
      );


      // Update VEs

      setVes(
        current =>
          current +
          selectedOption.receiveVEs
      );


      // Add history

      const newHistory = {

        id: Date.now(),

        date: "Just now",

        gems:
          selectedOption.requiredGems,

        ves:
          selectedOption.receiveVEs,

        status: "Completed"
      };


      setHistory(
        current => [
          newHistory,
          ...current
        ]
      );


      // Stop loading

      setLoading(false);


      // Close confirmation

      setSelectedOption(null);


      // Open success

      setSuccessOption(
        selectedOption
      );


    }, 1000);
  };


  return (
    <div className={styles.page}>
      
      {/* HERO */}
      <ExchangeHero />

      <div className={styles.layoutGrid}>
        
        {/* MAIN COLUMN */}
        <div className={styles.mainColumn}>
          
          <BalanceOverview gems={gems} ves={ves} />

          <section>
            <div className={styles.sectionTitle}>
              <small>Reward Opportunities</small>
              <h2>Available Conversions</h2>
              <p>Select a conversion, review it, then confirm.</p>
            </div>

            <div className={styles.conversionGrid}>
              {exchangeOptions.map((option) => (
                <ExchangeCard
                  key={option.id}
                  option={option}
                  onConvert={handleConvert}
                />
              ))}
            </div>
          </section>

        </div>

        {/* SIDE COLUMN */}
        <div className={styles.sideColumn}>
          <HowExchangeWorks />
          <ExchangeRules />
          <ExchangeHistory history={history} />
        </div>

      </div>

      {/* CONFIRMATION MODAL */}
      <ExchangeModal
        option={selectedOption}
        gems={gems}
        ves={ves}
        loading={loading}
        onCancel={() => !loading && setSelectedOption(null)}
        onConfirm={handleConfirm}
      />

      {/* SUCCESS MODAL */}
      <ConversionSuccess
        option={successOption}
        onContinue={() => setSuccessOption(null)}
      />
    </div>
  );
}