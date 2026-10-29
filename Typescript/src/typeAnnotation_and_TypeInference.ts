// Type Inference:  the compiler figures out the type automatically based on the value you provide

let name = "Sabeer"; // You didn't write : string, but TypeScript understands that username is a string because its initial value is "Sabeer".

// Similarly
let age = 22;
// age = "Hello"; // TypeScript error

let isCurrentlyStudent = true;


// Type Annotations: when you explicitly tell the compiler what type a variable should be

let chaiFlavour: string = "masala chai";

chaiFlavour = "green tea";

let studentName: string = "Sabeer";
let studentAge: number = 22;
//studentAge = "twenty-five"; // TypeScript error

let isStudent: boolean = true;

// When to use Type Inference and Type Annotation

// Use type inference when TypeScript can easily determine the type.
// Use type annotation when you want to explicitly define the expected type, especially when declaring a variable without an initial value.