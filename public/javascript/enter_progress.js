

async function getDateID(dayPassed) {

    const response = await fetch('/date/:' + dayPassed, {
      method: 'GET',
      body: JSON.stringify({
        date_id,
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
      
      console.log(enabledSettings);
      console.log(arrayHabits);
      let habitChangedID = arrayHabits[0]; // split value for habit given to this variable
      let dayChangedID = arrayHabits[1]; // split value for date given to this variable
      let checboxValue = true;

      console.log("The Habit ID changed is " + habitChangedID);
      console.log("the day ID changed is " + dayChangedID);

      // using document query to find the inner html of each table header so we know the date and habit
      let habitNameChanged = document.querySelector("#" + habitChangedID).innerHTML;
      let dayNameChanged = document.querySelector("#"+ dayChangedID).innerHTML;
      console.log("The habit name changed is " + habitNameChanged);
      console.log("The day name changed is " + dayNameChanged);
   
      console.log("checkbox clicked");

    getDateID(dayNameChanged);

  })
});

