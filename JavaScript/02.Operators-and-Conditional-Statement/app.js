// JavaScript Operators

// 1. Arithmetic Operators

// let n = 10;
// let m = 20;
//console.log(n + m); // Addition Operator
//console.log(n - m); // Subtracion Operator
//console.log(n * m); // Multiplication Operator
//console.log(n / m); // Division Operator
//console.log(m % 9); // Modulus Operator
//console.log(n**3); // Exponentiation Operator

// Increment Operator
//n++ // 10 + 1 = 11
//n++ // 11 + 1 = 12
//console.log(n);

// Decrement Operator
//m--; // 20 - 1 = 19
//m--; // 19 - 1 = 18
//console.log(m);


// 2. Assignment Operator

// In Assignment Operator we use equal to '='

// let n = 10;
// console.log(n);

// n = n + 5; // 10 + 5 = 15
// n += 5; // 15 + 5 = 20
// console.log(n);


// First method of swapping
// let a = 10;
// let b = 20;
// console.log(`Before swap 'a' value is ${a} and 'b' value is ${b}`);

// let temp = a; // a = 10
// a = b; // a = 20
// b = temp; // b= 10
// console.log("a: " + a, "b: " + b);

// Second Method of swapping
// let a = 10;
// let b = 20;
// console.log(`Before swap 'a' value is ${a} and 'b' value is ${b}`);

// a = a + b; // 10 + 20 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b // 30 - 10 = 20
// console.log("a: " + a, "b: " + b);


// 3. Comparison Operators

// It is used to compare two values

// let a = 10;
// let b = 10;
// console.log(a==b);
// console.log(a=="10");

// console.log(a==="10");
// console.log(a===10);

// let a = 20;
// let b = 20;
// console.log(a != b);
// let c = "30";
// console.log(a !== c);

// let a = 40;
// let b = 50;
// console.log(a>b);
// console.log(a<b);

// let a = 10;
// let b = 10;
// console.log(a>=b);
// console.log(5>=b);

// console.log(5 <= 10);      
// console.log(10 <= 10);     
// console.log(15 <= 10);     


// 4. Logical Operators

// It is used to combine multiple conditions

// AND Operator
// let userName = "admin";
// let password = "1234";
// console.log(userName === "admin" && password === "12345");

// OR Operator
// console.log(10==20 || 10<20);

// NOT Operator
// console.log(!(20 != 20));
// console.log(! true);
// console.log(! false);

// 5. String Operators
// It is used for string concatenation. For string concatenation we use plus operator '+'

// console.log("Hello " + "World");

// let firstName = "Sabeer";
// let lastName = "Alam";
// console.log(firstName + " " + lastName);

// 6. Ternary Operator 
// It is a shorthand property for if...else condition

// let age = 18;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result);

// let age = Number(prompt("Enter yout age: "));
// let result = age >=15 ? "You are eligible to vote":"You are not eligible to vote";
// console.log(result);

// let numOne = Number(prompt("Enter a first value: "));
// let numTwo = Number(prompt("Enter a second value: "));
// let result = numOne > numTwo ? `Num_One ${numOne} is greater than Num_Two ${numTwo}` : `Num_Two ${numTwo} is greater than Num_One ${numOne}`
// console.log(result);


// JavaScript Conditional Statements

// if statement
// let score = 80;
// if (score >= 50) {
//     console.log("You Passed!");
// }

// if...else statement
// let score = 40;
// if (score >= 50) {
//     console.log("You Passed!");
// } else{
//     console.log("You Fail!");
// }

// Nested if...else ladder
// let userName = "admin";
// let password = "1234";

// let userNameInput = prompt("Enter username: ");

// if(userNameInput === userName){
//     let passwordInput = prompt("Enter password: ");
//     if(passwordInput === password){
//         console.log("Access Granted")
//     } else{
//         console.log("Invalid Password! Please enter correct password")
//     }
// } else{
//     console.log("Access Denied")
// }

// Switch case statement
// let lightSignal = "green";
// switch (lightSignal) {
//     case "red":
//         console.log("Stop");
//         break;
    
//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid Light Signal");
//         break;
// }

