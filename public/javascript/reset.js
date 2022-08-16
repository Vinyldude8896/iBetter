async function resetTableBtn() {
  const responseResult = await fetch(`/reset/user/result`, {
    method: 'DELETE'
  })
  const responseHabit = await fetch(`/reset/user/habit`, {
    method: 'DELETE'
  })

  if (responseResult.ok && responseHabit.ok) {
    console.log('OK')
    window.location.reload();
  } else {
    alert(responseResult.statusText + responseHabit.statusText);
  }
}



document.querySelector('#btn-reset').addEventListener('click', resetTableBtn);