import { ArrowRight } from "lucide-react";
import singleGem from "../../assets/single_gem.jpeg";
import singleVE from "../../assets/single_VEs.jpeg";
import multiGems from "../../assets/multi_gems.jpeg";
import multiVE from "../../assets/multi_VEs.jpeg";
import singleSVE from "../../assets/single_SVEs.jpeg";
import multiSVE from "../../assets/multi_SVEs.jpeg";
import singleToken from "../../assets/Signle_Token.jpeg";
import multiToken from "../../assets/multi_token.jpeg";
import spinImage from "../../assets/signle_spin.jpeg";
import tapCoin from "../../assets/tap_coin.jpeg";
import gameCoin from "../../assets/game_coin.jpeg";
import styles from "./ExchangeCard.module.css";

const ART_BY_CONVERSION = {
  "exchange-01": [singleGem, singleVE],
  "exchange-02": [multiGems, multiVE],
  "exchange-03": [singleSVE, multiSVE],
  "exchange-04": [singleToken, multiToken],
  "exchange-05": [spinImage, tapCoin],
  "exchange-06": [gameCoin, singleGem],
};

export default function RewardArtwork({ conversionId }) {
  const [sourceImage, targetImage] = ART_BY_CONVERSION[conversionId] || [singleGem, singleVE];

  return (
    <div className={styles.assetPair} aria-hidden="true">
      <div className={styles.assetWrap}>
        <img src={sourceImage} alt="" className={styles.assetImage} />
      </div>
      <ArrowRight size={14} className={styles.assetArrow} />
      <div className={styles.assetWrap}>
        <img src={targetImage} alt="" className={styles.assetImage} />
      </div>
    </div>
  );
}
