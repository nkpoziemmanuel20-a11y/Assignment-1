const bankUsers = [
  {
    accountName: "John Doe",
    totalBalance: 850000,
    expenditure: [
      {
        date: "2026-08-01",
        description: "Electricity Bill",
        amount: 25000
      },
      {
        date: "2026-08-02",
        description: "Supermarket Shopping",
        amount: 18000
      },
      {
        date: "2026-08-03",
        description: "Netflix Subscription",
        amount: 5500
      }
    ]
  },

  {
    accountName: "Sarah Johnson",
    totalBalance: 1250000,
    expenditure: [
      {
        date: "2026-07-30",
        description: "Fuel",
        amount: 30000
      },
      {
        date: "2026-08-01",
        description: "Restaurant",
        amount: 12000
      },
      {
        date: "2026-08-03",
        description: "Online Shopping",
        amount: 45000
      }
    ]
  },

  {
    accountName: "Michael Brown",
    totalBalance: 475000,
    expenditure: [
      {
        date: "2026-08-01",
        description: "Internet Subscription",
        amount: 12000
      },
      {
        date: "2026-08-02",
        description: "Transportation",
        amount: 8000
      },
      {
        date: "2026-08-03",
        description: "Gym Membership",
        amount: 15000
      }
    ]
  }
];

// First user's name
console.log(bankUsers[0].accountName);

// Second user's balance
console.log(bankUsers[1].totalBalance);

// Third user's second expenditure
console.log(bankUsers[2].expenditure[1]);

// Amount spent on the first expenditure of the first user
console.log(bankUsers[0].expenditure[0].amount);