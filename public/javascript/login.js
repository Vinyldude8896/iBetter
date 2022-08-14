
// this function will take the username value from the input box and the password value from teh input box
// then will send a POST method and if ok replace location with dashboard
async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json'}
      });
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  