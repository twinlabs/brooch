var assert = require('assert');
var sinon = require('sinon');
var app = require('../app');
var http = require('http');

var socketAddress = 'http://localhost:' + app.socket_port;

// TODO: set a default log level of 'debug' here:

describe('app.js', function(){
  it('exists', function(){
    // this is a no-op test. all it does is verify that nothing about our test setup is insane.
    assert.ok(true);

    // it sure would be weird is app.js didn't have SOME exports, at least for testing...:
    assert.ok(typeof app !== "undefined", "if app.js doesn't have any exports, delete this test.");
  });
});


describe('assets', function(){
  it('uses middleware to serve LESS assets as CSS', function(done){
    var request = http.request({
      path: '/stylesheets/normalize.css',
      port: app.port
    }, function(response){
      assert(response.statusCode === 200, "status code not 200/OK");
      done();
    });

    request.end();

    request.on('error', function(error){
      console.log('request error: ' + error.message);
    });
  });
});

describe('rendering', function(){
  it('looks for views in the "app/views" subdirectory', function(){
    assert(app.express.get('views') === rootDir + '/app/views', "this instance of express has a different 'views' default than expected.");
  });

  it('registers jade as a templating engine', function(){
    assert(app.express.engines['.jade'], "jade is not registered with this instance of express.");
  });

  it('registers jade the default templating engine', function(){
    assert(app.express.get('view engine') === 'jade', "jade is not the default view engine for this instance of express.");
  });
});
