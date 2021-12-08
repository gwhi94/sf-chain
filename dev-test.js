const Block = require('./block');

const block = new Block('refdev1', 'refdev2', 'refdev3', 'refdev4');

console.log(block.toString());
console.log(Block.genesis().toString());