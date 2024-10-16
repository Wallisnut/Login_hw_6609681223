function submitLogin(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('select-btn').value;

  if (!username || !password) {
    alert("Please fill in both fields");
    return;
  }
  if(role=="--select your role--"){
    alert("Please select role");
  }

  const loginData = {
    UserName: username,
    PassWord: password
  };

  fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Application-Key': 'TUa7110a94484554d8a529ad3eb1438f4d1b07d08b86946c3b8a07faa1c56efdc7061e2be45ca8c1d6380e08f1df7d135d'
      },
      body: JSON.stringify(loginData)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
    const resultElement = document.getElementById('b');
    resultElement.innerText = JSON.stringify(data);
    resultElement.style.fontSize = '20px';
  })
  .catch(error => console.error('Error:', error));
}
function call_REST_API_Hello() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
      alert("Please fill in both fields");
      return;
  }

  const url = (
      'http://localhost:8000/?' +
      new URLSearchParams({ myName: username, lastName: password }).toString()
  );

  fetch(url)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.text();
  })
  .then(text => {
    const resultElement = document.getElementById('b');
    resultElement.innerText = text;
    resultElement.style.fontSize = '20px';
  })
  .catch(error => console.error('Error:', error));
}
