export const mockUserData = {
  balance: 150.00,
  limits: {
    weeklyRemaining: 100.00,
    categories: {
      food: 2500,
      shopping: 1500,
      bills: 3000,
      others: 1000
    }
  },
  goals: {
    camera: {
      target: 30000,
      saved: 24000,
      progress: 80
    }
  },
  history: [
    { 
      date: "10/10/2025", 
      type: "Grocery", 
      amount: -30,
      description: "Grocery shopping" 
    },
    { 
      date: "10/10/1999", 
      type: "Salary", 
      amount: +300,
      description: "Monthly salary" 
    },
    { 
      date: "09/10/1999", 
      type: "Expenses", 
      amount: -150,
      description: "Utility bills" 
    },
    { 
      date: "08/10/1999", 
      type: "Received", 
      amount: +500,
      description: "Freelance payment" 
    },
    { 
      date: "07/10/1999", 
      type: "Sent", 
      amount: -200,
      description: "Money transfer" 
    },
    { 
      date: "06/10/1999", 
      type: "Grocery", 
      amount: -75,
      description: "Weekly groceries" 
    },
    { 
      date: "05/10/1999", 
      type: "Received", 
      amount: +150,
      description: "Bonus" 
    }
  ]
};