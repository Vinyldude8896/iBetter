
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  response.ok ? document.location.replace('/'): alert('Log out failed. Please try again.')
};

document.querySelector('#logout').addEventListener('click', logout);

