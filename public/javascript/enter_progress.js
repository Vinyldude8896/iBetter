

async function PostResults(completedStatus, habit, date ) {

  const response = await fetch('/api/results', {
    method: 'POST',
    body: JSON.stringify({
      is_completed: completedStatus,
      habit_id: habit,
      date_id: date
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log("Result Added" + completedStatus + " " + habit + " " + date );
  } else {
    alert(response.statusText);
  }
}


// Select all checkboxes with the name 'settings' using querySelectorAll
var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
// creating an array to hold all the ID's of the checkboxes that are chcked
let enabledSettings = []

// Use Array.forEach to add an event listener to each checkbox and listen for change
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let arrayHabits = []
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => arrayHabits = (i.id).split("-")) // Use Array.map to extract only the checkbox values from the array of objects then split the value
      
      // these are for the checked boxes 
      console.log(enabledSettings);
      console.log(arrayHabits);
      let habitChangedID = arrayHabits[0]; // split value for habit given to this variable
      let dayChangedID = arrayHabits[1]; // split value for date given to this variable
      let checboxValue = true;
      

      console.log("The Habit ID changed is " + habitChangedID);
      console.log("the day ID changed is " + dayChangedID);
      console.log("the value is " + checboxValue);
  

      PostResults(checboxValue, habitChangedID, dayChangedID);


    })
});

