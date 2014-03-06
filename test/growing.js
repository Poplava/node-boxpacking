var boxpacking = require('../'),
    assert = require('assert');

describe('Growing algorithm', function() {
    describe('Basic test', function() {
        var blocks = [
            { width: 100, height: 100 }
        ], pack;

        pack = boxpacking(blocks);

        it('should return 100 width and height', function() {
            assert.equal(100, pack.width);
            assert.equal(100, pack.height);
        });
    });
    describe('4 blocks test', function() {
        var blocks = [
            { width: 100, height: 100 },
            { width: 100, height: 100 },
            { width: 100, height: 100 },
            { width: 100, height: 100 }
        ], pack;

        pack = boxpacking(blocks);

        it('should return 4 blocks', function() {
            assert.equal(4, pack.list.length);
        });
        it('should return 200 width and height', function() {
            assert.equal(200, pack.width);
            assert.equal(200, pack.height);
        });
        it('should return correct coords', function() {
            assert.equal(0, pack.list[0].x);
            assert.equal(0, pack.list[0].y);
            assert.equal(100, pack.list[1].x);
            assert.equal(0, pack.list[1].y);
            assert.equal(0, pack.list[2].x);
            assert.equal(100, pack.list[2].y);
            assert.equal(100, pack.list[3].x);
            assert.equal(100, pack.list[3].y);
        });
        it('should return empty excludedBlocks', function() {
            assert.equal(0, pack.excludedBlocks.length);
        });
    });
});
