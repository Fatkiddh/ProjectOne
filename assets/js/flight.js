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
let departure_date ="";
let return_date ="";
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

$("#departureDate").change(function(){
  departure_date = $(this).val();
  console.log(departure_date);
});

$("#returnDate").change(function(){
  return_date = $(this).val();
  console.log(departure_date);
});

$("#cost").change(function(){
  cost = $(this).val();
  console.log(cost);
});

const getFlights = () => {
  console.log('click');
  $.ajax({
    url: `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${apiKey}&origin=${departure}&destination=${destination}&departure_date=${departure_date}&return_date=2018&arrive_by=${departure_date}T05%3A25&return_by=${return_date}T05%3A25&nonstop=false&max_price=${cost}&currency=USD&travel_class=ECONOMY&number_of_results=5`,

    method: 'GET',
  }).done(function response(response){
    // console.log(response);
console.log(response);
    //
    // let searchResults = response.results;
    // let departure = response.origin;
    // let destination = response.results[0].destination;
    // let returnDate = response.results[0].return_date;
    // let departureDate = response.results[0].departure_date;
    // let price = response.results[0].price;
    //
    //
    //
    //
    // console.log(searchResults);
    // console.log('we will be flying out of: ' + departure);
    // console.log("we will be arriving at: " + destination);
    // console.log("we are leaving on year/month/day: " + departureDate);
    // console.log('we will be back on year/month/day: ' + returnDate);
    // console.log('price of the flight is : ' + price);
    //
    //
    // for (i = 0; i <= response.results.length; i++) {
    //   departureDate = response.results[i*100].departure_date;
    //   price = response.results[i*100].price;
    //   returnDate = response.results[i*100].return_date;
    //   console.log(`price:${price}`);
    //   $("#trip-table > tbody").append("<tr><td>" + departure + "</td><td>" + destination + "</td><td>" + departureDate + "</td><td>" + returnDate + "</td><td>" + price + "</td><td>" );
    // }

});
  } // closes getDeparture
