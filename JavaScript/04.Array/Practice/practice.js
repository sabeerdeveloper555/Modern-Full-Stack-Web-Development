// 1. Find common elements between two arrays

// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

// for (let items of a) {
//     if (b.includes(items)) {
//         console.log(items);
//     }
// }

//2. Remove duplicate values
// let a = [1, 2, 3, 4, 3, 4, 5, 6, 88, 77];

// let newArr = [];

// for(let items of a){
//     if(!newArr.includes(items)){
//         newArr.push(items);
//     }
// }
// console.log(newArr);

//3. Find the maximum value in array
// let a = [77, 66, 88, 99, 44, 33, 55];
// let maxValue = a[0];
// for(let v of a){
//     if(v > maxValue){
//         maxValue = v;
//     }
// }
// console.log(`The maximum value of an array is: ${maxValue}`);

//4. Reverse an array without using reverse().

//Method1:
// let a = [77, 66, 88, 99, 44];
// console.log("Array before reverse:", a)
// let reverseArr = [];
// for(let n of a){
//     reverseArr.unshift(n);
// }
// console.log("Array after reverse", reverseArr)

//Method2:
let a = [77, 66, 88, 99, 44];
let b = a.length;
let reverseArr = [];
for (let i = b - 1; i >= 0; i--) {
    reverseArr.push(a[i]);
}
console.log("Array before reverse:", a)
console.log("Array after reverse:", reverseArr)
