import { ArrowDownUp, Gem } from "lucide-react";

export default function ExchangeHero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="eyebrow">
          VELOOP REWARDS
        </span>

        <h1>
          Exchange Center
        </h1>

        <p>
          Turn your earned Gems into VEs
          and continue your reward journey.
        </p>

      </div>

      <div className="hero-visual">

        <div className="hero-icon">
          <Gem size={35} />
        </div>

        <ArrowDownUp size={25} />

        <div className="ve-icon">
          VE
        </div>

      </div>

    </section>
  );
}