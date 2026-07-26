//1. map():
// const numbers = [10, 20, 30, 40];

// numbers.map((value, index) => {
//     console.log(value, index)
// })

// const newArr = numbers.map((value, index)=>{
//     return value + 5;
// })
// console.log(newArr);

// Short way to use map()
// const newArr = numbers.map((value) => value + 5)
// console.log(newArr);

// const squareArr = numbers.map((num => num ** 2));
// console.log(squareArr);


//2. filer()
// const numbers = [10, 20, 25, 30, 38, 58, 69, 77, 63, 90];

// const filterArr = numbers.filter((value) => value % 3 === 0);
// console.log(filterArr);

// let user = [
//     {
//         'name': "Sabeer Alam",
//         'age': 24
//     },
    
//     {
//         'name': "Shahan Alam",
//         'age': 15
//     },
    
//     {
//         'name': "Ahmed Ali",
//         'age': 25
//     },

//     {
//         'name': "Bazil Altaf",
//         'age': 23
//     },

// ];

// let filterUser = user.filter((obj) => obj.age >= 18)
// console.log(filterUser);

//3. reduce():
// let numbers = [10,20,30,40,50,60];
// let totalSum = numbers.reduce((sum, value)=> sum + value, 0);
// console.log(totalSum);

//4. find():
// let user = [
//     {
//         'name': "Sabeer Alam",
//         'age': 24
//     },
    
//     {
//         'name': "Shahan Alam",
//         'age': 18
//     },
    
//     {
//         'name': "Ahmed Ali",
//         'age': 18
//     },

//     {
//         'name': "Bazil Altaf",
//         'age': 23
//     },

// ];

// let findData = user.find((value) => value.age === 18);
// console.log(findData);


// let numbers = [10, 25, 33, 46, 55, 69];
// let firstOddNumber = numbers.find(value => value % 2 !== 0);
// console.log(firstOddNumber);

//5. forEach():
let users = [
    {
        'name': "Sabeer Alam",
        'age': 24
    },
    
    {
        'name': "Shahan Alam",
        'age': 18
    },
    
    {
        'name': "Ahmed Ali",
        'age': 18
    },

    {
        'name': "Bazil Altaf",
        'age': 23
    },

];

users.forEach((obj, index) => {
    console.log(index, obj.name, obj.age);
    
})