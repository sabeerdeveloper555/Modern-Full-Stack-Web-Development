/* ========================================
   Reset Password Functionality
======================================== */

// Get the HTML elements
const resetPasswordForm = document.getElementById("resetPasswordForm");
const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const messageElement = document.getElementById("message");
const updatePasswordBtn = document.getElementById("updatePasswordBtn");

// Handle the reset password form submission
resetPasswordForm.addEventListener("submit", async (event) => {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get the entered passwords
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Clear the previous message
  messageElement.textContent = "";

  // Check whether both passwords match
  if (newPassword !== confirmPassword) {
    messageElement.textContent = "Passwords do not match.";
    messageElement.style.color = "#f87171";
    return;
  }

  // Disable the button while processing
  updatePasswordBtn.disabled = true;
  updatePasswordBtn.textContent = "Updating...";

  try {
    // Check whether Supabase client is available
    if (!window.supabaseClient) {
      throw new Error(
        "Supabase client is not initialized. Please refresh the page.",
      );
    }

    // Update the user's password in Supabase
    const { error } = await window.supabaseClient.auth.updateUser({
      password: newPassword,
    });

    // Handle password update errors
    if (error) {
      throw error;
    }

    // Display success message
    messageElement.textContent =
      "Password updated successfully! You can now log in with your new password.";
    messageElement.style.color = "#4ade80";

    // Clear both password fields
    resetPasswordForm.reset();
  } catch (error) {
    // Display an error message
    messageElement.textContent =
      error.message || "Unable to update your password. Please try again.";
    messageElement.style.color = "#f87171";

    console.error("Password update error:", error);
  } finally {
    // Re-enable the button
    updatePasswordBtn.disabled = false;
    updatePasswordBtn.textContent = "Update Password";
  }
});
