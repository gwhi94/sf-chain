const Block = require('./block');

const newBlock = Block.mineBlock(Block.genesis(), 'foo');

console.log(newBlock.toString());