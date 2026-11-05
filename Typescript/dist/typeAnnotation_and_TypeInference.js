"use strict";
// Type Inference:  the compiler figures out the type automatically based on the value you provide
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Sabeer"; // You didn't write : string, but TypeScript understands that username is a string because its initial value is "Sabeer".
// Similarly
let age = 22;
// age = "Hello"; // TypeScript error
let isCurrentlyStudent = true;
// Type Annotations: when you explicitly tell the compiler what type a variable should be
let chaiFlavour = "masala chai";
chaiFlavour = "green tea";
let studentName = "Sabeer";
let studentAge = 22;
//studentAge = "twenty-five"; // TypeScript error
let isStudent = true;
// When to use Type Inference and Type Annotation
// Use type inference when TypeScript can easily determine the type.
// Use type annotation when you want to explicitly define the expected type, especially when declaring a variable without an initial value.
//# sourceMappingURL=typeAnnotation_and_TypeInference.js.map