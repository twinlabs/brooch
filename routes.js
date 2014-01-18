module.exports = function(app){
  app.get('/', function(request, response){
    response.render('index');
  });

  app.get('/ui', function(request, response){
    response.render('sandbox');
  });
};
