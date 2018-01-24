let luigiKey = `53377696a03f2e041c102d0eefcf9db8`;
let kelvinMax = ``;
let kelvinMin = ``;
let city ="";

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
    kelvinMax = response.list[0].main.temp_max;
    kelvinMin = response.list[0].main.temp_min;
    // Convert user text into
    let high = (kelvinMax-273.15)*1.8+32;
    let low = (kelvinMin-273.15)*1.8+32;
    high = high.toFixed(1);
    low = low.toFixed(1);
    console.log(low);
    console.log(high);
    // Table Body is appended with interpolated temperatures
    $("#trip-table > tbody:nth-child(2)").append(`<tr><td>${high}</td><td>${low}</td><td>`);
  });

}// Closes getWeather function

// AJAX Weather Call
