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
const allListElement = document.querySelectorAll("li");

console.log(allListElement);

// console.log(allListElement[0].innerHTML);
// console.log(allListElement[1].innerHTML);
// console.log(allListElement[2].innerHTML);
// console.log(allListElement[3].innerHTML);

allListElement.forEach((items, index) => {
    console.log(index, items.innerHTML);  
})