// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress: 'Karachi'
// };

// Adding data
// user.age = 24;

// Updating data
// user.userEmail = 'alam@gmail.com';
// user['userAddress'] = 'Islamabad'
// console.log(user);

// console.log(user);
// console.log(user.userEmail);
// console.log(user.userContact);
// console.log(user['userStatus']);
// console.log(user['userAddress']);


// Destructuring
// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress: 'Karachi'
// };

// let {userEmail, userAddress} = user;
// console.log(userEmail, userAddress);

// let userName = 'Sabeer Alam';
// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress: 'Karachi',
//     userName
// };


// Renaming Varaibles
// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress: 'Karachi',
//     userName: 'Sabeer Alam'
// };

// let {userEmail: email, userAddress: address} = user;
// console.log(email,"\n",address);

// Rest Operator

// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress: 'Karachi',
//     userName: 'Sabeer Alam'
// };

// let{userEmail, ...otherDetails} = user;
// console.log(userEmail);
// console.log(otherDetails);

// Nested Destructuring with Objects in JavaScript

// let user = {
//     userEmail: 'sabeer@gmail.com',
//     userContact: 999999888888,
//     userStatus: true,
//     userAddress:{
//         cityName: 'Karachi',
//         state: 'Sindh',
//         country: 'Pakistan'
//     },
//     userName: 'Sabeer Alam'
// };

// let {userAddress:{cityName, state}} = user;

// console.log(cityName);
// console.log(state);


// Array Destructuring
// const colors = ["red", "green", "blue"];

// const[firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// Skipping Items
// const numbers = [10, 20, 30, 40, 50];
// const [, , third] = numbers;
// console.log(third);

// Spread Operator
// const numbers = [10, 20, 30, 40, 50];
// const[firstValue, ...restItems] = numbers;
// console.log(firstValue, restItems);

// Deep Copy and Shallow Copy

// Deep Copy
// A deep copy creates a completely independent copy of an object or array, including all nested objects and arrays. Changes made to the copy do not affect the original object or array.
// const m = l;
// console.log('l:', l);
// console.log('m:', m);

// m.push(6);
// after m update 6 last push
// console.log('l:', l);
// console.log('m:', m);

// Shallow Copy
//A shallow copy creates a new object or array, but copies only the first level. Nested objects and arrays are copied by reference, so changes to nested data affect both the original and the copy.
const l = [1, 2, 3, 4, 5];
const m = [...l];
console.log('l:', l);
console.log('m:', m);

m.push(6);
// after m update 6 last push
console.log('l:', l);
console.log('m:', m);