/* ========================================
   Forgot Password Functionality
======================================== */

// Get the HTML elements
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const emailInput = document.getElementById("email");
const messageElement = document.getElementById("message");
const resetPasswordBtn = document.getElementById("resetPasswordBtn");

// Handle the forgot password form submission
forgotPasswordForm.addEventListener("submit", async (event) => {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get the user's email address
  const email = emailInput.value.trim();

  // Clear the previous message
  messageElement.textContent = "";

  // Disable the button while processing
  resetPasswordBtn.disabled = true;
  resetPasswordBtn.textContent = "Sending...";

  try {
    // Send a password reset email through Supabase
    const { error } = await window.supabaseClient.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          window.location.origin +
          window.location.pathname.replace(
            "forgot-password.html",
            "reset-password.html",
          ),
      },
    );

    // Handle Supabase errors
    if (error) {
      throw error;
    }

    // Display a success message
    messageElement.textContent =
      "If an account exists with this email, a password reset link will be sent.";

    messageElement.style.color = "#4ade80";

    // Clear the email field
    forgotPasswordForm.reset();
  } catch (error) {
    // Display an error message
    messageElement.textContent =
      error.message || "Unable to send the reset email. Please try again.";

    messageElement.style.color = "#f87171";

    console.error("Password reset error:", error);
  } finally {
    // Re-enable the button
    resetPasswordBtn.disabled = false;
    resetPasswordBtn.textContent = "Send Reset Link";
  }
});
