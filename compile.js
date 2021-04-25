const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];


// Solidy compiler is assumaing that we might try to run multiple contracts
// bytecode - this the code of the contract that we are going to send to the blockchain
// interface - contract ABI (communiaton layer b/w solidy and js)
// ABI lists all the functions that are available for a contract(retrun variable, arguments, type of variables)

/*Testing of Contracts
1. We create a local network then we can use for testing. We send the contract to the local network. 
2. Web3 - a tool to access the contract on the etherium network
3. Use Ganache library to test contracts
4. Try to use Web3 version 1.x.x insted of 0.x.x, bc it's more efficient and it help you write cleaner code

*/ 