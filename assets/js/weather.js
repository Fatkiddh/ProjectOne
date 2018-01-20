let luigiKey = `53377696a03f2e041c102d0eefcf9db8`;
let kelvinMax = ``;
let kelvinMin = ``;
// Interpolate these. Wait on Ryan's function or help structure one to take both.
let city ="";
const getWeather = () => {
  console.log('click');
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},3166-2&APPID=${luigiKey}`,
    method: `GET`,
  }).done(function response(response){
    kelvinMax = response.list[0].main.temp_max;
    kelvinMin = response.list[0].main.temp_min;
    let high = $(``).text((kelvinMax-273.15)*1.8+32);
    let low = $(``).text((kelvinMin-273.15)*1.8+32);
  });
}// Closes getWeat`her function
getWeather();
console.log(`hello you!`);
