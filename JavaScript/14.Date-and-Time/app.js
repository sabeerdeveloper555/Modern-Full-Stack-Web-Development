// Date and Time: In JavaScript we use Date Object to work with date and time

// 1. Creating Date Object

// let now = new Date();
// console.log(now);

// 2. Create specific date
// let date = new Date(2026, 8, 2);
// console.log(date);

/*
  Important: JavaScript months start with 0
  January → 0
February → 1
March → 2
April → 3
May → 4
June → 5
July → 6
August → 7
September → 8
October → 9
November → 10
December → 11
*/

// 3 get Methods of Date
// get methods is use to read / retrieve information from Date Objet

//let date = new Date();
//console.log(date.getFullYear()); // 2026
// console.log(date.getMonth()); // 8 because month start from 0 - 11
// console.log(date.getDate()); 

/*
Sunday → 0
Monday → 1
Tuesday → 2
Wednesday → 3
Thursday → 4
Friday → 5
Saturday → 6
 */
// console.log(date.getDay());


// 4 get Methods of Time
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());


// 5 Complete get Methods:
/*
getFullYear(): Year
getMonth(): Month 0–11
getDate(): Date 1–31
getDay(): Weekday 0–6
getHours(): Hours
getMinutes(): Minutes
getSeconds(): Seconds
getMilliseconds(): Milliseconds
*/

// 6. set Methods
// set methods is use to change values of Date Object.

// date.setFullYear(2030);
// console.log(date);

// date.setMonth(11);
// console.log(date);

// date.setDate(16);
// console.log(date);

// date.setHours(12);
// console.log(date);

// date.setMinutes(30);
// console.log(date);

// date.setSeconds(50);
// console.log(date);

// 7. toLocaleDateString()
// toLocaleDateString() display date in readable format

// let date = new Date();
// console.log(date.toLocaleDateString());

// Locale decide date will display in which regional format 

/*
US Format:
date.toLocaleDateString("en-US");
Possible output:
9/2/2026

UK Format:
date.toLocaleDateString("en-GB");
Possible output:
02/09/20
*/

// let myDate = new Date();
// console.log(date.toLocaleDateString("en-US", {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
// }));

// 8. toLocalTimeString()
// toLocalTimeString() display time in readable format.

// let myTime = new Date();
// console.log(myTime.toLocaleTimeString());

// 9. Time formatting
let myTime = new Date();
// console.log(myTime.toLocaleTimeString("en-US", {
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// }));

// 10. 12-Hour vs 24-Hour Format

// 12-Hour Format:
console.log(myTime.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true
}));

// 24-Hour Format:
console.log(myTime.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false
}));


