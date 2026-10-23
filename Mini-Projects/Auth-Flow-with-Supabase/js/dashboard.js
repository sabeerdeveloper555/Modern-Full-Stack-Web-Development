// ========================================
// 1. Get HTML Elements
// ========================================

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const dashboardMessage = document.getElementById("dashboardMessage");

// ========================================
// 2. Check Authentication
// ========================================

async function loadDashboard() {
  const supabaseClient = window.supabaseClient;

  if (!supabaseClient) {
    window.location.replace("index.html");
    return;
  }

  // Retrieve the current authenticated user
  const { data, error } = await supabaseClient.auth.getUser();

  // Redirect if no authenticated user exists
  if (error || !data.user) {
    window.location.replace("index.html");
    return;
  }

  // Display the user's email
  userEmail.textContent = `Logged in as: ${data.user.email}`;
}

// Run the authentication check
loadDashboard();

// ========================================
// 3. Logout Functionality
// ========================================

logoutBtn.addEventListener("click", async function () {
  logoutBtn.disabled = true;
  logoutBtn.textContent = "Logging Out...";

  try {
    const { error } = await window.supabaseClient.auth.signOut();

    if (error) {
      dashboardMessage.textContent = "Unable to log out. Please try again.";
      dashboardMessage.style.color = "#dc2626";
      return;
    }

    // Redirect to the login page
    window.location.replace("index.html");
  } catch (error) {
    console.error("Logout error:", error);

    dashboardMessage.textContent = "Something went wrong. Please try again.";
    dashboardMessage.style.color = "#dc2626";
  } finally {
    logoutBtn.disabled = false;
    logoutBtn.textContent = "Log Out";
  }
});
