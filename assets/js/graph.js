let myChart = $('#myChart')[0].getContext('2d');

let radarChart = new Chart(myChart, {
  type: 'radar',
  data: {
    labels: ['Temperature','High', 'Low','Humidity'],
    datasets: [],
  },
  options:{}
});
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
