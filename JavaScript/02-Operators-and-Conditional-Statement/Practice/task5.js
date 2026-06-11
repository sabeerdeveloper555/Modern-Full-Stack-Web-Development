// Online Shopping Discount Logic
// amount > 1000 ==> 20% discount
// amount > 500 ==> 10% discount
// No Discount

let amount = Number(prompt("Enter Amount: "));
if (amount > 1000) {
    console.log("20% discount");

} else if (amount > 500) {
    console.log("10% discout");
} else {
    console.log("No discount");
}