document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById('username').value;
  const senha = document.getElementById('senha').value;

  const userData = {
    username: username,
    senha: senha,
  };

  fetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response
          .json()
          .then((json) =>
            Promise.reject(json.message || 'Falha na autenticação'),
          );
      }
    })
    .then((data) => {
      console.log(data)
      window.location.href = 'success.html';
    })
    .catch((error) => {
      const errorMessageDiv = document.getElementById('errorMessage');
      errorMessageDiv.textContent = error;
      errorMessageDiv.style.display = 'block'; // Torna a mensagem de erro visível.
    });
});
