// Centralized Data Architecture for VELOOP Rewards Exchange Center
// As specified in PDF Section 35: structured data file to enable clean frontend logic & future backend APIs.

export const initialUserBalances = {
  gems: 420,
  ves: 3850,
  sves: 125,
  tokens: 3,
  userName: "Alex Mercer",
  userTier: "Gold Earner",
  avatarUrl: "/images/tap_coin.jpeg"
};

export const conversionOptions = [
  {
    id: "conv-01",
    title: "Daily Quick Conversion",
    rewardType: "Daily Gem Conversion",
    category: "Daily",
    badge: "Popular Daily",
    requiredGems: 28,
    receiveVEs: 151,
    multiplier: "5.39x",
    explanation: "Convert your earned Gems into VEs instantly with zero waiting time.",
    image: "/images/single_gem.jpeg",
    outputImage: "/images/single_VEs.jpeg",
    bonusText: null,
    cooldown: "Available daily"
  },
  {
    id: "conv-02",
    title: "Task Explorer Pack",
    rewardType: "Task Quest Conversion",
    category: "Tasks",
    badge: "Standard Tier",
    requiredGems: 39,
    receiveVEs: 168,
    multiplier: "4.31x",
    explanation: "Convert your task rewards into official VELOOP virtual currency.",
    image: "/images/game_coin.jpeg",
    outputImage: "/images/single_VEs.jpeg",
    bonusText: "+5% Vault XP",
    cooldown: "Instant credit"
  },
  {
    id: "conv-03",
    title: "Active Earner Vault",
    rewardType: "Vault Bundle",
    category: "Vault",
    badge: "Best Value",
    requiredGems: 75,
    receiveVEs: 360,
    multiplier: "4.80x",
    explanation: "Bundle your accumulated Gems for higher VE reward efficiency.",
    image: "/images/multi_gems.jpeg",
    outputImage: "/images/multi_VEs.jpeg",
    bonusText: "+10 SVEs Bonus",
    bonusSVEs: 10,
    cooldown: "No limit"
  },
  {
    id: "conv-04",
    title: "Gamer's Spin Bundle",
    rewardType: "Gamer Special",
    category: "Gaming",
    badge: "Includes Spin Ticket",
    requiredGems: 120,
    receiveVEs: 650,
    multiplier: "5.42x",
    explanation: "Includes a Lucky Spin voucher to spin and win extra rewards.",
    image: "/images/signle_spin.jpeg",
    outputImage: "/images/multi_VEs.jpeg",
    bonusText: "+1 Spin Voucher",
    cooldown: "Weekly special"
  },
  {
    id: "conv-05",
    title: "High Roller Token Vault",
    rewardType: "VIP Milestone",
    category: "VIP",
    badge: "Golden Token",
    requiredGems: 250,
    receiveVEs: 1420,
    multiplier: "5.68x",
    explanation: "Premium conversion bundle for high-activity collectors.",
    image: "/images/Signle_Token.jpeg",
    outputImage: "/images/multi_VEs.jpeg",
    bonusText: "+1 Golden Token",
    cooldown: "VIP tier"
  },
  {
    id: "conv-06",
    title: "Grand Master Vault",
    rewardType: "Elite Tier Vault",
    category: "Elite",
    badge: "Maximum Multiplier",
    requiredGems: 500, // Demonstrates Insufficient Gems state when user balance is 420
    receiveVEs: 3100,
    multiplier: "6.20x",
    explanation: "Our highest reward vault package with maximum VE output rate.",
    image: "/images/tap_coin.jpeg",
    outputImage: "/images/multi_VEs.jpeg",
    bonusText: "+50 SVEs & Elite Badge",
    bonusSVEs: 50,
    cooldown: "Milestone unlocked"
  }
];

export const initialHistory = [
  {
    id: "hist-01",
    date: "Today, 11:42 AM",
    requiredGems: 28,
    receiveVEs: 151,
    title: "Daily Gem Conversion",
    status: "completed", // 'completed', 'processing', 'failed'
    statusLabel: "Completed",
    txRef: "VLP-88419"
  },
  {
    id: "hist-02",
    date: "Yesterday, 04:15 PM",
    requiredGems: 39,
    receiveVEs: 168,
    title: "Task Explorer Pack",
    status: "completed",
    statusLabel: "Completed",
    txRef: "VLP-88102"
  },
  {
    id: "hist-03",
    date: "18 Aug 2026, 02:30 PM",
    requiredGems: 25,
    receiveVEs: 120,
    title: "Starter Conversion",
    status: "completed",
    statusLabel: "Completed",
    txRef: "VLP-87421"
  }
];

export const exchangeRules = [
  {
    id: "rule-1",
    title: "Eligible Gems Only",
    description: "Only verified Gems earned through authentic activities, ads, and quests can be converted."
  },
  {
    id: "rule-2",
    title: "Predefined Exchange Rates",
    description: "Exchange rates are fixed by VELOOP Rewards. There are zero slippage or hidden processing fees."
  },
  {
    id: "rule-3",
    title: "Package Availability",
    description: "Available conversions and bonus allocations may vary according to user tier and seasonal campaigns."
  },
  {
    id: "rule-4",
    title: "No Duplicate Execution",
    description: "Every conversion is secured by unique session tokens to prevent accidental double-clicks."
  },
  {
    id: "rule-5",
    title: "Instant Balance Credit",
    description: "Converted VEs are credited immediately to your virtual reward wallet upon confirmation."
  },
  {
    id: "rule-6",
    title: "Standard Platform Terms",
    description: "VEs and SVEs are virtual reward currencies governed strictly by VELOOP Rewards platform rules."
  }
];

export const howExchangeWorks = [
  {
    step: "01",
    title: "Earn Gems",
    description: "Complete tasks, play games, and watch ads to build your Gem reserve."
  },
  {
    step: "02",
    title: "Choose Conversion",
    description: "Select an eligible reward package based on your available Gems."
  },
  {
    step: "03",
    title: "Review Exchange",
    description: "Inspect the exact VE return and check your post-conversion balance."
  },
  {
    step: "04",
    title: "Confirm",
    description: "Click confirm with zero gas or trading fees; anti-duplicate lock protects your action."
  },
  {
    step: "05",
    title: "Receive VEs",
    description: "VEs land in your balance instantly, ready for gift cards, cashouts, or tier upgrades."
  }
];

export const earnMoreOptions = [
  {
    id: "earn-ads",
    title: "Watch Sponsored Ads",
    reward: "+15 - 30 Gems",
    time: "30s each",
    icon: "play-circle",
    tag: "High Yield"
  },
  {
    id: "earn-tap",
    title: "Daily Tap & Quests",
    reward: "+50 Gems",
    time: "Instant",
    icon: "zap",
    tag: "Daily Streak"
  },
  {
    id: "earn-games",
    title: "Play Partner Games",
    reward: "+80 - 200 Gems",
    time: "5-10 mins",
    icon: "gamepad-2",
    tag: "Fun"
  },
  {
    id: "earn-survey",
    title: "Complete Quick Polls",
    reward: "+40 Gems",
    time: "3 mins",
    icon: "check-square",
    tag: "Fast"
  }
];

export const infoDefinitions = {
  gems: {
    title: "What are Gems?",
    content: "Gems are reward credits earned through eligible activities on VELOOP Rewards (watching ads, completing quests, gaming, and daily check-ins). Gems are exclusively converted into VEs."
  },
  ves: {
    title: "What are VEs?",
    content: "VEs are VELOOP Rewards' primary virtual reward currency. They can be redeemed for gift vouchers, direct cashouts (PayPal/Paytm), or exclusive store perks."
  },
  sves: {
    title: "What are SVEs?",
    content: "SVEs (Silver VEs) are bonus reward tokens granted during high-tier conversion vault packs. They unlock VIP multipliers and spin wheel bonuses."
  },
  tokens: {
    title: "What are Golden Tokens?",
    content: "Golden Tokens are collectible pass items used to access elite conversion tiers and raffle draws."
  },
  exchangeRate: {
    title: "Exchange Rate Policy",
    content: "Conversion rates are predefined by VELOOP Rewards. This is strictly a reward conversion system and NOT a financial exchange or volatile cryptocurrency market."
  },
  rules: {
    title: "Exchange Rules",
    content: "Conversions are final and irreversible. Anti-duplicate safeguards ensure each request is processed exactly once."
  }
};
