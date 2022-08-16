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
      const response = await fetch(`/api/results/${habitId}/${dateId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    }
  });
});

//functionality for the clear all button 
document.querySelector(".delete-all").addEventListener("click", async (event) => {
  const response = await fetch ("/api/results", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  await response.json();
  document.location.replace('/');
})
