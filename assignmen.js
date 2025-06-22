//Assignment on if, if... else and if....else if statements

//1. Loan Eligibility Checker

let age = 18;
let income = 30000;
let creditscore = 700;

if (age >= 18 && 65 && income >= 30000 && creditscore >= 700) {
  console.log("Loan Approved");
} else if (age < 18 || age > 56 || income < 30000 || creditscore < 700) {
  console.log("Loan Denied");
} 



//2. Advanced Grading System
let score = 95;

if (score >= 95) {
  console.log("Grade A+");
} else if (score <= 94 && score >= 90) {
  console.log("Grade A");
} else if (score >= 85 && score <= 89) {
  console.log("Grade B+");
} else if (score >= 80 && score <= 84) {
  console.log("Grade B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade D");
} else if (score <= 60) {
  console.log("Grade F");
}

//3. Shipping Cost Calculator

let weight = 1;
let express = true;

if (weight <= 1) {
  console.log("Shipping fee is $5");
} else if (weight <= 5) {
  console.log("Shipping fee is $10");
} else if (weight >= 10) {
  console.log("Shipping fee is $15");
} else if (weight > 10) {
  console.log("Shipping fee is $20");
} else if (express) {
  console.log("Express Shipping fee is +$10");
}

//4. Progressive Tax Calculator

let incometax = 10001;

if (incometax <= 10000) {
  console.log("Tax rate is 0%");
} else if (incometax >= 10001 && incometax <= 50000) {
  console.log("Tax rate is 10%");
} else if (incometax >= 50001 && incometax <= 100000) {
  console.log("Tax rate is 20%");
} else if (incometax >= 100000) {
  console.log("Tax rate is 30%");
}

//5. User Role & Permission Checker

let userrole = "Admin";

if (userrole === "Admin") {
  console.log("Full Access");
} else if (userrole === "Editor") {
  console.log("Edit and View");
} else if (userrole === "Viewer") {
  console.log("View Only");
} else if (userrole === "Guest") {
  console.log("Limited Access");
} else {
  console.log("Access Denied");
}

//6. BMI Classification

let BMI = 19;

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("Overweight");
} else if (BMI >= 30) {
  console.log("Obese");
}

//7. Membership-Based Discount

let discount = "Gold members >$50";

if (discount === "Non members") {
  console.log("No Discount");
} else if (discount === "Silver members >$100") {
  console.log("10% Discount");
} else if (discount === "Gold members >$50") {
  console.log("20% Discount");
}

//8. Password Strength Checker

let character = "Favourite1";
let uppercase = "f";
let number = "2";
let specialcharacter = "t";

if (character.length > 8 && uppercase && number && specialcharacter) {
  console.log("Strong Password");
} else {
  console.log("Incorrect Password");
}

//9. Tiered Electricity Bill

let electricitybill = 100;

if (electricitybill <= 100) {
  console.log("units $0.5");
} else if (electricitybill <= 200) {
  console.log("units $0.75");
} else if (electricitybill <= 300) {
  console.log("units $1");
}

//10. Flight Booking System

let availableseat = "26";
let validpassport = true;
let sufficientfunds = 500;

if (availableseat > 6 && validpassport === true && sufficientfunds >= 500) {
  console.log("Booking Confirmed");
} else {
  console.log("Booking Failed");
}
