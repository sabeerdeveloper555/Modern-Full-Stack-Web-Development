// Select all Show/Hide password buttons on the current page
const passwordToggleButtons = document.querySelectorAll(".password-toggle");

// Add a click event to every password toggle button
passwordToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the ID of the password input controlled by this button
        const inputId = button.getAttribute("aria-controls");

        // Find the corresponding password input
        const passwordInput = document.getElementById(inputId);

        // Find the font awesome icon inside the button
        const icon = button.querySelector("i");

        // Stop if the input or icon does not exist
        if(!passwordInput || !icon){
            return
        }

        // Check whether the password is currently hidden
        const isPasswordHidden = passwordInput.type === "password";

        if(isPasswordHidden){
            // Change the input type to text to show the password
            passwordInput.type = "text";

            // Replace the eye icon with eye-slash icon 
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

            // Update the button's acessible label
            button.setAttribute("aria-label", "Hide password");

            // Indicate that the password is currently visible
            button.setAttribute("aria-pressed", "true");
        } else{
            // Change the input type back to password to hide it
            passwordInput.type = "password";

            // Replace the eye-slash icon with the eye icon
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

            // Update the button's acessible label
            button.setAttribute("aria-label", "Show password");

            // Indicate that the password is currently hidden
            button.setAttribute("aria-pressed", "false");
        }
    });
});