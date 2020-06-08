const express = require('express');

const app = express()

app.get('/', function (request, response){
  response.send('<h1>hello! World </h1>');
})

app.get('/contact', function (request, response){
  response.send('contact');
})

app.get('/about', function (request, response){
  response.send('about');
})

app.get('/hello', function (request, response){
  response.send('ello');
})


app.get('/calculator', function(request, response){
  response.send('hello world')
})



app.listen(3000, function (){
  console.log('port started at 3000');
});
