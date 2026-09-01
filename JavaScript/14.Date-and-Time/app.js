let currentDate = new Date();
// console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDay());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toLocaleString());

// let myCreatedDate = new Date(2026, 8, 1);
// let myCreatedDate = new Date(2026, 8, 1, 10, 48);
// let myCreatedDate = new Date("2026-01-9");
// let myCreatedDate = new Date("09-1-2026");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// Converting into seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

newDate.toLocaleString('default', {
    weekday: "long"
});


