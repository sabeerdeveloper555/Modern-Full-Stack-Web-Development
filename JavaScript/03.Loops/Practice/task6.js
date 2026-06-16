// Print number pyramind

// let count = 1;

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += count + " ";
//         count++;
//     }
//     console.log(row);
// }

// Inverted Triangle
// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += " * ";
//     }
//     console.log(row)
// }

// Number Triangle
// let i = 1;
// let row = "";
// while (i <= 5) {
//     let j = 1;
//     while (j <= i) {
//         row += j + " ";
//         j++;
//     }
//     row += "\n";
//     i++;
// }
// console.log(row);

// Repeated Number Triangle
// let i = 1;
// let row = "";
// while (i <= 5) {
//     let j = 1;
//     while (j <= i) {
//         row += i + "";
//         j++;
//     }
//     row += "\n";
//     i++;
// }
// console.log(row);

// Pyramind
// for(let i = 1; i <= 5; i++){
//     let row = "";
//     row += " ".repeat(5-i);
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// Inverted Pyramid
// for(let i = 5; i >= 1; i--){
//     let row = "";
//     row += " ".repeat(5-i);
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// Diamond
for (let i = 1; i <= 5; i++) {
    let row = "";
    row += " ".repeat(5 - i);
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Lower Inverted Pyramid
for (let i = 4; i >= 1; i--) {
    let row = "";

    row += " ".repeat(5 - i);

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}