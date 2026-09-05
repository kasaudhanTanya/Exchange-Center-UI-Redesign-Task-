import { CheckCircle2 } from "lucide-react";

export default function ConversionSuccess({
  option,
  onContinue
}) {

  if (!option) {
    return null;
  }

  return (

    <div className="overlay">

      <div className="success-box">

        <CheckCircle2
          size={60}
          className="success-icon"
        />

        <h2>
          Conversion Complete
        </h2>

        <p>
          {option.requiredGems} Gems converted.
        </p>

        <strong>
          +{option.receiveVEs} VEs added to your balance.
        </strong>

        <button
          onClick={onContinue}
        >
          Continue
        </button>

      </div>

    </div>
  );
}