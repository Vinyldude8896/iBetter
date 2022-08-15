
// function to get date ID using table header data

//no date functionality is set up yet
// const getDateID = await fetch('/api/date', {
//     method: 'GET',
//         body: JSON.stringify({
//           post_id,
//           comment_text
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         where: {
//               id: req.params.id
//             }
          
//       });


// Select all checkboxes with the name 'settings' using querySelectorAll.
var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
let enabledSettings = []

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let arrayHabits = []
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => arrayHabits = (i.id).split("-")) // Use Array.map to extract only the checkbox values from the array of objects.
      
      console.log(enabledSettings);
      console.log(arrayHabits);
      let habitChangedID = arrayHabits[0];
      let dayChangedID = arrayHabits[1];
      let checboxValue = true;

      console.log("The Habit ID changed is " + habitChangedID);
      console.log("the day ID changed is " + dayChangedID);

      let habitNameChanged = document.querySelector("#" + habitChangedID).innerHTML;
      let dayNameChanged = document.querySelector("#"+ dayChangedID).innerHTML;
      console.log("The habit name changed is " + habitNameChanged);
      console.log("The day name changed is " + dayNameChanged);
   
        console.log("checkbox clicked");


  })
});