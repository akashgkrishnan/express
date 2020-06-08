const express = require('express');
const app = express();

app.get('/', function (request, response){
  response.send('inside trys');
})


app.listen(3000, function(){
  console.log('started server');
})
