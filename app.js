'use strict';
const http = require('http');
const port = process.argv[2] || 3000;
const cmd = process.argv[3] || 'arp -a';
const exec = require('child_process').exec;

const server = http.createServer((req, res) => {
  exec(cmd, (err, stdin, stdout) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end();
    } else {
      let data = {
        ip: req.connection.remoteAddress ? req.connection.remoteAddress.match(/(\d{1,3}\.){3}(\d{1,3})/)[0] : null,
        mac: null
      };

      stdin.split('\n').forEach((i) => {
        let regex = /([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])/
        if (i.match(data.ip) && i.match(regex)) data.mac = i.match(regex)[0];
      });

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    };
  });
});

server.listen(port, () => {
  console.log('isMyMAC listening on port ' + port);
});
