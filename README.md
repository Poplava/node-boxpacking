# node-boxpacking v0.1.0 

[![Build Status](https://travis-ci.org/Poplava/node-boxpacking.png?branch=master)](https://travis-ci.org/Poplava/node-boxpacking)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> 2D bin packing algorithm usefull for sprite-generators or texture atlas

## Usage

```shell
npm install boxpacking
```

```javascript
var pack = require('boxpacking');

var blocks = [
    { width: 100, height: 100 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 }
];

var result = pack(blocks);
```
