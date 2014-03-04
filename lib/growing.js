var _ = require('underscore');

var Growing = module.exports = function(blocks, options) {
    var defaults = {
        maxWidth: null,
        maxHeight: null
    };

    this.options = _.extend({}, defaults, options || {});

    _.extend(this, {
        width: 0,
        height: 0,
        blocks: blocks || [],
        nodes: [],
        list: [],
        nodeIndex: 0,
        growRightLast: 0
    });

    this.init();
};

_.extend(Growing.prototype, {
    init: function() {
        this.blocks.sort(function(a, b) {
            return b.height - a.height;
        });

        _.each(this.blocks, this.fit.bind(this));
    },

    pushList: function(block, x, y) {
        this.list.push(_.extend({}, block, { x: x, y: y }));
    },

    createNode: function(x, y, height) {
        this.nodes.push({
            x: x,
            y: y,
            height: height,
            index: this.nodeIndex++
        });
    },

    fit: function(block) {
        if (!this.findNode(block))
            this.grow(block);
    },

    findNode: function(block) {
        if (!this.nodes.length) return;

        var self = this, elite,
            matches = _.filter(this.nodes, function(node) {
                var nodeWidth = self.width - node.x;

                return block.width <= nodeWidth && block.height <= node.height;
            });

        if (!matches.length) {
            elite = _.filter(this.nodes, function(node) {
                var nodeWidth = self.width - node.x;

                return block.width === nodeWidth || block.height === node.height;
            });

            if (elite.length) matches = elite;
        }

        matches.sort(function(a, b) {
            var aWidth = self.width - a.x,
                bWidth = self.width - b.x;

            return bWidth + b.height - aWidth - a.height;
        });

        if (!matches.length) return;

        this.pasteToNode(matches[0], block);

        return true;
    },

    grow: function(block) {
        var targetWidth = this.width + block.width,
            targetHeight = this.height + block.height,
            canGrowRight = !(this.options.maxWidth && this.options.maxWidth >= targetWidth),
            canGrowDown = !(this.options.maxHeight && this.options.maxHeight >= targetHeight);

        if (targetWidth <= targetHeight && canGrowRight)
            this.growRight(block);
        else if (canGrowDown)
            this.growDown(block);
    },

    growRight: function(block) {
        var x = this.width,
            y = 0;

        if (x > 0 && block.height < this.growRightLast)
            this.createNode(x, block.height, this.growRightLast - block.height);

        this.width += block.width;
        this.height = this.height < block.height ? block.height : this.height;
        this.growRightLast = block.height;

        this.pushList(block, x, y);
    },

    growDown: function(block) {
        var x = 0,
            y = this.height;

        this.createNode(block.width, this.height, block.height);

        this.height += block.height;
        this.width = this.width < block.width ? block.width : this.width;

        this.pushList(block, x, y);
    },

    pasteToNode: function(node, block) {
        var nodeWidth = this.width - node.x,
            dw = nodeWidth - block.width,
            dh = node.height - block.height;

        this.nodes = _.filter(this.nodes, function(a) {
            return a.index !== node.index;
        });

        if (dw > 0)
            this.createNode(node.x + block.width, node.y, block.height);

        if (dh > 0)
            this.createNode(node.x, node.y + block.height, dh);

        this.pushList(block, node.x, node.y);
    }
});
