export default function ExchangeRules() {

  const rules = [
    "Only eligible Gems can be exchanged.",
    "Exchange rates are predefined by VELOOP Rewards.",
    "Available conversions may vary.",
    "A successful conversion cannot be duplicated.",
    "Your balance is updated after successful conversion.",
    "Platform rules apply."
  ];

  return (

    <section className="info-section">

      <h2>
        Exchange Rules
      </h2>

      <ul>

        {rules.map((rule, index) => (

          <li key={index}>
            {rule}
          </li>

        ))}

      </ul>

    </section>
  );
}