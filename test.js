var G = require('./'),
    nodes = [
        { w: 100, h: 200 },
        { w: 100, h: 20 },
        { w: 10, h: 10 },
        { w: 10, h: 200 },
        { w: 40, h: 40 },
        { w: 128, h: 128 }
    ];

console.log((new G(nodes)).list);
