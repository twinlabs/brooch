var express = require('express'),
  app = express(),
  argv = require('optimist').argv,
  lessMiddleware = require('less-middleware'),
  PORT = argv.port || 3000;

// TODO: set a default log level of 'debug' in dev 'environment' here:

app.use(lessMiddleware({
  src: __dirname + '/app/assets'
  //, compress: true
}));

app.set('views', process.cwd() + '/app/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/app/assets'));


var server = app.listen(PORT);
console.log('listening on port ' + PORT);

module.exports = {
  server: server,
  express: app,
  port: PORT
};

require('./routes');
