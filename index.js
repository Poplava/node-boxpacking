var Growing = require('./lib/growing');

module.exports = function(blocks, options, method) {
    return new Growing(blocks, options);
};
