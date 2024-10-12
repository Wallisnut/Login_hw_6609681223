function submitLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    document.getElementById("message").innerText =
      "Please enter both username and password.";
    return;
  }

  fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerText = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "An error occurred. Please try again later.";
    });
}
