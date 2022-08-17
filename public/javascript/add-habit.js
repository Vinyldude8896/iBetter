async function newFormHandler(event) {
  event.preventDefault();

  const habit_title = document.querySelector('input[name="habit-title"]').value;
  const habit_info = document.querySelector('input[name="habit-info"]').value;

  if (habit_title === "") {
    return alertModal()
  } else {
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
      document.location.replace('/my-habits');
    }
    else {
      alert(response.statusText);
    }
  }
  
 
 
}
var alertBox = document.querySelector('.alertModal')
const alertModal = () => {
  alertBox.classList.remove("d-none");
}

alertBox.addEventListener('click', function closeAlert(event){
  event.target.classList.add('d-none')
})


document.querySelector('.new-habit-form').addEventListener('submit', newFormHandler);

