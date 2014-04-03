/*
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

// Configuration
app.configure(function () {
  app.set('port', process.env.PORT || 3001);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

// Router
var config = require('./config.json');
app.get('/GETMAC', function (req, res) {
  var exec = require('child_process').exec,
      child;

  child = exec(config.command, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('[ERROR] exec error: ' + error);
      console.log('[ERROR] stderr: ' + stderr);
    }
    var ip = '(' + req.ip + ')';
    stdout = stdout.split("\n");
    for (var stdkey in stdout) {
      var host = stdout[stdkey].split(" ");
      for (var hostkey in host) {
        if (ip === host[hostkey]) {
          var ans = host[3];
        }
      }
    }
    if (!ans) {
      var ans = 'notfound';
    }
    res.json({
      result: [req.ip, ans]
    });
  });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("isMyMAC server listening on port " + app.get('port'));
});
