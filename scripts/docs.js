var fs = require('fs');
var module = require('../package.json')

fs.createReadStream('./dist/'+module.name+'.css').pipe(fs.createWriteStream('./docs/docs.css'));
