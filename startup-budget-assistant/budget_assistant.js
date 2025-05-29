// Step 1: Create and Initialize Variables
let startupName = "Startup Budget Assistant";
let initialCapital = 100000; // Initial capital in dollars
let monthlyRevenue = 20000; // Monthly revenue in dollars
let monthlyExpenses = 15000; // Monthly expenses in dollars

// Step 2: Calculate Business Metrics
let netCashFlow = monthlyRevenue - monthlyExpenses; // Monthly net cash flow
let currentBalance = initialCapital + netCashFlow; // Current balance after one month
let isProfitable = netCashFlow > 0; // Check if the business is profitable

// Step 3: Print to Console
console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + (isProfitable ? "Profitable" : "Not Profitable"));