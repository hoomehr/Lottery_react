const path = require('path');
const fs = require('fs');
const solc = require('SOLC');


const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// here is contract name from .sol file
module.exports = solc.compile(source, 1).contracts[':Lottery'];