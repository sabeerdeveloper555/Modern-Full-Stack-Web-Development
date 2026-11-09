"use strict";
// Type Narrowing and Type Guards in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// Type Narrowing: Type Narrowing is a TypeScript feature that helps identify and reduce a variable's possible types to a more specific type using conditions.
// 1. String or Number
// let value: string | number = "Hello TypeScript";
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// } else {
//   console.log(value * 2);
// }
// Explanation: In this example, we have a variable `value` that can be either a string or a number. We use the `typeof` operator to check the type of `value`. If it's a string, we call the `toUpperCase()` method; if it's a number, we multiply it by 2. This is an example of type narrowing, where TypeScript narrows down the type of a variable based on runtime checks. This allows TypeScript to safely provide string-specific or number-specific operations.
// 2. String or Number — User Input
// function processUserInput(input: string | number){
//     if(typeof input === "string"){
//         console.log(`Username: ${input.toUpperCase()}`);
//     } else{
//         console.log(`User ID: ${input}`)
//     }
// }
// processUserInput("sabeer");
// processUserInput(101);
// 3. String or Number or Boolean
// function displayValue(value: string|number|boolean){
//     if(typeof value === "string"){
//         console.log(`String: ${value}`);
//     } else if(typeof value === "number"){
//         console.log(`Number: ${value}`)
//     } else {
//         console.log(`Boolean: ${value}`)
//     }
// }
// displayValue("Typescript");
// displayValue(500);
// displayValue(true);
// 4. typpeof with Boolean
// function checkStatus(status: string | boolean){
//     if(typeof status === "boolean"){
//         if(status){
//             console.log("User is active.")
//         } else{
//             console.log("User is inactive.")
//         }
//     } else{
//         console.log(`Status: ${status}`)
//     }
// }
// checkStatus(true);
// checkStatus("Pending");
// 5. Array vs Strings
// function processValue(value: string | string[]){
//     if(typeof value === "string"){
//         console.log(`String length: ${value.length}`);
//     } else{
//         console.log(`Array length: ${value.length}`);
//     }
// }
// processValue("Hello TypeScript");
// processValue(["HTML", "CSS", "JavaScript", "TypeScript", "React"]);
// 6. Nullable values
// function printUsername(username: string | null){
//     if(username !== null){
//         console.log(`Username: ${username}`);
//     } else{
//         console.log('Username is not available')
//     }
// }
// printUsername("Sabeer");
// printUsername(null);
// 7. Optional Values
// type User = {
//   name: string;
//   email?: string;
// };
// function displayUser(user: User) {
//   console.log(`Name: ${user.name}`);
//   if (user.email !== undefined) {
//     console.log(`Email: ${user.email}`);
//   } else {
//     console.log("Email is not available");
//   }
// }
// displayUser({
//     name: "Sabeer"
// })
// displayUser({
//     name: "Sabeer",
//     email: "sabeer@example.com"
// })
// 8. in Operator
// type Admin = {
//     name: string;
//     permissions: string[];
// }
// type Customer = {
//     name: string;
//     order: number;
// }
// function displayUser(user: Admin | Customer) {
//     if("permissions" in user){
//         console.log(`Admin Name: ${user.name}`);
//         console.log(`Permissions: ${user.permissions.join(", ")}`);
//     } else{
//         console.log(`Customer Name: ${user.name}`);
//         console.log(`Order: ${user.order}`);
//     }
// }
// displayUser({
//     name: "Sabeer",
//     permissions: ["read", "write", "execute"]
// })
// displayUser({
//     name: "Sabeer",
//     order: 1001
// })
// 9. instanceof Operator
// function processDate(value: Date | string) {
//     if (value instanceof Date) {
//         console.log(`Year: ${value.getFullYear()}`);
//     } else {
//         console.log(`String date: ${value}`);
//     }
// }
// processDate(new Date());
// processDate("2026-11-07");
// 10. instanceof with Custom Classes
// class Car {
//     drive() {
//         console.log("Car is driving");
//     }
// }
// class Bike {
//     ride() {
//         console.log("Bike is riding");
//     }
// }
// function startVehicle(vehicle: Car | Bike) {
//     if (vehicle instanceof Car) {
//         vehicle.drive();
//     } else {
//         vehicle.ride();
//     }
// }
// const car = new Car();
// const bike = new Bike();
// startVehicle(car);
// startVehicle(bike);
// 11. Truthiness Narrowing
// function greetUser(name: string | null) {
//     if (name) {
//         console.log(`Hello, ${name}`);
//     } else {
//         console.log("No name provided");
//     }
// }
// greetUser("Sabeer");
// greetUser(null);
// 12. Function Parameter with Multiple Types
function calculatePrice(price) {
    if (typeof price === "number") {
        const finalPrice = price + 100;
        console.log(`Final price: ${finalPrice}`);
    }
    else {
        console.log(`Price received as text: ${price}`);
    }
}
calculatePrice(500);
calculatePrice("500");
//# sourceMappingURL=type_narrowing.js.map