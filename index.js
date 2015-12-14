var fs = require('fs');
var filename = './info.json';

fs.readFile(filename, 'utf8', function(err, data) {
  console.log(err || data);
});
