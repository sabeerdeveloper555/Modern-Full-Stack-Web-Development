// Union Type: A union type allows a variable to store values of two or more specified types.
// Think of it like this: a variable can accept a number OR a string, but not every possible type.

let subs: number | string = 10;

let apiRequestStatus: "pending" | "success" | "error" = "pending";

// apiRequestStatus = "done"; done is not assign it will give error.

function displayId(id: string | number): void {
  console.log(id);
}

displayId(101);       
displayId("USER101"); 

// Important: TypeScript may require a type check
// When using a union type, some operations are only allowed after checking which type the value has.

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello"); // HELLO
printValue(25);      // 25.00
