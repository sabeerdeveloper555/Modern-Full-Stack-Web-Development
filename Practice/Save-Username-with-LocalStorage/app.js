const username = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

saveBtn.addEventListener("click", () => {
  const usernameValue = username.value;
  if (usernameValue === "") {
    message.textContent = "Please enter username";
  } else {
    localStorage.setItem("username", usernameValue);
    message.textContent = "Username saved successfully!";
  }
});

const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  username.value = savedUsername;
}
