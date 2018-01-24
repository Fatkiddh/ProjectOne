// alert('hello world')

// var config = {
//     apiKey: "AIzaSyDhBBrXvKACgPNZr66ia334fqZQVAqWthg",
//     authDomain: "group-project-1515725741271.firebaseapp.com",
//     databaseURL: "https://group-project-1515725741271.firebaseio.com",
//     projectId: "group-project-1515725741271",
//     storageBucket: "group-project-1515725741271.appspot.com",
//     messagingSenderId: "73096630745"
//   };
//   firebase.initializeApp(config);

// var airports = [
//   { value: 'Los Angelos International', data: 'LAX'},
//   { value: 'Orange County International', data: 'SNA'},
//   { value: 'O_Hare International Airport', data: 'ORD'},
//
// ];



// var swaggerClient = new SwaggerClient(specUrl);
var apiKey = '2JLTZ1Hrikb8Fj3JzIApqvYUP7RfOdom';

var departure = "";
var destination = "";


// uses the input of the user to pass into the api parameter for departure
$("#departureInput").change(function(){
  departure = $(this).val();
  console.log("this is user input: " + departure)
}); // closes change function

// uses the input of the user to pass into the api parameter for destination
$("#destinationInput").change(function(){
  destination = $(this).val();
  console.log("this is user input: " + destination)
}); // closes change function

// $("#departureDate").change(function(){
//   departure_date = moment("#departureDate", "YYYY-MM").isValid();
//   console.log(departure_date);
// });


const getFlights = () => {
  console.log('click');
  $.ajax({
    url: `https://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin=${departure}&destination=${destination}&departure_date=2018-02--2018-06&duration=5--7&apikey=${apiKey}`,
    // url: `https: api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=New%20York&image_size=HD&category=zoo&;apikey=${apiKey}`
    method: 'GET',
  }).done(function response(response){
    // console.log(response);


    let searchResults = response.results;
    let departure = response.origin;
    let destination = response.results[0].destination;
    let departureDate = response.results[0].departure_date;
    let returnDate = response.results[0].return_date;
    let price = response.results[0].price;



    console.log(searchResults);
    console.log('we will be flying out of: ' + departure);
    console.log("we will be arriving at: " + destination);
    console.log("we are leaving on year/month/day: " + departureDate);
    console.log('we will be back on year/month/day: ' + returnDate);
    console.log('price of the flight is : ' + price);


    for (var i = 0; i < 5; i++) {
      price = response.results[i*100].price;
      $("#trip-table > tbody").append("<tr><td>" + departure + "</td><td>" + destination + "</td><td>" + departureDate + "</td><td>" + returnDate + "</td><td>" + price + "</td><td>" );

    }
});
  } // closes getDeparture
