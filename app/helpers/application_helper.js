module.exports = function(app){
  app.locals.environment = {
    isDev: function(){
      return app.get('env') === 'development';
    }
  };

  app.locals.coolPrinter = function(string, delimiter, ender, breaker){
    // TODO: refactor to take a map of options or something else nice!
    var position = 0,
      output = '',
      structure;

    delimiter = delimiter || '-';
    breaker = breaker || '\\n';

    if (typeof ender === "undefined") {
      structure = [delimiter, string, delimiter];
    } else {
      structure = [delimiter, string, delimiter, ender];
    }

    stringBuilder(string, structure);

    return output;

    function stringBuilder(string, structure){
      var counter = 0;

      while (counter < string.length){
        if (string === structure[position]){
          output += structure[position];
          break;
        }

        output += structure[position];
        counter ++;
      }

      if (position < structure.length - 1) {
        output += breaker;
        position++;
        stringBuilder(string, structure);
      }
    }
  };
};
