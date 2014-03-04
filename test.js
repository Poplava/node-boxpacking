var boxpack = require('./'),
    blocks = [
        { width: 200, height: 200 },
        { width: 100, height: 100 },
        { width: 100, height: 100 },
        { width: 100, height: 200 },
        { width: 50, height: 50 },
        { width: 10, height: 10 }
    ];

console.log(boxpack(blocks, {maxWidth: 200}));
