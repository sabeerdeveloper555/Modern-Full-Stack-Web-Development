# React Quick Start Notes

These notes cover the React concepts I have learned so far from the React Quick Start documentation.

---

# 1. React Components

## What is a Component?

A **component** is a reusable piece of UI in React.

In simple words:

> A component is a JavaScript function that returns JSX and describes what should appear on the screen.

### Basic Component

```jsx
function MyHeading() {
  return <h1>Hello React</h1>;
}
```

Here:

- `MyHeading` is the component name.
- It is a JavaScript function.
- The function returns JSX.
- The `<h1>` is displayed on the screen when the component is rendered.

---

## Rendering a Component

A React component is used with JSX syntax:

```jsx
<MyHeading />
```

For example:

```jsx
function App() {
  return (
    <>
      <MyHeading />
    </>
  );
}
```

### Important Rule

React component names should start with an **uppercase letter**.

Correct:

```jsx
<MyHeading />
<UserCard />
<LoginStatus />
```

Incorrect:

```jsx
<myHeading />
<userCard />
<loginStatus />
```

Why?

React uses capitalization to distinguish between:

- HTML elements → lowercase
- React components → uppercase

For example:

```jsx
<h1>Hello</h1>
```

`h1` is an HTML element.

```jsx
<MyHeading />
```

`MyHeading` is a React component.

---

# 2. Creating Multiple Components

React applications are usually divided into multiple small components.

Example:

```jsx
function MyHeading() {
  return <h1>Hello React</h1>;
}

function MyParagraph() {
  return <p>Learn React</p>;
}

function MyButton() {
  return <button>Click Me</button>;
}
```

Each component has its own responsibility.

```text
MyHeading
    ↓
Heading UI

MyParagraph
    ↓
Paragraph UI

MyButton
    ↓
Button UI
```

This makes the application easier to understand, maintain, and reuse.

---

# 3. Nesting Components

Components can be placed inside other components.

This is called **nesting components**.

Example:

```jsx
function MyHeading() {
  return <h1>Hello React</h1>;
}

function MyParagraph() {
  return <p>Learn React</p>;
}

function MyButton() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <>
      <MyHeading />
      <MyParagraph />
      <MyButton />
    </>
  );
}
```

Here:

```text
App
 ├── MyHeading
 ├── MyParagraph
 └── MyButton
```

`App` is the parent component.

`MyHeading`, `MyParagraph`, and `MyButton` are child components.

---

# 4. JSX

## What is JSX?

**JSX** is a syntax that allows us to write HTML-like markup inside JavaScript.

Example:

```jsx
function MyHeading() {
  return <h1>Hello React</h1>;
}
```

The `<h1>Hello React</h1>` part looks like HTML, but it is written inside a JavaScript function.

### Simple Definition

> JSX is a syntax extension for JavaScript that allows us to describe the UI using HTML-like syntax.

---

# 5. JSX Must Be Properly Closed

In JSX, elements must be properly closed.

For example:

```jsx
<p>Hello</p>
```

For elements without a closing tag, use `/`:

```jsx
<img src="image.jpg" />
```

```jsx
<br />
```

```jsx
<input />
```

Incorrect:

```jsx
<img src="image.jpg">
```

Correct:

```jsx
<img src="image.jpg" />
```

---

# 6. Returning Multiple JSX Elements

A component cannot directly return multiple JSX elements without a parent.

This is not valid:

```jsx
function UserCard() {
  return (
    <h2>User Profile</h2>
    <p>Sabeer Alam</p>
  );
}
```

The elements need a common parent.

One option is a `<div>`:

```jsx
function UserCard() {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Sabeer Alam</p>
    </div>
  );
}
```

---

# 7. React Fragment

Instead of adding an unnecessary `<div>`, we can use a **Fragment**.

Syntax:

```jsx
<>
  ...
</>
```

Example:

```jsx
function UserCard() {
  return (
    <>
      <h2>User Profile</h2>
      <p>Sabeer Alam</p>
      <p>Full Stack Development</p>
    </>
  );
}
```

The Fragment allows multiple JSX elements to be returned without adding an extra HTML element to the DOM.

### Simple Definition

> A Fragment is used to group multiple JSX elements without creating an extra HTML element.

---

# 8. Styling JSX with `className`

In normal HTML, we use:

```html
<div class="user-card">
```

In JSX, we use:

```jsx
<div className="user-card">
```

React uses `className` instead of `class`.

Example:

```jsx
<h2 className="user-title">User Profile</h2>
```

```jsx
<p className="user-name">Sabeer Alam</p>
```

---

# 9. External CSS in React

We can import a CSS file into our React component.

Example:

```jsx
import "./App.css";
```

Then we can create CSS classes:

```css
.user-title {
  color: red;
  font-size: 30px;
}

.user-name {
  font-size: 20px;
  font-weight: bold;
}

.my-btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

And use them in JSX:

```jsx
<h2 className="user-title">User Profile</h2>

<p className="user-name">Sabeer Alam</p>

<button className="my-btn">Click Me</button>
```

---

# 10. Displaying JavaScript Data in JSX

One of the most important things in React is displaying JavaScript data inside JSX.

We use curly braces:

```jsx
{}
```

### Example

```jsx
const name = "Sabeer Alam";

return <p>{name}</p>;
```

The curly braces tell React:

> "I want to use JavaScript here."

---

## JSX and JavaScript

Without `{}`:

```jsx
<p>name</p>
```

React displays:

```text
name
```

With `{}`:

```jsx
<p>{name}</p>
```

React evaluates the JavaScript variable:

```text
Sabeer Alam
```

---

# 11. JavaScript Expressions Inside JSX

We can use JavaScript expressions inside `{}`.

Example:

```jsx
const age = 24;

return <p>{age + 1}</p>;
```

Output:

```text
25
```

Another example:

```jsx
const name = "Sabeer Alam";

return <p>{name.toUpperCase()}</p>;
```

Output:

```text
SABEER ALAM
```

We can also use a ternary expression:

```jsx
const age = 24;

return <p>{age >= 18 ? "Adult" : "Minor"}</p>;
```

Output:

```text
Adult
```

### Important

Curly braces allow us to use **JavaScript expressions** inside JSX.

---

# 12. Objects and JSX

We can store related data inside a JavaScript object.

Instead of:

```jsx
const name = "Sabeer Alam";
const role = "Full Stack Development";
const age = 24;
```

We can create one object:

```jsx
const user = {
  name: "Sabeer Alam",
  role: "Full Stack Development",
  age: 24,
};
```

Now we can access the properties:

```jsx
{user.name}
```

```jsx
{user.role}
```

```jsx
{user.age}
```

Example:

```jsx
function UserCard() {
  const user = {
    name: "Sabeer Alam",
    role: "Full Stack Development",
    age: 24,
  };

  return (
    <>
      <p>{user.name}</p>
      <p>{user.role}</p>
      <p>Age: {user.age}</p>
    </>
  );
}
```

---

# 13. Accessing Object Properties

JavaScript objects contain properties.

Example:

```jsx
const user = {
  name: "Sabeer Alam",
  age: 24,
};
```

We can access properties using dot notation:

```jsx
user.name
```

```jsx
user.age
```

Inside JSX:

```jsx
<p>{user.name}</p>
<p>{user.age}</p>
```

So:

```text
user
 ↓
object

user.name
 ↓
"Sabeer Alam"

user.age
 ↓
24
```

---

# 14. Dynamic JSX Attributes

JSX attributes can also receive JavaScript values.

Example:

```jsx
const imageUrl = "https://example.com/photo.jpg";

<img src={imageUrl} />
```

The `{}` tells JSX that `imageUrl` is a JavaScript variable.

---

## Static Attribute vs Dynamic Attribute

Static value:

```jsx
<img src="image.jpg" />
```

Here the value is directly written as a string.

Dynamic value:

```jsx
<img src={user.imageUrl} />
```

Here React gets the value from the JavaScript object.

---

# 15. User Profile Example with an Image

We created a `UserCard` component:

```jsx
function UserCard() {
  const user = {
    name: "Sabeer Alam",
    imageUrl:
      "https://example.com/profile.jpg",
    role: "Full Stack Development",
    imageSize: 150,
    age: 24,
  };

  return (
    <>
      <h2 className="user-title">User Profile</h2>

      <p className="user-name">
        {user.name}
      </p>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
      />

      <p className="user-role">
        {user.role}
      </p>

      <p className="user-age">
        Age: {user.age}
      </p>
    </>
  );
}
```

This example combines several concepts:

- Component
- Object
- JSX
- JavaScript expressions
- Dynamic attributes
- `className`
- String concatenation

---

# 16. Dynamic `alt` Attribute

We can also use JavaScript expressions inside attributes.

Example:

```jsx
alt={"Photo of " + user.name}
```

If:

```jsx
user.name = "Sabeer Alam"
```

then JavaScript evaluates:

```js
"Photo of " + user.name
```

as:

```text
Photo of Sabeer Alam
```

So React receives:

```jsx
alt="Photo of Sabeer Alam"
```

---

# 17. Inline Dynamic Styles

React allows us to apply styles using the `style` attribute.

Example:

```jsx
<img
  style={{
    width: user.imageSize,
    height: user.imageSize,
  }}
/>
```

Here we have **two sets of curly braces**.

```jsx
style={{
  width: user.imageSize,
  height: user.imageSize,
}}
```

The first `{}` means:

> Enter JavaScript from JSX.

The second `{}` is the JavaScript object containing CSS properties.

Conceptually:

```jsx
style={
  {
    width: user.imageSize,
    height: user.imageSize,
  }
}
```

---

# 18. Why Are There Two `{}` in `style`?

This can look confusing at first.

```jsx
style={{
  width: 150,
  height: 150,
}}
```

Think of it like this:

```text
style={        → JSX enters JavaScript

  {            → JavaScript object starts

    width: 150,
    height: 150

  }            → JavaScript object ends

}              → JSX expression ends
```

So the outer `{}` belongs to JSX.

The inner `{}` is a JavaScript object.

---

# 19. Dynamic Image Size Example

Our object contains:

```jsx
const user = {
  name: "Sabeer Alam",
  imageSize: 150,
};
```

We can use this value for the image size:

```jsx
<img
  style={{
    width: user.imageSize,
    height: user.imageSize,
  }}
/>
```

If we change:

```jsx
imageSize: 200,
```

the image becomes:

```text
200px × 200px
```

This is an example of **dynamic styling**.

---

# 20. Conditional Rendering

## What is Conditional Rendering?

**Conditional rendering** means showing different UI based on a condition.

Simple definition:

> Conditional rendering means rendering different JSX depending on whether a condition is true or false.

For example:

```text
User logged in
      ↓
Show Welcome message

User not logged in
      ↓
Show Login message
```

React supports several ways to perform conditional rendering.

We learned:

1. `if...else`
2. Ternary operator `? :`
3. Logical AND `&&`

---

# 21. Conditional Rendering with `if...else`

Example:

```jsx
function LoginStatus() {
  const isLoggedIn = true;
  let content;

  if (isLoggedIn) {
    content = <h2>Welcome, Sabeer!</h2>;
  } else {
    content = <h2>Please login to continue</h2>;
  }

  return (
    <>
      {content}
    </>
  );
}
```

---

## How Does This Work?

First:

```jsx
const isLoggedIn = true;
```

We create a Boolean variable.

Its value can be:

```jsx
true
```

or:

```jsx
false
```

---

Then:

```jsx
let content;
```

We create a variable that will later store JSX.

---

Then:

```jsx
if (isLoggedIn) {
```

JavaScript checks whether `isLoggedIn` is true.

If it is true:

```jsx
content = <h2>Welcome, Sabeer!</h2>;
```

If it is false:

```jsx
content = <h2>Please login to continue</h2>;
```

---

Finally:

```jsx
{content}
```

renders the JSX stored inside the `content` variable.

---

# 22. Testing `if...else`

If:

```jsx
const isLoggedIn = true;
```

Output:

```text
Welcome, Sabeer!
```

If:

```jsx
const isLoggedIn = false;
```

Output:

```text
Please login to continue
```

The condition controls which JSX is displayed.

---

# 23. Conditional Rendering with Ternary Operator

A ternary operator is another way to write a simple `if...else`.

Basic JavaScript syntax:

```js
condition ? valueIfTrue : valueIfFalse
```

Example:

```jsx
function LoginStatus() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <h2>Welcome, Sabeer!</h2>
      ) : (
        <h2>Please login to continue</h2>
      )}
    </>
  );
}
```

---

# 24. Understanding the Ternary Operator

This:

```jsx
{isLoggedIn ? (
  <h2>Welcome, Sabeer!</h2>
) : (
  <h2>Please login to continue</h2>
)}
```

can be read as:

> If `isLoggedIn` is true, show "Welcome, Sabeer!", otherwise show "Please login to continue".

The symbols mean:

```text
? → if true

: → otherwise / if false
```

So:

```jsx
isLoggedIn ? Welcome : Login
```

means:

```text
isLoggedIn is true
    ↓
Welcome

isLoggedIn is false
    ↓
Login
```

---

# 25. `if...else` vs Ternary

Both methods can produce the same result.

### `if...else`

```jsx
let content;

if (isLoggedIn) {
  content = <h2>Welcome, Sabeer!</h2>;
} else {
  content = <h2>Please login to continue</h2>;
}

return <>{content}</>;
```

### Ternary

```jsx
return (
  <>
    {isLoggedIn ? (
      <h2>Welcome, Sabeer!</h2>
    ) : (
      <h2>Please login to continue</h2>
    )}
  </>
);
```

The ternary version is shorter.

### When to use it?

Use a ternary when you have a simple condition with **two possible outputs**.

```jsx
condition ? trueResult : falseResult
```

---

# 26. Conditional Rendering with `&&`

Sometimes we only want to render something when a condition is true.

We don't need an `else` part.

In this situation, we can use the logical AND operator:

```jsx
&&
```

Example:

```jsx
function LoginStatus() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <h2>Welcome, Sabeer!</h2>}
    </>
  );
}
```

---

# 27. How `&&` Works

The basic structure is:

```jsx
{condition && <JSX />}
```

It means:

> If the condition is true, render the JSX.

Example:

```jsx
const isLoggedIn = true;
```

Then:

```jsx
{isLoggedIn && <h2>Welcome, Sabeer!</h2>}
```

renders:

```text
Welcome, Sabeer!
```

---

If:

```jsx
const isLoggedIn = false;
```

then:

```jsx
{isLoggedIn && <h2>Welcome, Sabeer!</h2>}
```

does not render the `<h2>`.

So:

```text
true
 ↓
Show JSX

false
 ↓
Show nothing
```

---

# 28. Real-World Example of `&&`

Imagine an application where we want to show an admin panel only when the user is an admin.

```jsx
const isAdmin = true;

return (
  <>
    {isAdmin && <h2>Admin Panel</h2>}
  </>
);
```

If:

```jsx
isAdmin = true;
```

the Admin Panel is shown.

If:

```jsx
isAdmin = false;
```

nothing is shown.

This is useful when there is **no alternative UI needed**.

---

# 29. `if...else` vs Ternary vs `&&`

We can remember the three approaches like this:

## `if...else`

Use when the logic is more complex.

```jsx
if (condition) {
  // multiple statements
} else {
  // multiple statements
}
```

---

## Ternary `? :`

Use when there are two possible UI outputs.

```jsx
{condition ? <A /> : <B />}
```

Meaning:

```text
If true → A
If false → B
```

---

## Logical AND `&&`

Use when we only want something to appear when the condition is true.

```jsx
{condition && <A />}
```

Meaning:

```text
If true → A
If false → nothing
```

---

# 30. Quick Comparison

| Method | Use Case | False Result |
|---|---|---|
| `if...else` | More complex logic | Alternative code/UI |
| Ternary `? :` | Two possible UI results | Second UI |
| `&&` | Show something only when true | Nothing |

Example:

```jsx
// if...else
if (isLoggedIn) {
  content = <Welcome />;
} else {
  content = <Login />;
}
```

```jsx
// Ternary
{isLoggedIn ? <Welcome /> : <Login />}
```

```jsx
// &&
{isLoggedIn && <Welcome />}
```

---

# 31. Complete Practice Example

The following example combines the concepts learned so far:

```jsx
import "./App.css";

function MyHeading() {
  return <h1>Hello React</h1>;
}

function MyParagraph() {
  return <p>Learn React</p>;
}

function MyButton() {
  return <button className="my-btn">Click Me</button>;
}

function UserCard() {
  const user = {
    name: "Sabeer Alam",
    imageUrl:
      "https://example.com/profile.jpg",
    role: "Full Stack Development",
    imageSize: 150,
    age: 24,
  };

  return (
    <>
      <h2 className="user-title">User Profile</h2>

      <p className="user-name">
        {user.name}
      </p>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <p className="user-role">
        {user.role}
      </p>

      <p className="user-age">
        Age: {user.age}
      </p>
    </>
  );
}

function LoginStatus() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <h2>Welcome, Sabeer!</h2>}
    </>
  );
}

function App() {
  return (
    <>
      <MyHeading />
      <MyParagraph />
      <UserCard />
      <MyButton />
      <LoginStatus />
    </>
  );
}

export default App;
```

---

# 32. Important Concepts Learned

So far, I have learned:

### Components

```jsx
function MyComponent() {
  return <h1>Hello</h1>;
}
```

Components are reusable UI building blocks.

### Nesting Components

```jsx
function App() {
  return (
    <>
      <MyHeading />
      <UserCard />
      <MyButton />
    </>
  );
}
```

Components can be placed inside other components.

### JSX

```jsx
return <h1>Hello React</h1>;
```

JSX allows HTML-like syntax inside JavaScript.

### Fragment

```jsx
<>
  <h1>Hello</h1>
  <p>Learn React</p>
</>
```

Fragments group multiple JSX elements without adding an extra DOM element.

### `className`

```jsx
<h1 className="title">Hello</h1>
```

React uses `className` instead of HTML's `class`.

### JavaScript in JSX

```jsx
<p>{name}</p>
```

Curly braces allow JavaScript expressions inside JSX.

### Objects

```jsx
const user = {
  name: "Sabeer Alam",
  age: 24,
};
```

Object properties can be displayed using:

```jsx
{user.name}
{user.age}
```

### Dynamic Attributes

```jsx
<img src={user.imageUrl} />
```

JavaScript values can be used inside JSX attributes.

### Dynamic Styles

```jsx
style={{
  width: user.imageSize,
  height: user.imageSize,
}}
```

Styles can also use dynamic JavaScript values.

### Conditional Rendering

React can conditionally render UI using:

```jsx
if...else
```

```jsx
condition ? <A /> : <B />
```

```jsx
condition && <A />
```

---

# 33. Key Things to Remember

### Rule 1

React component names should start with an uppercase letter.

```jsx
function UserCard() {}
```

---

### Rule 2

JSX elements must be properly closed.

```jsx
<img />
```

---

### Rule 3

Use `className` instead of `class`.

```jsx
<div className="card"></div>
```

---

### Rule 4

Use `{}` when you want to use JavaScript inside JSX.

```jsx
<p>{user.name}</p>
```

---

### Rule 5

JSX attributes can use JavaScript expressions.

```jsx
src={user.imageUrl}
```

---

### Rule 6

Inline React styles use a JavaScript object.

```jsx
style={{
  width: 150,
  height: 150,
}}
```

---

### Rule 7

Use ternary when you have two possible results.

```jsx
{condition ? <A /> : <B />}
```

---

### Rule 8

Use `&&` when you only want to render something when a condition is true.

```jsx
{condition && <A />}
```

---

# 34. Mental Model

A useful way to understand what we have learned is:

```text
React Application
       ↓
    Components
       ↓
       JSX
       ↓
 JavaScript Data
       ↓
   Dynamic UI
       ↓
Conditional Rendering
```

For example:

```text
User Object
    ↓
user.name
    ↓
JSX
    ↓
<p>{user.name}</p>
    ↓
Screen
    ↓
Sabeer Alam
```

And for conditional rendering:

```text
isLoggedIn
    ↓
   true
    ↓
Welcome message

isLoggedIn
    ↓
   false
    ↓
Login message / Nothing
```

---

# 35. Short Revision

```jsx
// Component
function MyComponent() {
  return <h1>Hello</h1>;
}

// Use component
<MyComponent />

// JavaScript in JSX
<p>{name}</p>

// Object data
<p>{user.name}</p>

// Dynamic attribute
<img src={user.imageUrl} />

// Dynamic style
<div style={{ width: user.imageSize }} />

// if...else
if (condition) {
  // true
} else {
  // false
}

// Ternary
{condition ? <A /> : <B />}

// Logical AND
{condition && <A />}
```

These are the main React fundamentals covered so far.