// 1. Basic Type Assertion

// Type Assertion tells TypeScript to treat a value as a specific type.
// Here, TypeScript does not know the exact type of "value" because it is unknown.
// We know that the actual value is a string, so we assert it as a string.

let value: unknown = "Hello TypeScript";
let message = value as string; // Type assertion to string
console.log(message.toUpperCase());

// 2. Type Assertion with Number

// The "value" variable has an unknown type.
// We know that the actual value is a number.
// Therefore, we use Type Assertion to treat it as a number.

let numValue : unknown = 50;
let num = numValue as number; // Type assertion to number
console.log(num.toFixed(2));

// 3. Type Assertion with Boolean

// The value has an unknown type.
// We know that the actual value is a boolean.
// Type Assertion tells TypeScript to treat the value as a boolean.

let boolValue: unknown = true;
let isActive = boolValue as boolean; // Type assertion to boolean
console.log(isActive ? "Active" : "Inactive");

// 4. Type Assertion with DOM

// document.getElementById() can return HTMLElement | null.
// TypeScript does not automatically know that this element is an input.
// We know that the element is an HTMLInputElement because of the HTML code.
// Therefore, we use Type Assertion to tell TypeScript about the actual element type.

// const userInput = document.getElementById("username") as HTMLInputElement;
// console.log(userInput.value);

// 5. Type Assertio with User Object

// This type describes the structure of a User object.
type User = {
    id: number;
    name: string;
    email: string;
}

// The data variable has an unknown type.
// We know that the actual object follows the User structure.
// Therefore, we assert the value as User.

const data: unknown = {
    id: 1,
    name: "Sabeer",
    email: "sabeer@example.com"
}

const user = data as User; // Type assertion to User
console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);


// 6. Type Assertion with Product

// This type describes the structure of a Product object.
type Product = {
    id: number;
    name: string;
    price: number;
}

// The data is unknown.
// We know that it contains Product information.
// Type Assertion tells TypeScript to treat this data as a Product.

const productData: unknown = {
    id: 101,
    name: "Laptop",
    price: 150000
}

const product = productData as Product; // Type assertion to Product
console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);

// 7.Type Narrowing vs Type Assertion

// Type Narrowing:
// Type Narrowing uses a runtime check to determine the actual type.
// TypeScript checks the condition and automatically narrows the type.

function printValue(value: string | number): void {
  if (typeof value === "string") {
    // Here TypeScript knows that value is a string.
    console.log(value.toUpperCase());
  } else {
    // Here TypeScript knows that value is a number.
    console.log(value.toFixed(2));
  }
}

// Type Assertion:
// Type Assertion does not perform a runtime check.
// We are directly telling TypeScript to treat the value as a string.

let value2: unknown = "Hello";

let message2 = value2 as string;

console.log(message2.toUpperCase());

// Remember:
// Type Narrowing
// → TypeScript checks the value and narrows the type.

// Type Assertion
// → Developer tells TypeScript which type to use.


