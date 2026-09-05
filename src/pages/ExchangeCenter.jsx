import { useState } from "react";

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

    <main className="exchange-page">

      <div className="container">

        {/* HERO */}

        <ExchangeHero />


        {/* BALANCE */}

        <BalanceOverview
          gems={gems}
          ves={ves}
        />


        {/* CONVERSION SECTION */}

        <section className="conversion-section">

          <div className="section-title">

            <div>

              <small>
                REWARD OPPORTUNITIES
              </small>

              <h2>
                Available Conversions
              </h2>

            </div>

            <p>
              Select a conversion,
              review it, then confirm.
            </p>

          </div>


          <div className="conversion-grid">

            {exchangeOptions.map(
              option => (

                <ExchangeCard

                  key={option.id}

                  option={option}

                  onConvert={
                    handleConvert
                  }

                />

              )
            )}

          </div>

        </section>


        {/* HOW IT WORKS */}

        <HowExchangeWorks />


        {/* HISTORY */}

        <ExchangeHistory
          history={history}
        />


        {/* RULES */}

        <ExchangeRules />

      </div>


      {/* CONFIRMATION MODAL */}

      <ExchangeModal

        option={selectedOption}

        gems={gems}

        ves={ves}

        loading={loading}

        onCancel={() =>
          !loading &&
          setSelectedOption(null)
        }

        onConfirm={
          handleConfirm
        }

      />


      {/* SUCCESS MODAL */}

      <ConversionSuccess

        option={successOption}

        onContinue={() =>
          setSuccessOption(null)
        }

      />

    </main>
  );
}