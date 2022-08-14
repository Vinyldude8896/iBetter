async function newFormHandler(event) {
  event.preventDefault();

  const habit_title = document.querySelector('input[name="habit-title"]').value;
  const habit_info = document.querySelector('input[name="habit-info"]').value;

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

  const resultResponse = await fetch(`/api/habits`, {
    method: 'POST',
    body: JSON.stringify({
      is_completed: false
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/my-habits');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-habit-form').addEventListener('submit', newFormHandler);
