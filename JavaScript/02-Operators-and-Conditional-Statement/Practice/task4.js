// Number is Positive Even, Positive Odd, Negative
let num = Number(prompt("Enter a number: "));
if (num > 0) {
    if (num % 2 === 0) {
        console.log(`${num} is Positive Even Number`);
    } else {
        console.log(`${num} is Positive Odd Number`);
    }
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Number is Negative Number");
}