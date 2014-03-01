var _ = require('underscore');

var GrowBinPack = function(nodes, options) {
    var defaults = {
        maxWidth: null,
        maxHeight: null
    };

    this.options = _.extend(options || {}, defaults);

    _.extend(this, {
        root: {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        },
        nodes: [],
        list: []
    });

    this.init();
};

_.extend(GrowBinPack.prototype, {
    init: function() {
        console.log(this);
    }
});

module.exports = GrowBinPack;

