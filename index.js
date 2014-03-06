var _ = require('underscore'),
    Growing = require('./lib/growing');

module.exports = function(blocks, options) {
    var result = {
            list: [],
            excludedBlocks: [],
            width: 0,
            height: 0
        },
        pack = new Growing(blocks, options);

    return _.pick(pack, _.keys(result));
};
