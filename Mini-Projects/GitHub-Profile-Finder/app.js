const searchForm = document.getElementById('searchForm');
const usernameInput = document.getElementById('usernameInput');
const searchBtn = document.getElementById('searchBtn');
const message = document.getElementById('message');
const profileContainer = document.getElementById('profileContainer');

// Listen for form submission
searchForm.addEventListener('submit', async (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the username and remove extra spaces
  const getUsername = usernameInput.value.trim();

  // Validate the username
  if (getUsername === '') {
    message.textContent = 'Please enter a GitHub username.';
    profileContainer.innerHTML = '';
    return;
  }

  // Clear previous messages and profile data
  message.textContent = '';
  profileContainer.innerHTML = '';

  // Show a loading message
  message.textContent = 'Loading profile...';

  // Disable the button while fetching data
  searchBtn.disabled = true;
  searchBtn.textContent = 'Searching...';

  try {
    // Send a request to the GitHub API
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(getUsername)}`,
    );

    // Check whether the HTTP response is successful
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('GitHub user not found.');
      }

      if (response.status === 403 || response.status === 429) {
        throw new Error(
          'GitHub API rate limit reached. Please try again later.',
        );
      }

      throw new Error(`Request failed with status ${response.status}.`);
    }

    // Convert the response into JSON data
    const data = await response.json();

    // Display the GitHub profile
    profileContainer.innerHTML = `
      <img src="${data.avatar_url}" alt="GitHub avatar">

      <h2>${data.name || data.login}</h2>
      <p>@${data.login}</p>
      <p>${data.bio || 'No bio available.'}</p>

      <div class="profile-stats">
        <div class="stat">
          <h3>${data.followers}</h3>
          <p>Followers</p>
        </div>

        <div class="stat">
          <h3>${data.following}</h3>
          <p>Following</p>
        </div>

        <div class="stat">
          <h3>${data.public_repos}</h3>
          <p>Repositories</p>
        </div>
      </div>

      <a
        href="${data.html_url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Profile
      </a>
    `;

    // Clear the loading message
    message.textContent = '';

    // Print the user data in the console
    console.log(data);
  } catch (error) {
    // Display the error message
    message.textContent =
      error instanceof TypeError
        ? 'Network error. Please check your internet connection.'
        : error.message;

    // Print the error in the console
    console.error(error);
  } finally {
    // Restore the button whether the request succeeds or fails
    searchBtn.disabled = false;
    searchBtn.textContent = 'Search';
  }
});
