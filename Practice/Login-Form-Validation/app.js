const loginForm = document.getElementById("login-form");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const message = document.getElementById("message");

const togglePasswordBtn = document.getElementById("togglePassword");

const passwordIcon = togglePasswordBtn.querySelector("i");

// Login Form Validation

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (usernameInput.value === "") {
    message.textContent = "Please enter your username";

    message.classList.add("error");
    message.classList.remove("success");
  } else if (passwordInput.value === "") {
    message.textContent = "Please enter your password";

    message.classList.add("error");
    message.classList.remove("success");
  } else {
    message.textContent = "Login Successfully!";

    message.classList.remove("error");
    message.classList.add("success");
  }
});

// Password Show / Hide

togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");

    togglePasswordBtn.setAttribute("aria-label", "Hide password");
  } else {
    passwordInput.type = "password";

    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");

    togglePasswordBtn.setAttribute("aria-label", "Show password");
  }
});
