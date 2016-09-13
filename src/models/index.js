var fs = require('fs');
var exports = {};

fs.readdirSync(__dirname).forEach(function(file) {
    if (file !== 'index.js') {
        var moduleName = file.split('.')[0];
        exports[moduleName] = require('./' + moduleName);
    }
});

module.exports = exports;
