let myChart = $('#myChart')[0].getContext('2d');

let radarChart = new Chart(myChart, {
  type: 'radar',
  data: {
    labels: ['Humidity','High', 'Low','Current Temperature'],
    datasets: [],
  },
  options:{}
});
function addData(weatherData) {
  // Passing the object
  dataset = Object.values(weatherData);

    chart.update();
}
