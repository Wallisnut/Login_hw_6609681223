function submitLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("select-btn").value;
  const token =
    "TUa7110a94484554d8a529ad3eb1438f4d1b07d08b86946c3b8a07faa1c56efdc7061e2be45ca8c1d6380e08f1df7d135d";

  if (!username || !password || role === "--select your role--") {
    alert("Please fill all fields and select a role");
    return;
  }

  fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username: username,
      password: password,
      role: role,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("b").innerText = data.username;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
