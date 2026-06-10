// Variables

// These are the three ways to declare variables in JavaScript var, let, const

// var is function-scoped and can be redeclared and updated but it is old schooled way to declare varaibles and it is not recommended to use it in modern JavaScript

// var name = "John";
// console.log(name);

// let is block-scoped and can be updated but cannot be redeclared in the same scope

// let age = 30;
// console.log(age);

// {
//     let userName = "Sabeer";
//     console.log(userName);
// }

// We can also declare two variables and copy data from one variable to another

// let firstName = "Sabeer";

// let userName = firstName; 

// console.log(firstName);
// console.log(userName);

// We can also update the value of a variable declared with let

// let age = 25;
// console.log(age);
// age = 30;
// console.log(age);

// const is block-scoped and cannot be updated or redeclared in the same scope
// const PI = 3.14;
// console.log(PI);

// Naming rules for variables in JavaScript:

// 1. Variable names must start with a letter, underscore (_), or dollar sign ($).
// 2. Variable names can contain letters, digits, underscores, and dollar signs.
// 3. Variable names cannot start with a digit.
// 4. Variable names cannot be a reserved keyword in JavaScript (e.g., var, let, const, if, else, etc.).


// Template Literals
// Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.

// Example of using template literals:

// const userName = "Sabeer";
// const age = 30;
// const message = `My name is ${userName} and I am ${age} years old`;
// console.log(message);

// Multi-line strings with template literals:
// console.log(`
//         1. Name
//         2. Age
//     `)

// DataTypes

// JavaScript has several data types, including:

// Primitive Data Types:
// 1. String: A sequence of characters enclosed in single, double, or backticks.
// 2. Number: Represents both integer and floating-point numbers.
// 3. Boolean: Represents a logical entity that can have two values: true or false.
// 4. Null: Represents the intentional absence of any object value.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 6. Symbol: Represents a unique identifier (introduced in ES6).
// 7. BigInt: Represents integers with arbitrary precision (introduced in ES2020).

// Non-Primitive Data Types:
// 1. Object: Represents a collection of properties and methods.
// 2. Array: Represents a list of values (which can be of any data type).
// 3. Function: Represents a reusable block of code that performs a specific task.


// Example of different data types:

// String:
// let city = "Karachi";
// console.log(city, typeof(city));

// Number:
// let age=25;
// console.log(age, typeof(age));

// Boolean:
// let isStudent = true;
// console.log(isStudent, typeof(isStudent));

// Null:
// let emptyValue = null;
// console.log(emptyValue, typeof(emptyValue));

// Undefined:
// let uninitializedVariable;
// console.log(uninitializedVariable, typeof(uninitializedVariable));

// Symbol:
// let uniqueId = Symbol("id");
// console.log(uniqueId, typeof(uniqueId));

// BigInt:
// let bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber, typeof(bigNumber));

// Object:
// let person = {
//     name: "Sabeer",
//     age: 30,
//     isStudent: true
// };
// console.log(person, typeof(person));

// Array:
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers, typeof(numbers));

// Function:
// function greet() {
//     return "Hello, World!";
// }
// console.log(greet, typeof(greet));

// Types of Conversion in JavaScript:

// 1. Implicit Conversion (Type Coercion): This occurs when JavaScript automatically converts one data type to another during an operation. For example, when you add a number and a string, JavaScript converts the number to a string before performing the concatenation.

//let result = 5 + "10"; // Implicit conversion of 5 to "5"
//console.log(result); // Output: "510"

// 2. Explicit Conversion: This occurs when you manually convert a value from one data type to another using built-in functions or methods. For example, you can use the Number() function to convert a string to a number.

// let str = "123";
// let num = Number(str); // Explicit conversion of "123" to 123
// console.log(num); // Output: 123


let userName = prompt("Enter your username: ")
alert("Welcome " + userName)

