// Type Narrowing and Type Guards in TypeScript

// ========================================
// Type Narrowing in TypeScript
// ========================================

// Definition:
// Type Narrowing is a process in TypeScript that allows the
// TypeScript compiler to reduce a variable's type from multiple
// possible types to a more specific type based on certain checks.
//
// It is especially useful when working with Union Types because
// a variable can hold values of different types.
//
// TypeScript uses conditions and checks to determine which type
// a variable currently represents within a specific block of code.
//
// Once TypeScript identifies the specific type, we can safely
// access its properties and methods without causing type errors.
//
// Common Techniques Used for Type Narrowing:
// 1. typeof       - Checks the type of a primitive value.
// 2. instanceof  - Checks whether an object belongs to a class.
// 3. in          - Checks whether a property exists in an object.
// 4. Equality    - Uses === or !== to compare values.
// 5. Truthiness  - Checks whether a value is truthy or falsy.
// 6. Custom Type Guards - Uses user-defined functions to narrow types.
//
// Important:
// Type Narrowing does not change the actual value or its
// runtime type. It only helps TypeScript understand the
// more specific type of a variable during code analysis.
//
// In simple words:
// Type Narrowing means reducing multiple possible types
// into one specific type after checking a condition.


// ========================================
// Type Guards in TypeScript
// ========================================

// Definition:
// Type Guards are techniques in TypeScript that allow us to
// check the actual type of a variable at runtime.
//
// They help TypeScript identify and narrow down a variable's
// type within a specific block of code.
//
// When working with union types, Type Guards help us determine
// which type of value we are dealing with before performing
// type-specific operations.
//
// Type Guards improve type safety and prevent errors by ensuring
// that we only perform operations that are valid for a specific type.
//
// Common Type Guards:
// 1. typeof      - Checks primitive types (string, number, boolean).
// 2. instanceof - Checks whether an object belongs to a class.
// 3. in         - Checks whether a property exists in an object.
// 4. Equality   - Checks values using ===, !==, etc.
// 5. Custom Type Guards - User-defined functions using the
//    "is" keyword to identify a specific type.
//
// Important:
// Type Guard is the checking technique.
// Type Narrowing is the process of reducing a variable's
// possible types after a successful type check.
//
// In simple words:
// Type Guards help TypeScript understand what type of value
// we are working with, so we can safely use its properties
// and methods.


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
function calculatePrice(price: string | number) {

    if (typeof price === "number") {
        const finalPrice = price + 100;
        console.log(`Final price: ${finalPrice}`);
    } else {
        console.log(`Price received as text: ${price}`);
    }
}

calculatePrice(500);
calculatePrice("500");