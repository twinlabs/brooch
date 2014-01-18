module.exports = function(app){
  app.locals.environment = {
    isDev: function(){
      return app.get('env') === 'development';
    }
  };

  app.locals.coolPrinter = function(string, delimiter){
    var position = 0,
      output = '';

    delimiter = delimiter || '-';

    stringBuilder(string, [delimiter, string, delimiter]);

    return output;

    function stringBuilder(string, structure){
      var counter = 0;

      while (counter < string.length){
        if (string === structure[position]){
          output += '\\n' + structure[position] + '\\n';
          break;
        }

        if (counter === string.length) {
          output += '\\n';
        }

        output += structure[position];
        counter ++;
      }

      if (position < structure.length - 1) {
        position++;
        stringBuilder(string, structure);
      }
    }
  };
};
