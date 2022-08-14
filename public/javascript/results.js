//template data Katie put in to give an idea of dynamic table functionality, not set up properly atm

const db = require('../../config/connection')

async function getHabitId(habit) {
    const params = [habit];
    return new Promise ((resolve, reject) => {
        db.query("SELECT id FROM habit WHERE habit_title = ?;", params, (err, result) => {
            if (err) throw err;
            let newResult = [];

            result.forEach((habit) => {
                // department => { id: "5" }
                newResult.push(habit.id); // "5"
            });
            resolve({ habitId: newResult });
        })
    })
}

async function getDateId(date) {
    const params = [date];
    return new Promise ((resolve, reject) => {
        db.query("SELECT id FROM date WHERE date = ?;", params, (err, result) => {
            if (err) throw err;
            let newResult = [];

            result.forEach((date) => {
                // department => { id: "5" }
                newResult.push(date.id); // "5"
            });
            resolve({ dateId: newResult });
        })
    })
}

async function checkboxHandler(event) {
    event.preventDefault();
  
    //'input[name="post-title"]' was the value they used to select the input of the textarea, we will need to adjust to accomodate column name of the table instead
    const habit = document.querySelector('column title').value;
    const date = document.querySelector('row title').value;

    const habit_id = getHabitId(habit);
    const date_id = getDateId(date);

    //will need to have a custom query to get the habit id and the date id from their name (see above for an idea of what im trying to do, i think we could potentially make a get route for this)
  
    const response = await fetch(`/api/results`, {
      method: 'POST',
      body: JSON.stringify({
        habit_id,
        date_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);