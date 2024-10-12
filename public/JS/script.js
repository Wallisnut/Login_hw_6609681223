function submitLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    document.getElementById("message").innerText =
      "Please enter both username and password.";
    return;
  }

  const submitButton = document.querySelector(".login-btn");
  submitButton.disabled = true;

  fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "TUe33b2c50821a92ab2a6558ae461bdc819b22ba4d33b408d5eefe9e9bbf0cdb5ffb8185a7dd452f3afdc195b79bf45cba",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed, please check your credentials.");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("message").innerText =
        data.message || "Login successful!";
      submitButton.disabled = false;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "An error occurred. Please try again later.";
      submitButton.disabled = false; // Re-enable button
    });
}
