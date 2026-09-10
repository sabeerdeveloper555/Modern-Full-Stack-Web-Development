const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterPara = document.getElementById("counter");
let count = 0;
increaseBtn.addEventListener("click", () => {
    count++;
    counterPara.textContent = count; 
});
decreaseBtn.addEventListener("click", () => {
    count--;
    counterPara.textContent = count; 
});
resetBtn.addEventListener("click", () => {
    count = 0;
    counterPara.textContent = count;
});