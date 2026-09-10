const headingEl = document.getElementById("heading");
const btn = document.getElementById("changeBtn");

btn.addEventListener("click", () => {
    if(headingEl.textContent === "Welcome to DOM"){
        headingEl.textContent = "Hello World";
    } else if(headingEl.textContent === "Hello World"){
        headingEl.textContent = "Welcome to DOM";
    } else{
        headingEl.textContent = "Hello World";
    }
});