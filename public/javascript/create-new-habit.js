async function newFormhandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="habit-title"]').value;
  const content = document.querySelector('input[name="habit-info"]').value;

  const response = await fetch(`/api/habits`, {
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