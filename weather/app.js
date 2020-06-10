const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', function(request, response) {
response.sendFile(__dirname + "/index.html")
})


app.post("/", function(request, response){
  const city = request.body.City;
  const query = city;
  const apiKey = 'efd449a1fcb871ccb49fd047276cac22'
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid="+ apiKey + "&units=metric"
  https.get(url, function(res) {
    res.on('data', function(data) {
      weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      response.write("<p> The weatherData for "+ city +" is " + desc + "</p> <img src =http://openweathermap.org/img/wn/" + icon + "@2x.png>");
      response.write("<h1>Temp in " + city +" is " + temp + "</h1>");
      response.send();
    });
  });
})










app.listen(3000, function() {
  console.log('server started');
})
