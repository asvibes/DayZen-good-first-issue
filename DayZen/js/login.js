document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredEmail = document.getElementById("loginEmail").value.trim();
  const enteredPassword = document.getElementById("loginPassword").value.trim();
  const errorDiv = document.getElementById("loginError");

  // Retrieve the saved data from local storage
  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  // Check if an account actually exists in storage
  if (!storedEmail || !storedPassword) {
    errorDiv.innerText = "No account found. Please register first.";
    errorDiv.style.display = "block";
    return;
  }

  // Verify the credentials
  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    // Success: Hide error and redirect to the next page
    errorDiv.style.display = "none";

    // Update this URL to point to your actual dashboard or home page
    window.location.href = "../pages/indexacc.html";
  } else {
    // Failure: Show error
    errorDiv.innerText = "Invalid email or password.";
    errorDiv.style.display = "block";
  }
});
