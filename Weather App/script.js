
        document.getElementById('login-button').addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

          
            // For Cypress practice, credentials should be:

            if (username === 'user-test@email.com' && password === '12345TEST') {
                alert('Login successful!');
                window.location.href = 'index.html';

               //custom atribute for CY verify if log in is correct or not
                document.body.setAttribute('data-login-status', 'success');
            } else {
                alert('Login failed. Please check your username and password.');
            }
        });
  