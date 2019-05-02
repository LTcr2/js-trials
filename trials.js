// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
  ["home", "510-867-5309"],
  ["mobile","415-555-1212"],
  ["business","415-123-4567"]
  ])

// Add some phone numbers to our map

// ///////////////////////////////////////////////////////
// Create User Info Display:a

// Add function to print account information 

"use strict";

function businessInfo(accountHolder, accountNumber, businessName) {
  console.log('Account Holder Name:', accountHolder);
  console.log('Account Holder Number:', accountNumber);
  console.log('Business Name:', businessName);
}

// Add function to print all addresses, including a header



// Add function to print phone types and numbers

function printNumbers() {
  
  for (let [type, number] of phoneNumbers) {
    console.log("Phone Numbers:", phoneNumbers);
  }
}
// ///////////////////////////////////////////////////////
// Transactions:
let trans = ([
    ['May-2', -500],
    ['May-13', +1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', +2200]
]);
// Create an empty map of transactions
const transactions = new Map()
// Add function to add transactions
function addTransaction(date, amount) {
  transactions.set(date, amount)
  
  console.log(transactions);
  return transactions;
};

// Use the function to add transactions
for (let [item1, item2] of trans) {
  addTransaction(item1, item2);
};

// Add function to show balance status
function showBalanceStatus(balance) {
  const over = "YOU ARE OVERDRAWN";
  const good = "Warning";
  const okay = "Thank you";
  if(balance < 0) {
    console.log(over);
  }
  else if(balance < 20) {
    console.log(good);
  }
  else {
    console.log(okay);
  }
}

// Add function to show transactions
function showTransactions(transactions, balance){
console.log(balance);
for (let transaction of transactions) {
  console.log(transaction[0]);
  if (transaction[1] <0) {
    console.log("withdrawl")
  }
  else {
    console.log("deposit")
  }
 console.log(transaction[1]);
 console.log(`BALANCE: ${balance}`);
 // balance += transaction[1]

 }
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = new Map([
  ['Account Holder', accountHolder],
  ['Account Number', accountNumber],
  ['Business Name', businessName],
  ['Addresses', addresses],
  ['Phone Numbers', phoneNumbers],
  ['Transactions', transactions],
  ['Starting Balance', 500]
]);

// Function to add customer attributes
function addProperties(melon = "Canteloupe", numPets = 0) {
  customer.set("Melon", melon);
  customer.set("Pets", numPets);

}

// Add attributes for this user
addProperties('Casaba', 2)
for (let [k,v] of customer) {
console.log(`${k} is ${v}`)
}
// ///////////////////////////////////////////////////////
// Getting a Business Loan
function loan(income, customer) {
  let interestRate = .04
  let special = false 
  if ((customer["Melon"] === 'Casaba') || (customer["Pets"] > 5)) {
    special = true
  }
  if (income < 100000 && special === false){
    interestRate = .08
  }
  if (income < 100000 && special === true){
    interestRate = .05   
  }
  if (200000 > income > 100000 && special === false){
    interestRate = .07   
  }
  if (200000 > income > 100000 && special === true){
    interestRate = .04   
  }
  customer.set("special", special);
  // Function to return loan rate
  return interestRate
}


// ///////////////////////////////////////////////////////
// Account Report
function printReport(customer) {
  // const myIncome = prompt("What's your annual income?: ")
  customer["income"] === 140000
  if (customer['special'] === true) {
    console.log("Congratulations on being a preferred customer!")  
  }
  
  
}


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




