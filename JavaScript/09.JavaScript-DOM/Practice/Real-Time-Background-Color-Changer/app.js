let body = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let redCode = Math.floor(Math.random() * 256);
  let greenCode = Math.floor(Math.random() * 256);
  let blueCode = Math.floor(Math.random() * 256);

  body.style.background = `rgb(${redCode}, ${greenCode}, ${blueCode})`;
});
