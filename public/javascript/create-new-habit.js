async function newFormhandler(event) {
  event.preventDefault();

  const habit_title = document.querySelector('input[name="habit-title"]').value;
  const habit_info = document.querySelector('input[name="habit-info"]').value;
  // const user_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  // /api/habits/${user_id}
  const response = await fetch(`/api/habits`, {
    method: 'POST',
    body: JSON.stringify({
      habit_title,
      habit_info
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