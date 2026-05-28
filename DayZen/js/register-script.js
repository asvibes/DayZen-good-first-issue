document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".container").style.opacity = "1";
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error-text").forEach((el) => el.remove());

    let isValid = true;
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!username.value.trim()) {
      showError(username, "Username is required");
      isValid = false;
    }

    if (!email.value.trim()) {
      showError(email, "Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, "Enter a valid email format");
      isValid = false;
    }

    if (!password.value.trim()) {
      showError(password, "Password is required");
      isValid = false;
    }

    // Stop execution if validation fails
    if (!isValid) {
      return;
    }

    // Store all credentials for the login page
    localStorage.setItem("registeredUsername", username.value.trim());
    localStorage.setItem("registeredEmail", email.value.trim());
    localStorage.setItem("registeredPassword", password.value.trim());

    // Show the success message directly
    const createEle = document.getElementById("createaccount");
    createEle.style.display = "block";
  });

function showError(input, message) {
  const errorMsg = document.createElement("div");
  errorMsg.className = "error-text";
  errorMsg.style.color = "red";
  errorMsg.style.fontSize = "12px";
  errorMsg.style.marginTop = "4px";
  errorMsg.innerText = message;

  input.insertAdjacentElement("afterend", errorMsg);
}
