// Weather Report by Temperature
// temperature > 35 ==> "Very Hot"
// temperature 25-35 ==> "Hot"
// temperature 15-25 ==> "Pleasant"
// temperature 5-15 ==> "Cold"
// temperature < 5 ==> "Very Cold"

let temperature = Number(prompt("Enter temperature: "));
if (temperature > 35) {
    console.log("Temperature is Very Hot.")
} else if (temperature > 25 && temperature < 35) {
    console.log("Temperature is Hot.")
} else if (temperature > 15 && temperature < 25) {
    console.log("Temperature is Pleasant.")
} else if (temperature > 5 && temperature < 15) {
    console.log("Temperature is Cold.")
} else if (temperature < 5) {
    console.log("Temperature is Very Cold.")
} else {
    console.log("Invalid Temperature");
}