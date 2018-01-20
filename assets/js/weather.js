let apiKey = `e73f0588b3464897830947746d60b65d`;
// Cheat-Sheet
/*          {
             "timezone":"America\/New_York",
             "state_code":"NC",
             "lat":35.7721,
             "lon":-78.63861,
             "country_code":"US",
             "station_id":"723060-13722",
             "data":[
                {
                   "rh":32,
                   "wind_spd":6.7,
                   "slp":1020.3,
                   "h_angle":-90,
                   "dewpt":-7.5,
                   "snow":0,
                   "uv":0,
                   "wind_dir":220,
                   "weather":{
                      "icon":"c01n",
                      "code":"800",
                      "description":"Clear sky"
                   },
                   "pod":"n",
                   "vis":1.5,
                   "precip":0,
                   "elev_angle":-33,
                   "ts":1483232400,
                   "pres":1004.7,
                   "datetime":"2017-01-01:04",
                   "temp":8.3,
                   "dhi":0,
                   "clouds":0
                }, ...
             ],
             "city_name":"Raleigh",
             "city_id":"4487042"
          } */
// Interpolate these. Wait on Ryan's function or help structure one to take both.
let city = ``;
let startDate = ``;
let endDate = ``;

const getWeather = () => {

  $.ajax({
    url: `https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=${apiKey}`,
    method: `GET`,
  }).done(function response(response){
    console.log(response);
    let high = ``;
    let low = ``;
  });

}// Closes getWeather function
getWeather();
console.log(`hello you!`);
