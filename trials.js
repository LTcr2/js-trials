// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

// ///////////////////////////////////////////////////////
// Create User Info Display:

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
  phoneNumbers.set("home", "510-867-5309");
  phoneNumbers.set("mobile","415-555-1212");
  phoneNumbers.set("business","415-123-4567");
  console.log("Phone Numbers:", phoneNumbers);
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
// Add function to add transactions
function addTransaction() {
  const transactions = new Map([
    ['May-2', -500],
    ['May-13', +1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', +2200]
    ]);
  console.log(transactions);
  return transactions;
}


// Use the function to add transactions


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
 console.log(balance += transaction[1]);

 }
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




