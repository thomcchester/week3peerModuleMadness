var http = require('http');
var totalBalance = require('./totalBalance.js');
http.createServer(function(req,res){
  res.writeHead(200);
   res.write(totalBalance.totalBalance + "$" + totalBalance.sum());
  res.end();
}).listen(8000);
