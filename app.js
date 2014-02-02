var express = require('express'),
  app = express(),
  argv = require('optimist').argv,
  lessMiddleware = require('less-middleware'),
  PORT = argv.port || 3000;

app.use(lessMiddleware({
  src: __dirname + '/app/assets'
  //, compress: true
}));

app.set('views', process.cwd() + '/app/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('appName', "Brooch");
app.locals.appName = app.get('appName');

require('./config/environments.js')(app);


app.use(express.static(__dirname + '/app/assets'));

require('./routes')(app);
require('./app/helpers/application_helper')(app);

var server = app.listen(PORT);
console.log('listening on port ' + PORT);

module.exports = {
  server: server,
  express: app,
  port: PORT
};
