//1. Count Vowels in a String
// let voweLetters = "aeiouAEIOU"
// let checkVowelIsCount = (str) => {
//     let count = 0;
//     for (let vowels of str) {
//         if (voweLetters.includes(vowels)) {
//             console.log(vowels);
//             count++;
//         }
//     }
//     return count;
// }
// console.log(checkVowelIsCount("welcome"));

//2. Find Factorial of a Number
// let factorial = (n) => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));
// console.log(factorial(6));

//3. Count the Number of Words in a Sentence
//Method1:
// function checkWordCount(str){
//     return str.split(' ').length;
// }
// console.log(checkWordCount("Sabeer Alam"));

//Method2:
function checkWordCount(str){
    let wordCount = 1;
    for(let v of str){
        if(v === " ")
        wordCount++;
    }
    return wordCount;
}
console.log(checkWordCount("Muhammad Sabeer Alam"));