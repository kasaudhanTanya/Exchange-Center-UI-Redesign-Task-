export const exchangeOptions = [
  {
    id: 1,
    title: "Daily Gem Conversion",
    requiredGems: 28,
    receiveVEs: 151,
    description: "Convert your earned Gems into VEs."
  },

  {
    id: 2,
    title: "Reward Boost",
    requiredGems: 39,
    receiveVEs: 168,
    description: "Use eligible Gems for a larger VE reward."
  },

  {
    id: 3,
    title: "Quick Reward",
    requiredGems: 25,
    receiveVEs: 120,
    description: "A smaller conversion for your reward balance."
  }
];

export const initialHistory = [
  {
    id: 1,
    date: "Today",
    gems: 28,
    ves: 151,
    status: "Completed"
  },

  {
    id: 2,
    date: "Yesterday",
    gems: 39,
    ves: 168,
    status: "Processing"
  },

  {
    id: 3,
    date: "18 Aug",
    gems: 25,
    ves: 120,
    status: "Failed"
  }
];