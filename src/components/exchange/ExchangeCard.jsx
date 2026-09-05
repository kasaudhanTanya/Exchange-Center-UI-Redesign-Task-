import {
  ArrowRight,
  Gem
} from "lucide-react";

export default function ExchangeCard({
  option,
  onConvert
}) {

  const canConvert = true;

  return (

    <article className="exchange-card">

      <div className="gem-box">
        <Gem size={28} />
      </div>

      <span className="tag">
        REWARD CONVERSION
      </span>

      <h3>
        {option.title}
      </h3>

      <p>
        {option.description}
      </p>


      <div className="conversion-flow">

        <div>

          <small>
            Required Gems
          </small>

          <strong>
            {option.requiredGems}
          </strong>

        </div>


        <ArrowRight size={22} />


        <div>

          <small>
            You receive
          </small>

          <strong>
            {option.receiveVEs} VEs
          </strong>

        </div>

      </div>


      <button
        disabled={!canConvert}
        onClick={() => onConvert(option)}
      >
        Convert Rewards
      </button>

    </article>
  );
}