// Union Type: A union type allows a variable to store values of two or more specified types.
// Think of it like this: a variable can accept a number OR a string, but not every possible type.

// let subs: number | string = 10;

// let apiRequestStatus: "pending" | "success" | "error" = "pending";

// apiRequestStatus = "done"; done is not assign it will give error.

// function displayId(id: string | number): void {
//   console.log(id);
// }

// displayId(101);       
// displayId("USER101"); 

// Important: TypeScript may require a type check
// When using a union type, some operations are only allowed after checking which type the value has.

// function printValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// printValue("hello"); // HELLO
// printValue(25);      // 25.00


// any Type: any is a Typescript type that allows a variable to store a value of any type without Typescript checking and restrictin its type.

// 1. any can store different types.
// let value: any = 100;
// console.log(value);

// value = "Hello Typescript";
// console.log(value);

// value = true;
// console.log(value);

// value = [10, 20, 30];
// console.log(value);

// 2. any with a string
// let value2: any = "hello";

// console.log(value2.toUpperCase());
// console.log(value2.length);


// 3. any with a number
// let value3: any = 25;

// console.log(value3.toFixed(2));

// 4. Changing the type
// let data: any = "Sabeer";

// console.log(data);

// data = 100;
// console.log(data);

// data = false;
// console.log(data);

// 5. The danger of any
// let value4: any = 100;
// console.log(value4.toUpperCase());

// TypeScript may not complain because value is any.
// But when the code runs, you can get a runtime error because toUpperCase() is a string method, while 100 is a number.

// 6. any vs string
let username: string = "Sabeer";

username = "Ali"; 
// username = 100; 

// But with any:
let data2: any = "Sabeer";

data2 = 100;       
data2 = true;      
data2 = "Ali";     