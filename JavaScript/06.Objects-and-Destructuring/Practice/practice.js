//1. Given this array: const scores = [95, 88, 85], how do you get the first and third values only?

const scores = [95, 88, 85]
const[firstValue, , thirdValue] = scores;
console.log(`First Value is: ${firstValue} \nThird Values is: ${thirdValue}`);

//2. Nested Object Destructuring: how do you extract the city from this object?

const user = {
    name: "Sabeer Alam",
    address:{
        city: "Karachi"
    }
};

const {address:{city}} = user;
console.log(`City: ${city}`);

//3. What will be the output of this code?

let a = [1,2];
let b = [3,4];
console.log([...a, ...b]);

a = [25, ...a, 50];
console.log(a);

//4. What will be the value of others in this code?

const values = [10,20,30,40];
const[first, ...others] = values;
console.log(others);

