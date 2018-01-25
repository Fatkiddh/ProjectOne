let apis = function (){
  getFlights();
  let weatherData = getWeather();
  addData(weatherData);
};
