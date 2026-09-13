const changeBtnEl = document.getElementById("changeBtn");
const headingEl = document.querySelector("h2");

changeBtnEl.addEventListener("click", () => {
    const parentEl = changeBtnEl.parentElement;
    const grandParentEl = parentEl.parentElement;
    if ((grandParentEl.style.backgroundColor === "orange")) {
        grandParentEl.style.backgroundColor = "white";
        headingEl.style.color = "black";
    } else{
        grandParentEl.style.backgroundColor = "orange";
        headingEl.style.color = "white";
    }

});
