async function editFormHandler(event) {
  event.preventDefault();

  const habit_title = document.querySelector('input[name="habit_title"]').value.trim();
  const habit_info = document.querySelector('input[name="habit_info"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/habits/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      habit_title,
      habit_info
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/my-habits/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-habit-form').addEventListener('submit', editFormHandler);