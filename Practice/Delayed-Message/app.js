const showMessageBtn = document.getElementById("showMessageBtn");
const message = document.getElementById("message");

showMessageBtn.addEventListener("click", () => {
  setTimeout(() => {
    message.textContent = "Hello! This message appeared after 3 seconds."
  }, 3000);
});
