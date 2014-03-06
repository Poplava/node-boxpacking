var boxpacking = require('../'),
    assert = require('assert');

describe('Growing algorithm', function() {
    it('should return 100 width and height', function() {
        var blocks = [
            { width: 100, height: 100 }
        ], pack;

        pack = boxpacking(blocks);

        assert.equal(100, pack.width);
        assert.equal(100, pack.height);
    });
});
