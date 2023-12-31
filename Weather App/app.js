 
let weather = {
//  personal API CODE. 
  "apiKey":"247def972ff1d7467295eb28dc5b779f",
//Combining the original link with the API code + the city you want to display
fetchWeather: function(city){
  fetch (
    "http://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid="
      + this.apiKey
    )
   
    .then((response) => response.json ())
    .then((data) => this.displayWeather(data));
}, 
displayWeather: function (data) {
const  {name} = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;

console.log (name,icon,description, temp, humidity, speed )
document.querySelector(".city").innerText = "Weather in "   + name;
document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "  °C";
document.querySelector(".humidity").innerText = "Humidity:  " + humidity + "%"
document.querySelector(".wind").innerText = "Wind Speed:  " + speed + " KM/H";

},

search: function ( ) {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
}

document.querySelector(".search button ")
.addEventListener("click", function () {weather.search();
});

document.querySelector(".search button ")
.addEventListener("click", function () {weather.search();
});

document.querySelector(".search-bar")
  .addEventListener("keyup", function (event) 
  {
    if (event.key == "Enter") {
      weather.search();
    }
  });
