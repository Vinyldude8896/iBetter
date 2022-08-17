async function newCharthandler() {
  const response = await fetch(`/api/habits/user`, {
    method: 'GET'
  });

  if (response.ok) {
    response.json().then(function(data) {
      buildChart(data);
  });  
  } else {
    alert(response.statusText);
  }
}

newCharthandler();

function buildChart(habits) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: habits.map(habit => habit.habit_title),
      datasets: [{
        label: 'Monthly Progress',
        data: habits.map(habit => habit.habit_count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]
  },
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Summary'
        }
      }
    }
  });
}