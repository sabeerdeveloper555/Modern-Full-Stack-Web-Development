"use strict";
// Type Never
Object.defineProperty(exports, "__esModule", { value: true });
// The `never` type represents a value that will never occur.
//
// A function can have a `never` return type when it:
// 1. Always throws an error, or
// 2. Never finishes its execution (for example, an infinite loop).
//
// `never` means that the function never successfully returns a value.
// 1. Basic Example of a Function that Throws an Error
// function throwError(message: string): never {
//     throw new Error(message);
// }
//throwError("Something went wrong!"); // This will throw an error and never return a value.
// 2. Login System Example
// In this case function string return successfully.
// function login(username: string, password: string): string{
//     if(username === "admin" && password === "password123"){
//         return "Login successful!";
//     }
//     throw new Error("Invalid username or password");
// }
// console.log(login("admin", "password123")); // This will return "Login successful!"
// But in error case function will not return
// function loginError(): never{
//     throw new Error("Invalid username or password");
// }
// 3. never vs void
// void means function not return anything but function can complete.
// function sayHello(): void{
//     console.log("Hello, World!");
// }
// sayHello(); // This will print "Hello, World!" and complete successfully.
// never means function not return anything and function will never complete.
// function crashApp(): never{
//     throw new Error("Application crashed!");
// }
// crashApp(); // This will throw an error and never complete successfully.
// 6. never in type narrowing
function checkValue(value) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    }
    else {
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}
checkValue("Hello TypeScript"); // This will print "String value: HELLO TYPESCRIPT"
checkValue(42); // This will print "Number value: 42.00"
//# sourceMappingURL=type-never.js.map