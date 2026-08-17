//String: string is a sequence of character enclosed in quotes

// let name = "Sabeer";
// let city = "Karachi"

// console.log(`Name: ${name} \nCity: ${city}`);

//1. length Property: returns a total number of characters

// let userName = "Sabeer Alam";
// let password = "abc12345";
// console.log(`The length of username is ${userName.length}`);
// console.log(`The length of password is ${password.length}`);

//2. toUpperCase(): converts all letters to uppercase
// let capital = "islamabad";
// console.log(capital.toUpperCase());

//3. toLowerCase(): converts text into lowercase
// let email = "SABEER@EXAMPLE.COM";
// console.log(email.toLowerCase());

//4. trim(): remove extra spaces.
// let name = " Muhammad Sabeer Alam ";
// console.log(name.trim());

//5. includes(): check whether text exists
// let sentence = "I love JavaScript";
// console.log(sentence.includes("Java"));

//6. startsWith(): check beginning
// let file = "image-png";
// console.log(file.startsWith("image"));
// let word = "JavaScript";
// console.log(word.startsWith("Java"));

//7. endsWith(): checks ending
// let userEmail = "abc@gmail.com";
// console.log(userEmail.endsWith(".com"));

// let file = "resume.pdf";
// console.log(file.endsWith(".pdf"));

//8. replace(): replaces the first occurance
// let text1 = "I like tea";
// console.log(text1.replace("tea", "coffee"));
// let text2 = "I like C#";
// console.log(text2.replace("C#", "JavaScript"));

//9. split(): converts string into array
// let fruits = "Apple, Banana, Mango, Orange, Grapes";
// console.log(fruits.split(","));

//10. charAt(): returns character
// let programmingLanguage = "JavaScript";
// console.log(programmingLanguage.charAt(3));

//11. indexOf(): returns position
// let word = "JavaScript";
// console.log(word.indexOf("S"));

//12. repeat(): repeats string
// let str = "Python ";
// console.log(str.repeat(5));


// Titile case 

// let str = "SabEer";

// str = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(str);



// let sentence = "mY NaMe IS SabEeR"; // My Name Is Sabeer
// let array = sentence.split(" ");
// let result = ""
// for (let i = 0; i < array.length; i++) {
//     let word = array[i];
//     result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
// }
// console.log("Result: ", result);


let sentence = "mY NaMe IS SabEeR"; // My Name Is Sabeer
let array = sentence.split(" ");
let result = ""
for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if(i === 0 || i === array.length - 1){
        result += word[0].toUpperCase() + word.slice(1).toLowerCase()
    } else{
        result += word.toLowerCase();
    }
    result += " ";
}
console.log("Result:", result);


