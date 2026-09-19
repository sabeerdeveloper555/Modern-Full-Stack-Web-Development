const parentEl = document.getElementById("parent");
const childBtnEl = document.getElementById("childBtn");


parentEl.addEventListener("click", () => {
    console.log("Parent clicked");
});

childBtnEl.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked");
});