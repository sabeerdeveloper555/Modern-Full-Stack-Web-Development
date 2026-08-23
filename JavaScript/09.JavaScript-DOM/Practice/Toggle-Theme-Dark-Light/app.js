// Select button
const toggleBtnElement = document.querySelector("#toggleBtn");

// Add click event
toggleBtnElement.addEventListener("click", () => {
  // Add / remove dark-theme class
  document.body.classList.toggle("dark-theme");
});
