let btn = document.querySelector("button");
let modelDivEl = document.querySelector(".modelDiv");
let closeBtn = document.querySelector("span");


setTimeout(() => {
    modelDivEl.style.top = "50%";
}, 2000);

btn.addEventListener("click", () => {
  modelDivEl.style.top = "50%";
});

closeBtn.addEventListener("click", () => {
  modelDivEl.style.top = "-1000px";
});
