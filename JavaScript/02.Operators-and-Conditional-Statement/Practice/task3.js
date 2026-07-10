// Check if year is leap year
let year = Number(prompt("Enter a year: "));

// if (year % 4 === 0 && year % 100 !== 0) {
//     console.log("Year is leap year");
// } else if (year % 400 === 0) {
//     console.log("Year is a leap year");
// } else {
//     console.log("Year is not a leap year");
// }

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Year is leap year");
} else {
    console.log("Year is not a leap year");
}