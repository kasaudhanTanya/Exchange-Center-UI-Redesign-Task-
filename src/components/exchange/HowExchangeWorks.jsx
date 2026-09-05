export default function HowExchangeWorks() {

  const steps = [
    "Earn Gems",
    "Choose Conversion",
    "Review Exchange",
    "Confirm",
    "Receive VEs"
  ];

  return (

    <section className="info-section">

      <h2>
        How Exchange Works
      </h2>


      <div className="steps">

        {steps.map((step, index) => (

          <div
            className="step"
            key={step}
          >

            <span>
              0{index + 1}
            </span>

            <strong>
              {step}
            </strong>

          </div>

        ))}

      </div>

    </section>
  );
}