/*
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

var app = module.exports = express(),
    config = require('./config.json');

// Configuration
app.configure(function () {
  app.set('port', process.env.PORT || config.port);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

// Router
app.get('/', function (req, res) {
  var exec = require('child_process').exec;
  var child = exec(config.command, function (err, stdout) {
    if (err !== null) {
      console.log('[ERROR] ' + err);
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
