async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/habit/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/my-habits');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-habit-btn').addEventListener('click', deleteFormHandler);
