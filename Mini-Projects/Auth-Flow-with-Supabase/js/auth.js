// ========================================
// 1. Get HTML Elements
// ========================================

// Get the signup form
const signupForm = document.getElementById("signupForm");

// Get the message element
const message = document.getElementById("message");

// Get the signup button
const signupBtn = document.getElementById("signupBtn");

// ========================================
// 2. Handle Signup Form Submission
// ========================================

if (signupForm) {
  signupForm.addEventListener("submit", async function (event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Get input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // ========================================
    // 3. Validate Form Inputs
    // ========================================

    if (!fullName || !email || !password || !confirmPassword) {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    if (fullName.length < 2) {
      showMessage("Full name must contain at least 2 characters.", "error");
      return;
    }

    if (password.length < 8) {
      showMessage("Password must contain at least 8 characters.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    // ========================================
    // 4. Check Supabase Client
    // ========================================

    const supabaseClient = window.supabaseClient;

    if (!supabaseClient) {
      showMessage(
        "Supabase is not initialized. Please refresh the page.",
        "error",
      );
      return;
    }

    // ========================================
    // 5. Show Loading State
    // ========================================

    signupBtn.disabled = true;
    signupBtn.textContent = "Creating Account...";
    showMessage("", "");

    try {
      // ========================================
      // 6. Create User Account
      // ========================================

      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,

        // Store the full name in the user's metadata
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      // Handle Supabase authentication errors
      if (error) {
        showMessage(error.message, "error");
        return;
      }

      // ========================================
      // 7. Handle Successful Signup
      // ========================================

      if (data.user && data.session) {
        // Email confirmation is disabled
        showMessage(
          "Account created successfully! You can now sign in.",
          "success",
        );

        signupForm.reset();
      } else {
        // Email confirmation is enabled
        showMessage(
          "Registration received! Check your email for a verification link before signing in.",
          "success",
        );

        signupForm.reset();
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Signup error:", error);

      showMessage("Something went wrong. Please try again.", "error");
    } finally {
      // Restore the signup button
      signupBtn.disabled = false;
      signupBtn.textContent = "Create Account";
    }
  });
}

// ========================================
// 8. Display Status Messages
// ========================================

function showMessage(text, type) {
  if (!message) return;

  message.textContent = text;

  if (type === "error") {
    message.style.color = "#dc2626";
  } else if (type === "success") {
    message.style.color = "#16a34a";
  } else {
    message.style.color = "";
  }
}

// ========================================
// 9. Login Functionality
// ========================================

// Get the login form
const loginForm = document.getElementById("loginForm");

// Get the login button
const loginBtn = document.getElementById("loginBtn");

// Handle login form submission
if (loginForm) {
  loginForm.addEventListener("submit", async function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get email and password values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validate the inputs
    if (!email || !password) {
      showMessage("Please enter your email and password.", "error");
      return;
    }

    // Get the initialized Supabase client
    const supabaseClient = window.supabaseClient;

    if (!supabaseClient) {
      showMessage(
        "Supabase is not initialized. Please refresh the page.",
        "error",
      );
      return;
    }

    // Show loading state
    loginBtn.disabled = true;
    loginBtn.textContent = "Signing In...";
    showMessage("", "");

    try {
      // Sign in using Supabase Auth
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });

      // Handle authentication errors
      if (error) {
        showMessage(
          "Login failed. Please check your email and password.",
          "error",
        );
        return;
      }

      // Confirm that a session was created
      if (data.session) {
        showMessage("Login successful! Redirecting...", "success");

        // Redirect to the dashboard
        window.location.href = "dashboard.html";
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Login error:", error);

      showMessage("Something went wrong. Please try again.", "error");
    } finally {
      // Restore the login button if the page has not navigated away
      loginBtn.disabled = false;
      loginBtn.textContent = "Sign In";
    }
  });
}
