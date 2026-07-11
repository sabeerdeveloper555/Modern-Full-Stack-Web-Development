//Funcions without parameters or arguments
// function displayData(){
//     console.log("Welcome to JavaScript Functions and Methods.");

// }
// displayData();

// function showName(){
//     alert("Sabeer Alam");
// }
// showName();

//Funcions with parameters or arguments

// function showName(userName){
//     console.log(`Username: ${userName}`);
// }
// showName("Sabeer Alam");
// showName("Shahan Alam");

// function sum(num1, num2) {
//   console.log(`Sum of ${num1} + ${num2} is ${num1 + num2}`);
// }
// sum(50, 30);
// sum(60, 40);

// In functions we alsoe give default value

// function sum(num1, num2 = 90) {
//     console.log(`Sum of ${num1} + ${num2} is ${num1 + num2}`);
// }
// If we give two arguments for example sum(50, 10) 50 goes to num1 and 10 goes to num2 it override the default value i.e. num2 = 90.
// sum(50, 10); // Output: 60

// If we give one arguments for example sum(60) 60 goes to num1 and default value num2 = 90 is utilize
// sum(60); // Output: 150

// Spread Operator
// function sumData(...allParams){
//     console.log(allParams);
// }
// sumData(10, 50, 80, 99, 44);

// Return Type Functions
// function addition(num1, num2) {
//     return num1 + num2;
// }
// console.log(addition(500, 200));

// function taxCalculation(price) {
//     return price * 0.10;
// }
// let productPrice = 50000;
// let totalAmount = taxCalculation(productPrice) + productPrice;
// console.log(totalAmount);

// Anonymous Function
// let displayMessage = function(){
//     console.log("Welcome to JS World!");
// }
// displayMessage();

// Callback Function
// function greet(callback){
//     console.log("Hello");
//     callback();
// }
// function sayBye(){
//     console.log("GoodBye");
// }
// greet(sayBye);

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function calculate(num1, num2, callBack){
//     console.log(num1);
//     console.log(num2);
//     console.log("Final Calculation:", callBack(num1, num2));
// }
// calculate(50, 30, add);
// calculate(50, 30, subtract);

//Arrow Function

//1. Without Parameter
// const greet = () => {
//   console.log("Hello JavaScript");
// };
// greet();

//2. One Parameter
// Bracket is optional when giving one parameter

// const square = num =>{
//     return num*num;
// };
// console.log((square(5)));

// const square = (num) =>{
//     return num*num;
// };
// console.log((square(5)));

//3. Multiple Parameters
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(60, 10));

//4. Implicit Return
// Normal:
// const multiply = (a, b) => {
//     return a * b;
// }
// Short Form:
// const multiply = (a, b) => a * b;
// console.log(multiply(40, 20));

//5. Single Line Arrow
// const message = () => "Welcome";
// console.log(message());

//6. Multi-line Arrow Function
// const sum = (a, b) => {
//     let result = a + b;
//     return result;
// };
// console.log(sum(8, 4));

//7. Object Return Karna
const student = () => ({
    name: "Sabeer Alam",
    age: "25"
});
console.log(student());
