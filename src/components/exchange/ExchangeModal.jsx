export default function ExchangeModal({
  option,
  gems,
  ves,
  loading,
  onCancel,
  onConfirm
}) {

  if (!option) {
    return null;
  }

  return (

    <div className="overlay">

      <div className="modal-box">

        <button
          className="close-button"
          onClick={onCancel}
          disabled={loading}
        >
          ×
        </button>


        <h2>
          Confirm Conversion
        </h2>


        <div className="confirm-box">

          <strong>
            💎 {option.requiredGems} Gems
          </strong>

          <span>
            ↓
          </span>

          <strong>
            🪙 {option.receiveVEs} VEs
          </strong>

        </div>


        <div className="after-row">

          <span>
            Gems after conversion
          </span>

          <strong>
            {gems - option.requiredGems}
          </strong>

        </div>


        <div className="after-row">

          <span>
            VEs after conversion
          </span>

          <strong>
            {(ves + option.receiveVEs).toLocaleString()}
          </strong>

        </div>


        <div className="modal-buttons">

          <button
            className="cancel-button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            className="confirm-button"
            onClick={onConfirm}
            disabled={loading}
          >

            {loading
              ? "Converting..."
              : "Confirm Conversion"
            }

          </button>

        </div>

      </div>

    </div>
  );
}