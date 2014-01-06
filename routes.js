var app = require('./app').express;

app.get('/', function(request, response){
  response.render('index');
});

app.get('/ui', function(request, response){
  response.render('sandbox');
});


