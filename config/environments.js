module.exports = function(app) {
  app.locals.environment = {
    is: function(environment){
      return app.get('env') === environment;
    }
  };

  // configure development environment:
  app.configure('development', function(){
    app.locals.pretty = true;
    // TODO: set a default log level of 'debug' in dev 'environment' here:
  });
};
