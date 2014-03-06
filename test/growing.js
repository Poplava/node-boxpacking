var boxpacking = require('../'),
    assert = require('assert');

describe('Growing algorithm', function() {
    describe('Basic test', function() {
        var blocks = [
            { width: 100, height: 100 }
        ], pack;

        pack = boxpacking(blocks);

        it('should return object where width and height equal to 100', function() {
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
        it('should return object where width and height equal to 200', function() {
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
    describe('Sort test', function() {
        var blocks = [
            { width: 200, height: 200 },
            { width: 10, height: 100 },
            { width: 100, height: 100 },
            { width: 100, height: 100 }
        ], pack;

        pack = boxpacking(blocks);

        it('should return correct blocks order', function() {
            assert.equal(200, pack.list[0].width);
            assert.equal(100, pack.list[1].width);
            assert.equal(100, pack.list[2].width);
            assert.equal(10, pack.list[3].width);
        });
        it('should return correct coords', function() {
            assert.equal(0, pack.list[0].x);
            assert.equal(0, pack.list[0].y);
            assert.equal(200, pack.list[1].x);
            assert.equal(0, pack.list[1].y);
            assert.equal(200, pack.list[2].x);
            assert.equal(100, pack.list[2].y);
            assert.equal(0, pack.list[3].x);
            assert.equal(200, pack.list[3].y);
        });
    });
    describe('Complicated test', function() {
        var blocks = [],
            elements = 1000,
            pack;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for(var i = 0; i < elements; i++) {
            blocks.push({
                width: getRandomInt(1, 100),
                height: getRandomInt(1, 100)
            });
        }

        pack = boxpacking(blocks);

        it('should return list of ' + elements + ' elements', function() {
            assert.equal(elements, pack.list.length);
        });
        it('should return object where width and height more than or equal to square root of ' + elements, function() {
            assert(Math.sqrt(elements) <= pack.width);
            assert(Math.sqrt(elements) <= pack.height);
        });
     });
});
