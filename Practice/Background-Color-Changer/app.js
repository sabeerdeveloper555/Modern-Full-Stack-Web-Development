const whiteBtnEl = document.getElementById("whiteBtn");
const redBtnEl = document.getElementById("redBtn");
const blackBtnEl = document.getElementById("blackBtn");
const greenBtnEl = document.getElementById("greenBtn");
const blueBtnEl = document.getElementById("blueBtn");
const bodyEl = document.querySelector("body");

whiteBtnEl.addEventListener("click", () => {
  bodyEl.style.background = "#f5f5f5";
});

redBtnEl.addEventListener("click", () => {
  bodyEl.style.background = "#c0392b";
});

blackBtnEl.addEventListener("click", () => {
  bodyEl.style.background = "#1c1c1c";
});

greenBtnEl.addEventListener("click", () => {
  bodyEl.style.background = "#2e7d32";
});

blueBtnEl.addEventListener("click", () => {
  bodyEl.style.background = "#1e3a8a";
});
