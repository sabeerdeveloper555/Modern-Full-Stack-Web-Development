// let mainElement = document.querySelector(".main");
// console.log(mainElement.children);
// console.log(mainElement.children[0]);
// console.log(mainElement.children[1]);
// console.log(mainElement.children[2]);

// console.log(mainElement.firstElementChild);
// console.log(mainElement.lastElementChild);

// Downward(parent to child elements)
// Array.from(mainElement.children).forEach((items)=> {
//     console.log(items.innerHTML);
// });

// for(let v of mainElement.children){ 
    //     console.log(v.innerHTML); 
// }

// Upward(child to parent elements)
// let btn = document.querySelector("button");
// console.log(btn.parentElement);
// console.log(btn.closest("div").parentElement);

// Sideways (to siblings)
// let btn = document.querySelector("button");
// console.log(btn.previousElementSibling);
// console.log(btn.nextElementSibling);

// Node-based traversing
let mainElement = document.querySelector(".main");

// console.log(mainElement.childNodes);
// console.log(mainElement.firstChild);
// console.log(mainElement.lastChild);
// console.log(mainElement.parentNode);
// console.log(mainElement.parentNode);

let heading = document.querySelector("h1");
console.log(mainElement.previousSibling);
console.log(mainElement.nextSibling);
