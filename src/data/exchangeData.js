/**
 * Exchange Center — data layer
 *
 * NOTE ON VALUES: requiredGems for exchange-01 and exchange-02 are taken
 * from the reference screenshot (28 and 39 Gems). The receiveVEs figures
 * are placeholder/dummy values (a ~5.1x conversion rate) since the
 * reference screenshot did not expose the VE side of those two cards.
 * Replace `receiveVEs` (and add/remove entries) with the live values
 * from the current implementation before shipping.
 */

export const userBalance = {
  gems: 42,
  ves: 3850,
};

export const exchangeOptions = [
  {
    id: "exchange-01",
    type: "gem-to-ve",
    label: "Watch Ad Conversion",
    description: "Convert Gems earned from watching a rewarded ad into VEs.",
    requiredGems: 28,
    receiveVEs: 144,
    icon: "play-circle",
  },
  {
    id: "exchange-02",
    type: "gem-to-ve",
    label: "Watch Ad Conversion",
    description: "Convert Gems earned from watching a rewarded ad into VEs.",
    requiredGems: 39,
    receiveVEs: 201,
    icon: "play-circle",
  },
  {
    id: "exchange-03",
    type: "gem-to-ve",
    label: "Daily Bonus Conversion",
    description: "Turn your daily login bonus Gems into VEs.",
    requiredGems: 50,
    receiveVEs: 268,
    icon: "gift",
  },
  {
    id: "exchange-04",
    type: "gem-to-ve",
    label: "Survey Reward Conversion",
    description: "Convert Gems earned from completed surveys into VEs.",
    requiredGems: 65,
    receiveVEs: 350,
    icon: "clipboard-check",
  },
  {
    id: "exchange-05",
    type: "gem-to-ve",
    label: "Social Share Conversion",
    description: "Convert Gems earned from sharing and referrals into VEs.",
    requiredGems: 20,
    receiveVEs: 102,
    icon: "share",
  },
  {
    id: "exchange-06",
    type: "gem-to-ve",
    label: "App Task Conversion",
    description: "Convert Gems earned from completed app tasks into VEs.",
    requiredGems: 45,
    receiveVEs: 235,
    icon: "smartphone",
  },
];

export const exchangeHistory = [
  { id: "hist-01", date: "Today", requiredGems: 28, receiveVEs: 144, status: "completed" },
  { id: "hist-02", date: "Yesterday", requiredGems: 39, receiveVEs: 201, status: "completed" },
  { id: "hist-03", date: "18 Aug", requiredGems: 25, receiveVEs: 120, status: "completed" },
  { id: "hist-04", date: "14 Aug", requiredGems: 50, receiveVEs: 268, status: "failed" },
];

export const exchangeRules = [
  "Only eligible Gems can be exchanged for VEs.",
  "Exchange rates are predefined by VELoop Rewards and may be updated.",
  "Available conversions may vary based on your account activity.",
  "A successful conversion cannot be duplicated or reversed.",
  "Your balance updates automatically after a successful conversion.",
  "All platform terms and eligibility rules apply.",
];

export const howExchangeWorks = [
  { step: "01", title: "Earn Gems", description: "Complete tasks, watch ads, or take surveys to earn Gems." },
  { step: "02", title: "Choose a conversion", description: "Pick an available Gems-to-VEs conversion." },
  { step: "03", title: "Review the exchange", description: "Check exactly how many VEs you'll receive." },
  { step: "04", title: "Confirm", description: "Approve the conversion in one tap." },
  { step: "05", title: "Receive VEs", description: "Your VE balance updates right away." },
];

export const infoExplainers = {
  gems: {
    title: "What are Gems?",
    body: "Gems are reward credits you earn through eligible activities on VELoop Rewards, like watching ads, playing games, or completing tasks.",
  },
  ves: {
    title: "What are VEs?",
    body: "VEs are VELoop Rewards' virtual reward currency. You can use eligible VEs toward redemption options according to platform rules.",
  },
  rate: {
    title: "How is the conversion set?",
    body: "Each conversion has a fixed Gems-to-VEs value set by VELoop Rewards. The amount you'll receive is always shown before you confirm.",
  },
  rules: {
    title: "Exchange rules",
    body: "Conversions use your available Gems balance, follow predefined rates, and cannot be duplicated once completed.",
  },
};
