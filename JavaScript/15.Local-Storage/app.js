// localStorage.setItem("username", "Sabeer Alam");

// console.log(localStorage.getItem("username"));

// let bodyElement = document.querySelector("body");
// let allBtns = document.querySelectorAll("button");
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     localStorage.setItem("colorTheme", btn.innerHTML.toLowerCase());
//     localStorage.setItem("time1", new Date().toLocaleTimeString());
//     localStorage.setItem("time2", new Date().toLocaleTimeString());
//     setColorTheme();
//   });
// });

// let setColorTheme = () => {
//     let color = localStorage.getItem("colorTheme");
//     bodyElement.style.background = color;
// };
// setColorTheme();

// Remove particular item
// localStorage.removeItem("time1");

// Clear whole local storage
// localStorage.clear();

// Return local storage key name
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
// console.log(localStorage.key(2));

// Storing Objects in LocalStorage
let user = {
  userName: "Sabeer Alam",
  userEmail: "sabeer.alam@test.com",
  userAge: 24
}
localStorage.setItem("userObj", JSON.stringify(user));

let getUserData = JSON.parse(localStorage.getItem("userObj"));
console.log(getUserData, typeof(getUserData));
