//1. Given an array of numbers, return a new array with each number doubled

// const numbers = [1, 2, 3, 4];
// const doubledArr = numbers.map(value => value + value);
// console.log(doubledArr);

//2. Filter Even Numbers (using filter)
// const numbers = [10, 25, 99, 77, 66, 44, 22, 11, 33, 44, 99];
// const evenArr = numbers.filter((value) => value % 2 === 0);
// console.log(evenArr);

//3. Find the first student with marks less than 35

const students = [
    {name: "Sikander", marks: 70},
    {name: "Mahad", marks: 85},
    {name: "Yasir", marks: 30},
    {name: "Hashir", marks: 25}
]

const firstFailedStd = students.find((value) => value.marks < 35);
console.log(firstFailedStd);
