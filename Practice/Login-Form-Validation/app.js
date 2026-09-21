const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.querySelector("button");
const message = document.getElementById("message");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if(usernameInput.value === ""){
        message.textContent = "Please enter your username";
        message.classList.add("error");
        message.classList.remove("success");
    } else if(passwordInput.value === ""){
        message.textContent = "Please enter your password";
        message.classList.add("error");
        message.classList.remove("success");
    } else{
        message.textContent = "Login Successfully!";
        message.classList.remove("error");
        message.classList.add("success");
    }
})