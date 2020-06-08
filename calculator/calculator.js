const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response) {
  console.log(request.body);
  sum = Number(request.body.firstNumber) + Number(request.body.secondNumber);
  response.send('sum is '+ sum);
});

app.get('/bmi', function(request, response){
  response.sendFile(__dirname + '/bmicalculator.html');
});

app.post("/bmi", function(request, response){
  weight = parseFloat(request.body.Weight);
  height = parseFloat(request.body.height);
  var bmi = weight/ (height * height);
  response.send('your BMI is ' + bmi);
});



app.listen(3000, function() {
  console.log('started server for calculator');
});
