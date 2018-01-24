//1) Store response data in array
//2) send array to chart variable

//3) anvas
let myChart = $('#myChart')[0].getContext('2d');

let radarChart = new Chart(myChart, {
  type: 'radar',
  data: {
    labels: ['Temperature','High', 'Low','Humidity'],
    datasets: [],
  },
  options:{}
});
