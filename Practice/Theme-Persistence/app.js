const themeBtn = document.getElementById("themeBtn");
const themeText = document.getElementById("themeText");
const themeIcon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    themeText.textContent = "Light Mode";
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeText.textContent = "Dark Mode";
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeText.textContent = "Light Mode";
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}
