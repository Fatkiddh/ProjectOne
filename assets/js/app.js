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
var apiKey = 'nv7Usmj1o5jdTW3rGLHXa3ymwHHSLfQi';

var departure = "";



    // console.log('what is my destination: ' + destination);
       const getFlights = () => {
         console.log('click');
         $.ajax({
           url: `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?origin=LAX&departure_date=2018-02-10--2018-02-20&duration=7--9&max_price=500&apikey=${apiKey}`
            // url: 'https://api.sandbox.amadeus.com/v1.2/location/LAX/?apikey='+ apiKey,
            // url: "https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=New%20York&image_size=HD&category=zoo&;apikey=" + apiKey,
           method: 'GET',
        }).done(function response(response){
        //     console.log(response);
            // arr.html('#searchBar');
            console.log('this should the first element: ');
              console.log(response.results[0]);
          let searchResults = response.results[0];
          let departure = response.origin;
          let destination = response.results[0].destination;
          let departureDate = response.results[0].departure_date;
          let returnDate = response.results[0].return_date;

          // console.log(searchResults);
          console.log('we will be flying out of: ' + departure);
          console.log("we will be arriving at: " + destination);
          console.log("we are leaving on year/month/day: " + departureDate);
          console.log('we will be back on year/month/day: ' + returnDate);


          });

       } // closes getDeparture
