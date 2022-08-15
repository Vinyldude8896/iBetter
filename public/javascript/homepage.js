//commented out 4:43pm monday

// async function newFormhandler() {
//   // user_id should be from session.user_id
//   const user_id = req.session.user_id;

//   const response = await fetch(`/api/habits/${user_id}`, {
//     method: 'GET',
//   });

//   if (response.ok) {
//     response.json().then(function(data) {
//       console.log(data)
//       // displayRepos(data, user);
//       // document.location.replace('/');
//   });
//   } else {
//     alert(response.statusText);
//   }
// }
// newFormhandler();

// create habit
// document.querySelector('.new-habit-form').addEventListener('submit', newFormhandler);

//functions for table

document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
  checkbox.addEventListener("click", async (event) => {
    const { name: dateId, id: habitId, checked } = event.target;
    console.log(dateId, habitId, checked);
    if (checked) {
      // POST
      const response = await fetch("/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateId: +dateId,
          habitId: +habitId,
        }),
      });
      await response.json();
    } else {
      const response = await fetch(`/api/results/${habitId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    }
  });
});
