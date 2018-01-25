let luigiKey = `53377696a03f2e041c102d0eefcf9db8`;
let kelvinCurrent =``;
let kelvinMax = ``;
let kelvinMin = ``;
let city =``;
let humidity=``;

// Targets city/staying form ID and gets input
$("#staying").change(function(){
  city = $(this).val();
  console.log("this is user input: " + city)
}); // closes change function
const getWeather = () => {
  console.log('click');
  console.log(city);
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},3166-2&APPID=${luigiKey}`,
    method: 'GET',
  }).done(function response(response){
    // Store object values for High and Low temp
    console.log(response);
    humidity = response.list[0].main.humidity;
    kelvinCurrent = response.list[0].main.temp;
    kelvinMax = response.list[0].main.temp_max;
    kelvinMin = response.list[0].main.temp_min;
    // Convert user text into
    let currentTemperature = (kelvinCurrent-273.15)*1.8+32;
    let high = (kelvinMax-273.15)*1.8+32;
    let low = (kelvinMin-273.15)*1.8+32;
    high = high.toFixed(1);
    low = low.toFixed(1);
    console.log(`low: ${low}`);
    console.log(`high: ${high}`);
    console.log(`currentTemperature: ${currentTemperature}`);
    console.log(`humidity: ${humidity}`);

    // Table Body is appended with interpolated temperatures
    $("#weather-table > tbody").append(`<tr><td>${high}</td><td>${low}</td><td>`);
    // Object for weather data
    let weatherData = [
      humidity,
      parseFloat(high),
      parseFloat(low),
      currentTemperature
    ];
    addData(weatherData);

  }); // closes AJX done
}// Closes getWeather function

function addData(weatherData) {
  console.log('this is weatherData inside addData: ');
  console.log(weatherData);
  // Passing the object
  let myChart = $('#myChart')[0].getContext('2d');

  let radarChart = new Chart(myChart, {
    type: 'radar',
    data: {
      labels: ['Humidity','High', 'Low','Current Temperature'],
      datasets: [{
          label: 'Test',
          data: weatherData
      }],
    }
    // options:{}
  });

  // dataset = Object.values(weatherData);

}
