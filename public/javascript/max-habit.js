async function hideForm() {
    const addHabitField = document.querySelector('.add-habit')
    const response = await fetch(`/api/habits/:user_id`, {
      method: 'GET',
    });
    if (response.ok) {
      response.json().then(function (data) {
        if (data.length > 25) {
          addHabitField.addClass('hide')
        }
      });
    } else {
      alert(response.statusText);
    }
  }