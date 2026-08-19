//---------------Select Element by ID------------------------------

// const headingElement = document.getElementById("main-heading");
// const paraElement = document.getElementById("para-1");

// console.log(headingElement.innerHTML);
// console.log(paraElement.innerText);

//-----------------------querySelector()---------------------------
// const inputElementUsername = document.querySelector("#username");

// const inputElementEmail = document.querySelector("#email");

// console.log(inputElementUsername.placeholder);

// Updating placeholder
// inputElementUsername.placeholder = "Enter your name";

// Updating type
// inputElementUsername.type = "password";

//console.log(inputElementUsername.type);

// console.log(inputElementUsername.value);

// console.log(inputElementEmail);

//----------------------querySelectorAll()------------------
// const allListElement = document.querySelectorAll("li");
// console.log(allListElement);

// console.log(allListElement[0].innerHTML);
// console.log(allListElement[1].innerHTML);
// console.log(allListElement[2].innerHTML);
// console.log(allListElement[3].innerHTML);

// allListElement.forEach((items, index) => {
//   console.log(index, items.innerHTML);
// });

// const inputElementPassword = document.querySelector("#password");

// const showHidePasswordBtn = document.querySelector("#show-hide-password-btn");

// function showHidePassword() {
//     if (showHidePasswordBtn.innerHTML == "Show") {
//     inputElementPassword.type = "text";
//     showHidePasswordBtn.innerHTML = "Hide";
//   } else{
//     inputElementPassword.type = "password";
//     showHidePasswordBtn.innerHTML = "Show";
//   }
// }

//-------------------------------addEventListener()-------------------------------------
// const inputElementPassword = document.querySelector("#password");
// const showHidePasswordBtn = document.querySelector("#show-hide-password-btn");
// showHidePasswordBtn.addEventListener("click", () => {
//     if (showHidePasswordBtn.innerHTML == "Show") {
//     inputElementPassword.type = "text";
//     showHidePasswordBtn.innerHTML = "Hide";
//   } else{
//     inputElementPassword.type = "password";
//     showHidePasswordBtn.innerHTML = "Show";
//   }
// });

const paraElement = document.getElementById("para-1");
const headingElement = document.getElementById("main-heading");
let btnStyleElement = document.querySelector("#btnStyle");

btnStyleElement.addEventListener("click", () => {
  paraElement.style.fontSize = "20px";
  paraElement.style.backgroundColor = "red";
  paraElement.style.color = "white";
  headingElement.style.backgroundColor = "blue";
  headingElement.style.color = "white";
});
