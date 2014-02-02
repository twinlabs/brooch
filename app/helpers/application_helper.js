module.exports = function(app){
  app.locals.coolPrinter = function(targetString, options){
    options = options || {};

    var position = 0,
      output = '',
      delimiter = options.delimiter || '-',
      breaker = options.breaker || '\\n',
      structure = options.structure || [delimiter, targetString, delimiter];

    stringBuilder(targetString, structure);

    return output;

    function stringBuilder(targetString, structure){
      var counter = 0;

      while (counter < targetString.length){
        if (
            structure[position] === targetString ||
            // `!!` signifies "simply use the targetString here":
            structure[position] === "!!"
        ){
          output += targetString;
          break;
        }

        output += structure[position];
        counter ++;
      }

      if (position < structure.length - 1) {
        output += breaker;
        position++;
        stringBuilder(targetString, structure);
      }
    }
  };
};
