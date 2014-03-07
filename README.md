# node-boxpacking v0.1.0 

[![Build Status](https://travis-ci.org/Poplava/node-boxpacking.png?branch=master)](https://travis-ci.org/Poplava/node-boxpacking)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> 2D bin packing algorithm usefull for sprite-generators or texture atlas

## Install

```shell
npm install boxpacking
```

## Usage

```javascript
var boxpacking = require('boxpacking');

var blocks = [
    { width: 100, height: 100 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 },
    { width: 50, height: 50 }
];

var pack = boxpacking(blocks);
```

This will return into "pack" variable an object which contains a list of blocks with coordinates.

### Options:

#### maxWidth

Result max width.

#### maxHeight

Result max height.

### Result:

```javascript
{
    list: [
        { width: 100, height: 100, x: 0, y: 0 },
        { width: 50, height: 50, x: 100, y: 0 },
        { width: 50, height: 50, x: 100, y: 50 },
        { width: 50, height: 50, x: 0, y: 100 },
        { width: 50, height: 50, x: 50, y: 100 },
        { width: 50, height: 50, x: 100, y: 100 }
    ],
    excludedBlocks: [],
    width: 150,
    height: 150
}
```

#### list

An array of blocks

#### excludedBlocks

An array of blocks which excluded from result. It can happen when both maxWidth and maxHeight options are passed and
algorithm couldn't fit some blocks.

#### width

Result width.

#### height

Result height.

