async function newFormhandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="habit-title"]').value;
  const content = document.querySelector('input[name="habit-info"]').value;
  const user_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/habits/${user_id}`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-habit-form').addEventListener('submit', newFormhandler);