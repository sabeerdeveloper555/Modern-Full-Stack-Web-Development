let modelElDiv = document.querySelector(".modelEl");

let modelImg = document.querySelector(".whiteModel img");

let closeBtn = document.querySelector(".whiteModel span");

let mainEl = document.querySelector(".main");

let whiteModeEl = document.querySelector(".whiteModel");

mainEl.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let clickImgPath = e.target.src;
    modelElDiv.classList.add("showModel");
    modelImg.src = clickImgPath;
  }
});

closeBtn.addEventListener("click", () => {
  modelElDiv.classList.remove("showModel");
  modelImg.src = "";
});

modelElDiv.addEventListener("click", () => {
  modelElDiv.classList.remove("showModel");
  modelImg.src = "";
});

whiteModeEl.addEventListener("click", (e) => {
  e.stopPropagation();
});
