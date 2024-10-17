function submitLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("select-btn").value;
  const usernameError1 = document.getElementById("message1");
  const usernameError2 = document.getElementById("message2");
  const usernameError3 = document.getElementById("message3");
  const form = document.getElementById("loginForm");

  if (username.length < 10) {
    usernameError1.innerText = "You need to enter 10 characters for the username.";
    usernameError1.style.color = "red"; 
    return; 
  }
  if (role == "--select your role--") {
    usernameError3.innerText = "Please select role";
    return;
  }else{
    usernameError3.innerText = "";
  }

  const loginData = {
    UserName: username,
    PassWord: password,
  };

  fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Application-Key":
        "TUa7110a94484554d8a529ad3eb1438f4d1b07d08b86946c3b8a07faa1c56efdc7061e2be45ca8c1d6380e08f1df7d135d",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Incorrect Credentials");
      }
      return response.json();
    })
    .then((data) => {
      const resultElement = document.getElementById("b");
      const resultText = `Username: ${data.displayname_th}
    Student ID: ${data.username}
    Department: ${data.department}
    Faculty: ${data.faculty}`;
      resultElement.innerText = resultText;
      resultElement.style.fontSize = "25px";
      resultElement.style.marginTop ="-10px";

      const deletee = document.getElementById('a');
      deletee.style.marginTop = "-100px";
      deletee.innerHTML = `Hello Welcome back!`
      document.getElementById('c').innerHTML = '';
      document.getElementById('d').innerHTML = '';
      form.reset();
    })
    .catch((error) => console.error("Error:", error));

}
document.getElementById("toggle-password").addEventListener("click", function() {
  const passwordField = document.getElementById("password");
  const button = this;

  if (passwordField.type === "password") {
      passwordField.type = "text"; 
      button.innerText = "Hide"; 
  } else {
      passwordField.type = "password";
      button.innerText = "Show"; 
  }
});


