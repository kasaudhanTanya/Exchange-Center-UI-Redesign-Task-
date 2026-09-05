import {
  Gem,
  Coins,
  Info
} from "lucide-react";

export default function BalanceOverview({
  gems,
  ves
}) {

  return (

    <section className="balance-grid">

      {/* Gems */}

      <div className="balance-card">

        <div className="balance-icon">
          <Gem size={25} />
        </div>

        <div>

          <small>
            Available Gems
          </small>

          <h2>
            {gems.toLocaleString()}
          </h2>

        </div>

        <Info
          size={18}
          title="Available Gems"
        />

      </div>


      {/* VEs */}

      <div className="balance-card">

        <div className="balance-icon">
          <Coins size={25} />
        </div>

        <div>

          <small>
            Available VEs
          </small>

          <h2>
            {ves.toLocaleString()} VEs
          </h2>

        </div>

        <Info
          size={18}
          title="Available VEs"
        />

      </div>

    </section>
  );
}