# TypeScript — Beginner Study Notes

A beginner-friendly guide to learning TypeScript, covering its introduction, type annotation, type inference, union types, the `any` type, type narrowing, type guards, type assertion, and the `never` type.

---

# Table of Contents

1. [Introduction to TypeScript](#1-introduction-to-typescript)
2. [Type Annotation and Type Inference](#2-type-annotation-and-type-inference)
3. [Union Types and Any Type](#3-union-types-and-any-type)
4. [Type Narrowing and Type Guards](#4-type-narrowing-and-type-guards)
5. [Type Assertion and `never` Type](#5-type-assertion-and-never-type)
6. [Practice Exercises](#6-practice-exercises)
7. [Solutions](#7-solutions)
8. [Quick Revision](#8-quick-revision)

---

# 1. Introduction to TypeScript

## 1.1 What is TypeScript?

TypeScript is a programming language developed by Microsoft. It is built on top of JavaScript and adds static type checking.

TypeScript helps developers write more reliable, maintainable, and organized JavaScript code by allowing them to define the types of variables, function parameters, and return values.

**Definition:**

TypeScript is a strongly typed programming language that builds on JavaScript by adding static type checking and additional development features.

### Example

JavaScript:

```javascript
let age = 25;

age = "Hello";

console.log(age);
```

JavaScript allows this code because JavaScript is dynamically typed.

TypeScript:

```typescript
let age: number = 25;

age = "Hello"; // TypeScript Error
```

TypeScript reports an error because `age` was declared as a number, but we are trying to assign a string.

## 1.2 Is TypeScript JavaScript?

TypeScript is a superset of JavaScript.

This means:

- Almost all valid JavaScript code is also valid TypeScript code.
- TypeScript adds features such as type annotations, interfaces, and other type-related features.
- TypeScript code is compiled into JavaScript before it runs in ordinary JavaScript environments.

For example:

```typescript
let username: string = "Sabeer";

console.log(username);
```

Compiled JavaScript:

```javascript
let username = "Sabeer";

console.log(username);
```

Notice that the TypeScript type annotation is removed during compilation.

## 1.3 Why Do We Use TypeScript?

TypeScript provides several advantages.

### 1. Early Error Detection

TypeScript can identify many type-related mistakes before the program runs.

```typescript
let age: number = 25;

age = "Twenty-five"; // Error
```

This helps developers find problems earlier.

### 2. Better Code Readability

Type annotations make it easier to understand what kind of data a variable should contain.

```typescript
let username: string = "Sabeer";
let age: number = 25;
let isStudent: boolean = true;
```

A developer can understand the expected data types immediately.

### 3. Better Autocomplete

TypeScript provides better IntelliSense and autocomplete suggestions in editors such as Visual Studio Code.

For example:

```typescript
let username: string = "Sabeer";

username.toUpperCase();
username.toLowerCase();
username.length;
```

VS Code can suggest methods and properties available for strings.

### 4. Easier Maintenance

TypeScript helps developers understand and maintain large applications.

It is especially useful when working with:

- React applications
- Node.js applications
- Full-stack applications
- Large development teams
- APIs and complex data structures

## 1.4 TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|---|---|---|
| Typing | Dynamic | Static type checking |
| Type annotations | Not supported | Supported |
| Type inference | Runtime behavior | Supported during development |
| Compilation | Usually runs directly | Usually compiled into JavaScript |
| Error detection | Many errors appear at runtime | Many type errors detected before runtime |
| Autocomplete | Available | Enhanced with type information |

**Important:** TypeScript does not replace JavaScript. It adds a type system and development tools to JavaScript.

## 1.5 Does TypeScript Run Directly in the Browser?

Browsers understand JavaScript, not TypeScript syntax.

Therefore, TypeScript is generally compiled into JavaScript before it is executed.

Example:

```typescript
let message: string = "Hello TypeScript";

console.log(message);
```

After compilation:

```javascript
let message = "Hello TypeScript";

console.log(message);
```

The browser executes the generated JavaScript.

## 1.6 Installing and Setting Up TypeScript

You need Node.js and npm installed on your computer.

### Step 1: Create a project folder

```bash
mkdir Typescript
cd Typescript
```

### Step 2: Initialize npm

```bash
npm init -y
```

This creates a `package.json` file.

### Step 3: Install TypeScript

```bash
npm install -D typescript
```

The `-D` flag installs TypeScript as a development dependency.

### Step 4: Create a TypeScript configuration file

```bash
npx tsc --init
```

This creates a `tsconfig.json` file.

### Step 5: Create a TypeScript file

Create:

```text
src/index.ts
```

Add:

```typescript
let message: string = "Hello TypeScript!";

console.log(message);
```

### Step 6: Compile TypeScript

```bash
npx tsc
```

This compiles the project according to the settings in `tsconfig.json`.

### Step 7: Run the generated JavaScript

If your `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

And your source file is `src/index.ts`, the generated file may be:

```text
dist/index.js
```

Run it using:

```bash
node dist/index.js
```

**Important:** The output location depends on your `tsconfig.json`, especially `rootDir` and `outDir`.

---

# 2. Type Annotation and Type Inference

TypeScript provides two important ways to determine the type of a variable:

1. Type Annotation
2. Type Inference

Let's understand both.

## 2.1 What is Type Annotation?

**Definition:**

Type annotation is the process of explicitly specifying the data type of a variable, function parameter, or return value.

In simple words, we tell TypeScript which type of value a variable can store.

### Syntax

```typescript
let variableName: type = value;
```

The colon (`:`) is used to specify the type.

### Example

```typescript
let username: string = "Sabeer";
let age: number = 25;
let isStudent: boolean = true;
```

Here:

- `username` can store strings.
- `age` can store numbers.
- `isStudent` can store boolean values.

### Example: String

```typescript
let firstName: string = "Sabeer";

console.log(firstName);
```

Output:

```text
Sabeer
```

If we try to assign a number:

```typescript
let firstName: string = "Sabeer";

firstName = 100; // Error
```

TypeScript reports an error because `firstName` is declared as a string.

### Example: Number

```typescript
let age: number = 25;

age = 30; // Allowed

console.log(age);
```

Output:

```text
30
```

But this is not allowed:

```typescript
let age: number = 25;

age = "Twenty-five"; // Error
```

### Example: Boolean

```typescript
let isLoggedIn: boolean = true;

console.log(isLoggedIn);
```

Output:

```text
true
```

Boolean variables accept only:

```typescript
true
false
```

## 2.2 Common Basic Types

TypeScript provides several built-in types.

| Type | Description | Example |
|---|---|---|
| `string` | Text values | `"Hello"` |
| `number` | Numeric values | `100`, `25.5` |
| `boolean` | True or false | `true` |
| `any` | Disables most type checking | Any value |
| `unknown` | An unknown value that requires checking before use | Any value |
| `void` | No meaningful return value | Function return type |
| `null` | Represents an intentional empty value | `null` |
| `undefined` | Represents an unassigned or missing value | `undefined` |

Note: Arrays, objects, tuples, enums, and other types are also available in TypeScript and will be covered separately.

## 2.3 Type Annotation in Functions

We can also specify types for function parameters.

### Example

```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("Sabeer");
```

Output:

```text
Hello, Sabeer!
```

Here:

- `name` is the function parameter.
- `string` specifies the parameter type.
- The function expects a string argument.

This is allowed:

```typescript
greet("Ali");
```

This produces a TypeScript error:

```typescript
greet(100);
```

Because the function expects a string, not a number.

## 2.4 Type Annotation for Return Values

We can specify which type of value a function should return.

### Example: Number Return Type

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

Here:

- `a: number` means the first parameter must be a number.
- `b: number` means the second parameter must be a number.
- `: number` after the parentheses specifies the return type.

### Example: String Return Type

```typescript
function getName(): string {
  return "Sabeer";
}

const username = getName();

console.log(username);
```

Output:

```text
Sabeer
```

### Example: Boolean Return Type

```typescript
function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(25));
```

Output:

```text
true
```

## 2.5 What is `void`?

**Definition:**

`void` is a TypeScript type used for functions that do not return a meaningful value.

In simple words, a `void` function performs an action but does not provide a meaningful result through `return`.

### Example

```typescript
function greet(): void {
  console.log("Hello Sabeer!");
}

greet();
```

Output:

```text
Hello Sabeer!
```

The function displays a message but does not return it.

### `void` vs `return`

Function with `void`:

```typescript
function showMessage(): void {
  console.log("Welcome!");
}
```

Function returning a string:

```typescript
function getMessage(): string {
  return "Welcome!";
}

const message = getMessage();

console.log(message);
```

The second function returns a string that can be stored and used outside the function.

**Important:** `void` does not mean that the function cannot perform actions. It can display messages, update data, and perform other operations.

## 2.6 What is Type Inference?

**Definition:**

Type inference is a TypeScript feature that automatically determines the type of a variable based on its initial value.

In simple words, we do not always need to write the type manually. TypeScript can understand it automatically.

### Example

```typescript
let username = "Sabeer";
```

TypeScript automatically understands:

```typescript
let username: string = "Sabeer";
```

We do not need to write `: string` because TypeScript infers the type.

### Example: Number

```typescript
let age = 25;
```

TypeScript infers:

```typescript
let age: number = 25;
```

### Example: Boolean

```typescript
let isLoggedIn = true;
```

TypeScript infers:

```typescript
let isLoggedIn: boolean = true;
```

## 2.7 Type Inference in Variables

Consider this example:

```typescript
let score = 100;

score = 200; // Allowed

score = "Excellent"; // Error
```

Why?

Because TypeScript inferred the type of `score` as `number` from its initial value.

It will not automatically change the variable's type to string when a different value is assigned.

## 2.8 Type Inference in Functions

TypeScript can also infer the return type of a function.

### Example

```typescript
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript automatically infers the return type as `number`.

We can also explicitly write it:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Both are valid.

## 2.9 Type Annotation vs Type Inference

| Type Annotation | Type Inference |
|---|---|
| We explicitly specify the type. | TypeScript automatically determines the type. |
| Uses a colon (`:`). | Usually does not require a colon. |
| Gives direct control over the declared type. | Saves time and reduces unnecessary code. |
| Useful when the expected type needs to be clear. | Useful when the initial value clearly identifies the type. |

### Type Annotation

```typescript
let age: number = 25;
```

### Type Inference

```typescript
let age = 25;
```

Both variables have the `number` type.

### When Should We Use Them?

Use type annotation when:

- You want to explicitly define the expected type.
- A variable is declared without an initial value.
- You want to make function parameters and return types clear.
- The type cannot be easily inferred from the initial value.

Use type inference when:

- The initial value clearly identifies the type.
- Adding an annotation would be unnecessary.
- You want to keep your code clean and readable.

---

# 3. Union Types and Any Type

## 3.1 What is a Union Type?

**Definition:**

A union type allows a variable to accept values of two or more specified types.

In simple words, a variable can accept multiple types, but only the types that we explicitly allow.

### Syntax

```typescript
let variableName: type1 | type2;
```

The pipe symbol (`|`) means OR.

### Example

```typescript
let id: string | number;

id = 101;
id = "USER101";
```

Both values are allowed because `id` accepts either a string or a number.

But this is not allowed:

```typescript
let id: string | number;

id = true; // Error
```

Why?

Because boolean is not included in the union type.

## 3.2 Union Type with Different Values

```typescript
let value: string | number | boolean;

value = "Hello";
value = 100;
value = true;
```

All three assignments are allowed.

But:

```typescript
value = []; // Error
```

An array is not included in the union.

## 3.3 Union Types in Functions

Union types can also be used in function parameters.

### Example

```typescript
function displayId(id: string | number): void {
  console.log(id);
}

displayId(101);
displayId("USER101");
```

Output:

```text
101
USER101
```

The function accepts either a string or a number.

## 3.4 Understanding Type Checking with Union Types

When using union types, some operations are only allowed after checking which type the value has.

Why?

Because different data types have different methods and properties.

For example:

- Strings have `toUpperCase()`.
- Numbers have `toFixed()`.

A value with the type `string | number` could be either a string or a number.

Therefore, TypeScript cannot safely allow operations that work on only one of these types without checking first.

### Example: Without Type Checking

```typescript
function printValue(value: string | number) {
  console.log(value.toUpperCase()); // Error
}
```

Why does TypeScript report an error?

Because `value` might be a number, and numbers do not have the `toUpperCase()` method.

Similarly:

```typescript
function printValue(value: string | number) {
  console.log(value.toFixed(2)); // Error
}
```

This also produces an error because `value` might be a string.

## 3.5 What is `typeof`?

The `typeof` operator checks the type of a value at runtime.

### Example

```typescript
console.log(typeof "Hello"); // string

console.log(typeof 100); // number

console.log(typeof true); // boolean
```

We can use `typeof` with union types to check which type the value currently has.

## 3.7 Union Types with Three or More Types

We can also use more than two types in a union.

```typescript
function displayValue(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

displayValue("hello");
displayValue(25);
displayValue(true);
```

Output:

```text
HELLO
25.00
true
```

Each condition checks a specific type.

## 3.8 What is `any`?

**Definition:**

`any` is a TypeScript type that allows a variable to store a value of any type without TypeScript checking or restricting its type.

In simple words:

`any` tells TypeScript:

"This value can be anything, so don't perform type checking on it."

### Example

```typescript
let value: any = 10;

value = "Hello";
value = true;
value = [1, 2, 3];
```

All assignments are allowed because `value` has the `any` type.

## 3.9 `any` Can Store Different Types

```typescript
let data: any = "Sabeer";

console.log(data);

data = 100;
console.log(data);

data = false;
console.log(data);
```

Output:

```text
Sabeer
100
false
```

The variable can store different types of values without producing TypeScript assignment errors.

## 3.10 Using Methods with `any`

Because `any` disables most type checking, TypeScript allows us to call different methods on it.

### Example: String Method

```typescript
let value: any = "hello";

console.log(value.toUpperCase());
console.log(value.length);
```

Output:

```text
HELLO
5
```

### Example: Number Method

```typescript
let value: any = 25;

console.log(value.toFixed(2));
```

Output:

```text
25.00
```

The current value determines whether the method works at runtime.

## 3.11 The Dangerous Side of `any`

The `any` type reduces TypeScript's type safety.

Consider this example:

```typescript
let value: any = 100;

console.log(value.toUpperCase());
```

TypeScript may not report an error because `value` has the `any` type.

However, when JavaScript executes this code, it produces a runtime error.

Why?

- `100` is a number.
- `toUpperCase()` is a string method.
- Numbers do not have this method.

This is why using `any` unnecessarily is not recommended.

## 3.12 Union Type vs Any Type

This is an important difference.

### Union Type

```typescript
let id: string | number;

id = 101;       // Allowed
id = "USER101"; // Allowed

id = true;      // Error
```

Only the specified types are allowed.

### Any Type

```typescript
let id: any;

id = 101;       // Allowed
id = "USER101"; // Allowed
id = true;      // Allowed
id = [];        // Allowed
```

Almost any value is allowed.

### Comparison Table

| Feature | Union Type | Any Type |
|---|---|---|
| Multiple types | Yes | Yes |
| Type restrictions | Only specified types | Almost no restrictions |
| Type checking | Maintained | Mostly disabled |
| Type safety | Better | Reduced |
| Recommended usage | When possible types are known | Only when genuinely necessary |

**Remember:**

- Union type = Limited choices.
- `any` = Almost anything.

## 3.13 What is `unknown`?

`unknown` is another TypeScript type used when we do not know the type of a value.

It is similar to `any` because it can hold values of different types.

However, there is an important difference.

**Definition:**

`unknown` allows a variable to store a value of any type, but TypeScript requires us to check the type before performing type-specific operations.

### Example

```typescript
let value: unknown = "Hello";

value = 100;
value = true;
```

All these assignments are allowed.

However:

```typescript
let value: unknown = "Hello";

console.log(value.toUpperCase()); // Error
```

TypeScript reports an error because it does not know whether `value` is currently a string.

### Solution: Use Type Checking

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Output:

```text
HELLO
```

Now TypeScript knows that `value` is a string inside the `if` block.

### `any` vs `unknown`

| Feature | `any` | `unknown` |
|---|---|---|
| Accepts different types | Yes | Yes |
| Allows operations without checking | Mostly yes | No |
| Requires type checking | No | Yes |
| Type safety | Low | Better |

**Best practice:** Prefer `unknown` over `any` when you need to accept a value whose type is not yet known.

---

# 4. Type Narrowing and Type Guards

This section expands the existing notes in Chapter 3. Add it after **3.6 What is Type Narrowing?**.

## 4.1 Detailed Definition of Type Narrowing

**Definition:**

Type narrowing is a process in TypeScript that makes a variable's type more specific by using conditions and type checks.

When a variable has a union type, it can contain values of more than one type. TypeScript cannot safely allow every type-specific operation until it knows which type the variable currently represents.

TypeScript analyzes conditions such as `typeof`, `instanceof`, the `in` operator, equality checks, and truthiness checks. Inside the appropriate code block, it removes types that are no longer possible and works with the remaining, more specific type.

**In simple words:** Type narrowing means reducing multiple possible types to a specific type after checking a condition.

### Example

```typescript
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello"); // HELLO
printValue(25);      // 25.00
```

**Step-by-step explanation:**

1. `value` can be either a `string` or a `number`.
2. `typeof value === "string"` checks whether the current value is a string.
3. Inside the `if` block, TypeScript narrows `value` to `string`.
4. Inside the `else` block, TypeScript knows the remaining possible type is `number`.
5. We can safely use methods that belong to the narrowed type.

**Important:** Type narrowing does not change the actual value or convert it into another type. It helps TypeScript understand which type is possible at a particular point in the code.

## 4.2 What is a Type Guard?

**Definition:**

A Type Guard is a condition, expression, or function that checks the type or structure of a value and provides TypeScript with information that can be used to narrow that value to a more specific type.

Type Guards are especially useful when working with union types because a variable may represent more than one possible type. By checking the value before using type-specific properties or methods, we can write safer code and avoid invalid operations.

TypeScript recognizes several forms of type guards, including `typeof`, `instanceof`, the `in` operator, equality checks, truthiness checks, and user-defined type guard functions.

**In simple words:** A Type Guard checks what type of value we are dealing with, so TypeScript can safely narrow its type.

### Common Type Guards

#### 1. `typeof` Type Guard

The `typeof` operator checks the runtime type of a value. It is commonly used with primitive types such as `string`, `number`, `boolean`, `bigint`, `symbol`, `undefined`, and `function`.

```typescript
function showValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, `typeof value === "string"` is the type guard.

#### 2. `instanceof` Type Guard

The `instanceof` operator checks whether an object was created from a particular class or constructor.

```typescript
class Admin {
  manageUsers(): void {
    console.log("Managing users...");
  }
}

class Customer {
  placeOrder(): void {
    console.log("Placing an order...");
  }
}

function handleUser(user: Admin | Customer): void {
  if (user instanceof Admin) {
    user.manageUsers();
  } else {
    user.placeOrder();
  }
}
```

Inside the `if` block, TypeScript knows that `user` is an `Admin`. Inside the `else` block, it knows that `user` is a `Customer`.

#### 3. `in` Operator Type Guard

The `in` operator checks whether a property exists in an object. It can help distinguish between object types that have different properties.

```typescript
type User = {
  name: string;
  email: string;
};

type AdminUser = {
  name: string;
  email: string;
  permissions: string[];
};

function showUser(user: User | AdminUser): void {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.name);
  }
}
```

The expression `"permissions" in user` is the type guard. In the `if` block, TypeScript knows that `user` has the `permissions` property and narrows it to `AdminUser`.

#### 4. Equality Type Guard

Equality checks such as `===` and `!==` can narrow a variable when it is compared with a specific value.

```typescript
function printStatus(status: "success" | "error"): void {
  if (status === "success") {
    console.log("Operation completed!");
  } else {
    console.log("Something went wrong.");
  }
}
```

When `status === "success"` is true, TypeScript knows that `status` is the literal type `"success"`.

#### 5. Truthiness Type Guard

A truthiness check can narrow values by checking whether they are truthy or falsy.

```typescript
function printMessage(message: string | null): void {
  if (message) {
    console.log(message.toUpperCase());
  } else {
    console.log("No message provided.");
  }
}
```

Inside the `if` block, TypeScript knows that `message` is a string rather than `null`.

#### 6. Custom Type Guard

A custom type guard is a user-defined function that checks whether a value matches a particular type. Its return type uses the `is` keyword.

```typescript
type User = {
  name: string;
};

type AdminUser = {
  name: string;
  permissions: string[];
};

function isAdmin(user: User | AdminUser): user is AdminUser {
  return "permissions" in user;
}

function showDetails(user: User | AdminUser): void {
  if (isAdmin(user)) {
    console.log(user.permissions);
  } else {
    console.log(user.name);
  }
}
```

**Understanding `user is AdminUser`:**

- `isAdmin()` returns a boolean value.
- `user is AdminUser` is a type predicate in the function's return type.
- When the function returns `true`, TypeScript treats `user` as `AdminUser` in the corresponding branch.
- The function's implementation must perform a real check that supports the type it claims to identify.

## 4.3 Type Guard vs Type Narrowing

These two concepts are closely related, but they do not mean exactly the same thing.

| Concept | Meaning |
|---|---|
| Type Guard | A check or function that helps TypeScript identify a value's type. |
| Type Narrowing | The process of making a type more specific based on available information. |

**Example:**

```typescript
function checkValue(value: string | number): void {
  if (typeof value === "string") {
    // Type Guard: typeof value === "string"
    // Type Narrowing: value is now treated as string here.
    console.log(value.toUpperCase());
  }
}
```

**Remember:**

- Type Guard = The check.
- Type Narrowing = The result of the check.
- Type Guards are one common way to achieve type narrowing.

## 4.4 Important Points to Remember

1. Type Guards help TypeScript identify the type or structure of a value.
2. Type Narrowing makes a variable's possible type more specific.
3. `typeof` is commonly used to check primitive types.
4. `instanceof` checks whether an object belongs to a class or constructor.
5. The `in` operator checks whether a property exists in an object.
6. Equality checks can narrow literal types.
7. Truthiness checks can narrow values such as `string | null`.
8. Custom type guards use a type predicate such as `value is SomeType`.
9. Always perform a meaningful runtime check inside a custom type guard.
10. Type narrowing does not convert or modify the original value.

## 4.5 Quick Revision

| Type Guard | Purpose | Example |
|---|---|---|
| `typeof` | Checks primitive types | `typeof value === "string"` |
| `instanceof` | Checks an object's class/constructor | `value instanceof Admin` |
| `in` | Checks whether an object has a property | `"name" in user` |
| Equality | Checks a specific value | `status === "success"` |
| Truthiness | Checks whether a value is truthy or falsy | `if (message)` |
| Custom Type Guard | Defines a reusable type check | `function isAdmin(x): x is Admin` |

**Important:** `toFixed(2)` returns a string containing the formatted number. It does not permanently change the original number.

---

# 5. Type Assertion and `never` Type

## 5.1 What is Type Assertion?

**Definition:**

Type Assertion is a TypeScript feature that allows a developer to tell TypeScript what type a value should be treated as.

Sometimes TypeScript does not have enough information to determine the exact type of a value. The developer may know the actual type from the context. Type Assertion tells TypeScript:

> "I know the type of this value better than you. Treat this value as this specific type."

**Important:** Type Assertion does not change the actual value or its type at runtime. It only gives TypeScript information during development and compilation.

### Example

```typescript
let value: unknown = "Hello";

let message = value as string;

console.log(message);
```

Here:

```typescript
value as string
```

means:

> Treat `value` as a `string`.

The actual value is still:

```text
Hello
```

Type Assertion does not convert the value into a string.

---

## 5.2 Why Do We Need Type Assertion?

Consider this example:

```typescript
let value: unknown = "Hello";

console.log(value.toUpperCase());
```

TypeScript reports an error because the type of `value` is `unknown`.

TypeScript does not know whether the value is actually a string.

We can use Type Assertion when we know from the context that the value is a string.

```typescript
let value: unknown = "Hello";

let message = value as string;

console.log(message.toUpperCase());
```

Now TypeScript treats `message` as a string.

---

## 5.3 Type Assertion Syntax

The most common syntax is:

```typescript
value as Type
```

### Example

```typescript
let data: unknown = "Sabeer";

let username = data as string;

console.log(username);
```

### Alternative Syntax

TypeScript also supports angle-bracket syntax:

```typescript
<Type>value
```

Example:

```typescript
let data: unknown = "Sabeer";

let username = <string>data;

console.log(username);
```

### Recommended Syntax

The `as` syntax is generally recommended, especially when working with React and TSX.

Why?

Because angle brackets can conflict with JSX syntax.

Therefore, prefer:

```typescript
const value = data as string;
```

instead of:

```typescript
const value = <string>data;
```

---

## 5.4 Real-World Example: DOM Element

Consider this HTML:

```html
<input id="username" type="text">
```

TypeScript:

```typescript
const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```

Without Type Assertion, TypeScript sees:

```typescript
HTMLElement | null
```

After the assertion:

```typescript
HTMLInputElement
```

Therefore, we can safely access properties specific to an input element:

```typescript
input.value;
input.checked;
input.files;
```

### Login Form Example

HTML:

```html
<input id="email" type="email">
<input id="password" type="password">
```

TypeScript:

```typescript
const emailInput =
  document.getElementById("email") as HTMLInputElement;

const passwordInput =
  document.getElementById("password") as HTMLInputElement;

console.log(emailInput.value);
console.log(passwordInput.value);
```

This type of Type Assertion is useful in:

- Login forms
- Signup forms
- Search forms
- Contact forms
- Dashboard filters
- Admin panels

---

## 5.5 Important Warning About Type Assertion

Type Assertion does **not** verify that your assumption is correct.

For example, suppose the HTML is actually:

```html
<div id="username"></div>
```

But we write:

```typescript
const input =
  document.getElementById("username") as HTMLInputElement;
```

TypeScript trusts our assertion even though the actual element is a `div`.

This can cause problems at runtime.

Therefore, use Type Assertion only when you have a valid reason to know the actual type.

### Simple Mental Model

Think of Type Assertion as a promise from the developer to TypeScript:

> "Trust me, I know what this value is."

---

## 5.6 Type Assertion with API Data

Type Assertion is often used when working with API responses.

Consider a custom `User` type:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};
```

Suppose we have data:

```typescript
let apiData: unknown = {
  id: 1,
  name: "Sabeer",
  email: "sabeer@example.com"
};
```

We can assert the data as `User`:

```typescript
const user = apiData as User;

console.log(user.name);
console.log(user.email);
```

Type Assertion can be useful when working with:

- REST APIs
- JSON data
- Backend responses
- `localStorage`
- Third-party APIs

For example:

```typescript
const storedUser = localStorage.getItem("user");
```

`localStorage.getItem()` returns:

```typescript
string | null
```

Therefore, we should handle the possibility of `null` safely before parsing or asserting the resulting data.

---

## 5.7 Custom Type Assertion

We can create our own types and use Type Assertion with them.

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

const data: unknown = {
  id: 101,
  name: "Laptop",
  price: 150000
};

const product = data as Product;

console.log(product.name);
console.log(product.price);
```

This can be useful in applications such as:

- E-commerce systems
- Product dashboards
- Inventory systems
- Business management systems

---

## 5.8 Type Assertion vs Type Narrowing

Type Assertion and Type Narrowing are related, but they are different concepts.

### Type Narrowing

Type Narrowing uses logic and conditions to help TypeScript determine the type.

```typescript
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

Here TypeScript narrows:

```typescript
string | number
```

to:

```typescript
string
```

inside the `if` block.

### Type Assertion

Type Assertion tells TypeScript which type to use:

```typescript
const value = data as string;
```

### Remember

| Concept | Meaning |
|---|---|
| Type Narrowing | TypeScript determines the type using logic and checks. |
| Type Assertion | The developer tells TypeScript what type to treat the value as. |

**Simple mental model:**

> Type Narrowing = TypeScript figures it out.

> Type Assertion = Developer tells TypeScript.

---

# 5.9 What is `never` Type?

**Definition:**

The `never` type represents values that never occur.

It is used when something can never produce a value or can never complete normally.

A function commonly has a `never` return type when it:

1. Always throws an error.
2. Runs forever.
3. Reaches an impossible state.

### Example

```typescript
function throwError(): never {
  throw new Error("Something went wrong");
}
```

This function never successfully returns a value because it always throws an error.

---

## 5.10 `never` vs `void`

`void` and `never` are different.

### `void`

A `void` function does not return a meaningful value, but it finishes normally.

```typescript
function logout(): void {
  console.log("User logged out");
}
```

The function finishes execution normally.

### `never`

A `never` function never completes normally.

```typescript
function crash(): never {
  throw new Error("Application crashed");
}
```

The function throws an error and does not continue normally.

### Mental Model

```text
void
↓
Returns nothing
↓
Finishes normally
```

```text
never
↓
Never returns
↓
Does not finish normally
```

---

## 5.11 Real-World Example: Authentication Error

```typescript
function unauthorized(): never {
  throw new Error("You are not authorized.");
}

function accessDashboard(isLoggedIn: boolean): string {
  if (!isLoggedIn) {
    unauthorized();
  }

  return "Welcome to the Dashboard";
}
```

If `isLoggedIn` is `false`:

```typescript
unauthorized();
```

throws an error and stops execution.

This concept is useful in:

- Authentication
- Authorization
- Protected routes
- Admin dashboards
- Permission systems
- Error handling

---

## 5.12 Real-World Example: Validation

```typescript
function validationError(message: string): never {
  throw new Error(message);
}

function validateEmail(email: string): string {
  if (!email.includes("@")) {
    validationError("Invalid email address");
  }

  return email;
}
```

If the email is invalid:

```typescript
validationError(...)
```

throws an error and stops execution.

If the email is valid, the function continues and returns the email.

This pattern is useful for:

- Form validation
- User registration
- Login validation
- Data validation
- Application logic

---

## 5.13 Infinite Loop

A function that never stops can also have the `never` return type.

```typescript
function keepServerRunning(): never {
  while (true) {
    console.log("Server is running...");
  }
}
```

The function never reaches a return statement because the loop continues forever.

**Important:** Do not run an infinite loop directly during normal practice unless you know how to stop the process.

---

## 5.14 Exhaustive Checking with `never`

The `never` type is also useful for exhaustive checking.

Consider:

```typescript
type Role = "admin" | "staff" | "customer";

function getAccess(role: Role): string {
  switch (role) {
    case "admin":
      return "Full Access";

    case "staff":
      return "Limited Access";

    case "customer":
      return "Customer Access";
  }
}
```

Now imagine we later add:

```typescript
"manager"
```

to the `Role` union.

If we forget to add a `manager` case, we can use `never` to help TypeScript detect the missing case.

### `assertNever()` Helper

```typescript
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
```

Now use it in the `default` case:

```typescript
function getAccess(role: Role): string {
  switch (role) {
    case "admin":
      return "Full Access";

    case "staff":
      return "Limited Access";

    case "customer":
      return "Customer Access";

    default:
      return assertNever(role);
  }
}
```

If the `Role` union is later changed to include:

```typescript
"manager"
```

and we forget to handle it in the `switch`, TypeScript can report an error because `role` is no longer `never`.

---

## 5.15 Why is Exhaustive Checking Useful?

Exhaustive checking helps prevent bugs when an application has many possible states.

For example:

- Authentication roles
- User permissions
- Order statuses
- Payment statuses
- API states
- Error states
- Application states
- State management

If a new case is added to a union type, TypeScript can help us remember to handle it.

The `never` type therefore acts as a safety check for situations that should be impossible.

---

## 5.16 Real-World Example: Order Status

Consider an e-commerce or business management system:

```typescript
type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";
```

We can handle each status:

```typescript
function getOrderMessage(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is waiting for processing.";

    case "processing":
      return "Order is being processed.";

    case "completed":
      return "Order has been completed.";

    case "cancelled":
      return "Order has been cancelled.";

    default:
      return assertNever(status);
  }
}
```

If we later add:

```typescript
"refunded"
```

to `OrderStatus`, TypeScript can help us identify that the new status has not been handled.

This is a practical example of exhaustive checking in:

- E-commerce applications
- Order management systems
- Business management systems
- Payment systems
- Admin dashboards

---

## 5.17 `unknown`, Type Assertion, and `never`

These three concepts are different.

### `unknown`

Means:

> "I don't know the type of this value yet."

```typescript
let data: unknown;
```

We must check the type before performing type-specific operations.

### Type Assertion

Means:

> "I know what this value is. Treat it as this type."

```typescript
const user = data as User;
```

### `never`

Means:

> "This situation/value should never occur."

```typescript
function fail(): never {
  throw new Error("Something went wrong");
}
```

### Quick Comparison

| Concept | Meaning |
|---|---|
| `unknown` | Type is not known yet. |
| Type Assertion | Developer tells TypeScript what type to treat the value as. |
| `never` | Represents a situation that never occurs or never completes normally. |

---

## 5.18 Quick Revision

### Type Assertion

```typescript
const input =
  document.getElementById("email") as HTMLInputElement;
```

Type Assertion tells TypeScript to treat the value as a specific type.

It does **not** change the runtime value.

### `never`

```typescript
function fail(message: string): never {
  throw new Error(message);
}
```

The `never` type represents something that never completes normally.

### `void`

```typescript
function logout(): void {
  console.log("Logged out");
}
```

`void` means the function does not return a meaningful value, but it can finish normally.

### Important Difference

```text
Type Assertion
→ Developer tells TypeScript the expected type.

Type Narrowing
→ TypeScript determines a more specific type using checks.

void
→ Function finishes normally but returns no meaningful value.

never
→ Function never completes normally.
```

---

## 5.19 Practice Exercises for Type Assertion and `never`

Try solving these exercises yourself in VS Code before checking the solutions.

### Exercise 11: Basic Type Assertion

Create an `unknown` variable containing:

```text
"Hello TypeScript"
```

Use Type Assertion to treat it as a `string`.

Then call:

```typescript
toUpperCase()
```

Expected output:

```text
HELLO TYPESCRIPT
```

### Exercise 12: DOM Type Assertion

Create this HTML:

```html
<input id="email" type="email">
```

Use Type Assertion to tell TypeScript that the element is an:

```typescript
HTMLInputElement
```

Then access:

```typescript
input.value
```

### Exercise 13: Custom User Type Assertion

Create:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};
```

Create an `unknown` object containing user data.

Use Type Assertion to treat the object as `User`.

Display:

- User name
- User email

### Exercise 14: API Response Assertion

Create an `unknown` API-like response:

```typescript
{
  id: 1,
  name: "Sabeer",
  email: "sabeer@example.com"
}
```

Create a `User` type and use Type Assertion to treat the response as a `User`.

Display the user's name and email.

### Exercise 15: `never` Error Function

Create a function:

```typescript
showError(message: string): never
```

The function should throw an error using the provided message.

### Exercise 16: Authentication with `never`

Create a function that checks whether a user is logged in.

If the user is not logged in:

- Call a `never` function.
- Throw an authentication error.

If the user is logged in:

```text
Access granted
```

should be returned.

### Exercise 17: Validation with `never`

Create a function named:

```typescript
validateAge()
```

If the age is less than `18`, call a `never` function that throws:

```text
You must be 18 or older.
```

Otherwise return:

```text
Access allowed
```

### Exercise 18: Infinite Loop

Create:

```typescript
function startProcess(): never
```

Inside the function, create an infinite loop.

Do not run the function directly unless you know how to stop the process.

### Exercise 19: Exhaustive Checking

Create:

```typescript
type Status = "pending" | "approved" | "rejected";
```

Create a function that handles all three statuses using `switch`.

Create an:

```typescript
assertNever()
```

function and use it in the `default` case.

### Exercise 20: Order Status

Create:

```typescript
type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";
```

Create a function that handles every status.

Use:

```typescript
assertNever()
```

in the `default` case.

Then add:

```typescript
"refunded"
```

to the union and observe what happens if you do not add a corresponding `case`.

---

# 6. Practice Exercises

Try solving these exercises yourself in VS Code before checking the solutions.

## Exercise 1: Type Annotation

Create variables for the following:

1. A username with the value `"Sabeer"`.
2. An age with the value `25`.
3. A login status with the value `true`.

Use appropriate type annotations.

## Exercise 2: Type Inference

Create three variables without explicitly writing their types:

1. `city` with the value `"Karachi"`.
2. `price` with the value `1500`.
3. `isAvailable` with the value `false`.

What types will TypeScript infer?

## Exercise 3: Function Parameters

Create a function named `multiply` that:

- Accepts two number parameters.
- Multiplies them.
- Returns the result as a number.

Call the function with `10` and `5`.

Expected output:

```text
50
```

## Exercise 4: Void Function

Create a function named `showWelcome` that:

- Accepts a string parameter named `username`.
- Displays `Welcome, username!` using `console.log()`.
- Uses `void` as its return type.

Call it with `"Sabeer"`.

## Exercise 5: Union Types

Create a variable named `userId` that accepts:

- A number
- A string

Assign both types of values to it.

Try assigning `true` and observe the TypeScript error.

## Exercise 6: Union Types in Functions

Create a function named `displayInfo` that accepts either a string or a number.

Display the received value using `console.log()`.

Test it with:

```typescript
displayInfo("Sabeer");
displayInfo(25);
```

## Exercise 7: Type Narrowing

Create a function named `formatValue` that:

- Accepts a string or a number.
- Checks the type using `typeof`.
- Converts strings to uppercase.
- Formats numbers to two decimal places.

Expected output:

```text
HELLO
25.00
```

## Exercise 8: Any Type

Create a variable named `data` with the `any` type.

Assign these values one by one:

1. `"Hello"`
2. `100`
3. `true`
4. `[10, 20, 30]`

Display each value using `console.log()`.

## Exercise 9: Any vs Union

Create two variables:

```typescript
let value1: string | number;
let value2: any;
```

Try assigning:

- A string
- A number
- A boolean

Which variable allows all three assignments?

Explain why.

## Exercise 10: Unknown Type

Create a variable with the `unknown` type and assign it a string.

Use `typeof` to check whether it is a string.

If it is a string, convert it to uppercase.

Expected output:

```text
TYPESCRIPT
```

---

# 7. Solutions

Try all the exercises before looking at these solutions.

## Solution 1: Type Annotation

```typescript
let username: string = "Sabeer";
let age: number = 25;
let isLoggedIn: boolean = true;

console.log(username);
console.log(age);
console.log(isLoggedIn);
```

## Solution 2: Type Inference

```typescript
let city = "Karachi";
let price = 1500;
let isAvailable = false;

console.log(city);
console.log(price);
console.log(isAvailable);
```

Inferred types:

- `city` → string
- `price` → number
- `isAvailable` → boolean

## Solution 3: Function Parameters

```typescript
function multiply(a: number, b: number): number {
  return a * b;
}

const result = multiply(10, 5);

console.log(result);
```

## Solution 4: Void Function

```typescript
function showWelcome(username: string): void {
  console.log(`Welcome, ${username}!`);
}

showWelcome("Sabeer");
```

## Solution 5: Union Types

```typescript
let userId: string | number;

userId = 101;
console.log(userId);

userId = "USER101";
console.log(userId);

// userId = true; // Error
```

## Solution 6: Union Types in Functions

```typescript
function displayInfo(value: string | number): void {
  console.log(value);
}

displayInfo("Sabeer");
displayInfo(25);
```

## Solution 7: Type Narrowing

```typescript
function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

formatValue("hello");
formatValue(25);
```

## Solution 8: Any Type

```typescript
let data: any = "Hello";
console.log(data);

data = 100;
console.log(data);

data = true;
console.log(data);

data = [10, 20, 30];
console.log(data);
```

## Solution 9: Any vs Union

```typescript
let value1: string | number;
let value2: any;

value1 = "Hello";
value1 = 100;
// value1 = true; // Error

value2 = "Hello";
value2 = 100;
value2 = true; // Allowed
```

`value1` accepts only strings and numbers, while `value2` accepts almost any type because it uses `any`.

## Solution 10: Unknown Type

```typescript
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

## Solution 11: Basic Type Assertion

```typescript
let value: unknown = "Hello TypeScript";

const message = value as string;

console.log(message.toUpperCase());
```

Output:

```text
HELLO TYPESCRIPT
```

## Solution 12: DOM Type Assertion

```typescript
const input =
  document.getElementById("email") as HTMLInputElement;

console.log(input.value);
```

## Solution 13: Custom User Type Assertion

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const data: unknown = {
  id: 1,
  name: "Sabeer",
  email: "sabeer@example.com"
};

const user = data as User;

console.log(user.name);
console.log(user.email);
```

## Solution 14: API Response Assertion

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const apiResponse: unknown = {
  id: 1,
  name: "Sabeer",
  email: "sabeer@example.com"
};

const user = apiResponse as User;

console.log(user.name);
console.log(user.email);
```

## Solution 15: `never` Error Function

```typescript
function showError(message: string): never {
  throw new Error(message);
}

showError("Something went wrong.");
```

## Solution 16: Authentication with `never`

```typescript
function unauthorized(): never {
  throw new Error("You are not authorized.");
}

function checkAuthentication(isLoggedIn: boolean): string {
  if (!isLoggedIn) {
    unauthorized();
  }

  return "Access granted";
}

console.log(checkAuthentication(true));
```

## Solution 17: Validation with `never`

```typescript
function ageError(): never {
  throw new Error("You must be 18 or older.");
}

function validateAge(age: number): string {
  if (age < 18) {
    ageError();
  }

  return "Access allowed";
}

console.log(validateAge(20));
```

## Solution 18: Infinite Loop

```typescript
function startProcess(): never {
  while (true) {
    console.log("Process is running...");
  }
}
```

Do not call the function directly unless you know how to stop the process.

## Solution 19: Exhaustive Checking

```typescript
type Status = "pending" | "approved" | "rejected";

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case "pending":
      return "Status is pending.";

    case "approved":
      return "Status is approved.";

    case "rejected":
      return "Status is rejected.";

    default:
      return assertNever(status);
  }
}

console.log(getStatusMessage("pending"));
```

## Solution 20: Order Status

```typescript
type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function getOrderMessage(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is waiting for processing.";

    case "processing":
      return "Order is being processed.";

    case "completed":
      return "Order has been completed.";

    case "cancelled":
      return "Order has been cancelled.";

    default:
      return assertNever(status);
  }
}

console.log(getOrderMessage("pending"));
```

If you add:

```typescript
"refunded"
```

to `OrderStatus` but do not add a `case` for it, TypeScript can report an error at:

```typescript
assertNever(status);
```

This is the benefit of exhaustive checking.

---

# 8. Quick Revision

Use this section to revise all five chapters quickly.

| Concept | Meaning | Example |
|---|---|---|
| TypeScript | JavaScript with static type checking | `let age: number = 25;` |
| Type Annotation | Explicitly specify a type | `let name: string = "Sabeer";` |
| Type Inference | TypeScript automatically determines a type | `let age = 25;` |
| Union Type | Allows specified multiple types | `string \| number` |
| `typeof` | Checks the type of a value at runtime | `typeof value` |
| Type Narrowing | Makes a type more specific after checking | `if (typeof value === "string")` |
| Type Guard | A check that helps TypeScript identify a value's type | `typeof value === "string"` |
| `instanceof` | Checks an object's class/constructor | `value instanceof Admin` |
| `in` | Checks whether an object has a property | `"name" in user` |
| `any` | Allows almost any type and disables most type checking | `let value: any = 100;` |
| `unknown` | Accepts any type but requires checking before type-specific operations | `let value: unknown;` |
| `void` | Indicates no meaningful function return value | `function greet(): void {}` |
| Type Assertion | Tells TypeScript to treat a value as a specific type | `value as string` |
| `never` | Represents a value/situation that never occurs or never completes normally | `function fail(): never { throw new Error(); }` |
| `assertNever()` | Helps perform exhaustive checking | `return assertNever(status);` |

## Important Rules to Remember

1. TypeScript adds static type checking to JavaScript.
2. TypeScript code is generally compiled into JavaScript before execution.
3. Type annotation explicitly defines a type.
4. Type inference automatically determines a type.
5. TypeScript does not automatically change an inferred variable's type when you assign a different type.
6. Union types allow only the types specified in the union.
7. The pipe symbol (`|`) means OR.
8. Use `typeof` to check primitive types.
9. Type narrowing allows safe operations on a more specific type.
10. Type Guards help TypeScript identify the type or structure of a value.
11. Type Narrowing is the process of making a type more specific.
12. `any` disables most type checking and should be used carefully.
13. `unknown` is generally safer than `any`.
14. `void` is used when a function does not return a meaningful value.
15. Type Assertion tells TypeScript to treat a value as a specific type.
16. Type Assertion does not change or convert the actual runtime value.
17. Use Type Assertion only when you have a valid reason to know the actual type.
18. `never` represents values or situations that should never occur.
19. A `never` function does not complete normally.
20. A `void` function can finish normally even though it does not return a meaningful value.
21. `assertNever()` can be used for exhaustive checking.
22. Exhaustive checking helps detect missing cases when working with union types.
23. Type Assertion and Type Narrowing are different concepts.
24. Type Narrowing uses checks and logic, while Type Assertion is a developer-provided instruction to TypeScript.

---

## End of Notes

**Chapters Completed:**

- [x] Chapter 1: Introduction to TypeScript
- [x] Chapter 2: Type Annotation and Type Inference
- [x] Chapter 3: Union Types and Any Type
- [x] Chapter 4: Type Narrowing and Type Guards
- [x] Chapter 5: Type Assertion and `never` Type

**Recommended Next Topics:**

- Arrays in TypeScript
- Objects in TypeScript
- Type Aliases
- Interfaces
- Literal Types
- Functions in TypeScript

Keep practising by writing the examples yourself in Visual Studio Code. Understanding the concepts and writing the code independently is more important than simply memorizing the syntax.