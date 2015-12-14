var fs = require('fs');
var path = require('path');
var filename = path.resolve(__dirname, 'info.json');

fs.readFile(filename, 'utf8', function(err, data) {
  console.log(err || data);
});
