async function newFormhandler() {
  // user_id should be from session.user_id
  const user_id = req.session.user_id;

  const response = await fetch(`/api/habits/${user_id}`, {
    method: 'GET',
  });

  if (response.ok) {
    response.json().then(function(data) {
      console.log(data)
      // displayRepos(data, user);
      // document.location.replace('/');
  });  
  } else {
    alert(response.statusText);
  }
}
newFormhandler();

// create habit
// document.querySelector('.new-habit-form').addEventListener('submit', newFormhandler);