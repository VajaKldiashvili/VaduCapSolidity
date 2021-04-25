const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3')  // this is a construction function
const web3 = new Web3(ganache.provider()) // this instance call creating an object

/*
Mocha Starts  ->  Deploy new Contract  ->  Mannipulate the contract  ->  Make Assertion About the Contract
                          ^                                                                   
                          |                                                             |
                          -         <-        -      -           <-       -          -  |
*/

// The local network (Ganache) has unlock accounts, which helps with testing. - > We use Web3 to access these accouts and test our contracts
// All calls to Web3 are async
beforeEach( () => {
    // Get a list of all accoutns
    web3.eth.getAccounts()
        .then(fetchedAccounts =>{
            console.log(fetchedAccounts);
        });
    // Use one of those accounts to deploy the contract
})

describe('Inbox', () => {
    it('deploys a contract', ()=>{

    });
 
});



// Example of using Mocha - general
/*
class Car {
    park(){
        return "stooped";
    }
    drive(){
        return "vrom";
    }
}
let car
beforeEach (() => {
  car = new Car();
});

describe('Car', ()=>{
    it('can park', ()=>{
        assert.equal(car.park(), 'stooped');
    });
    it('can drive', ()=>{
        assert.equal(car.drive(), 'vrom');
    });
});
*/


// What is Mocha?
// Test running framework for testing JavaScript (Genereal Purpose)
// Funtions:
// 1. it - run a test and make it an assertion 
// 2. describe - group together 'it' funtions
// 3. beforeEach - execute some general setup code

// When we make a new instance of Web3, we need to set up a provided, which is a communication layer b/w Web3 lib and the specifc ETH newtwork
// Every provided has the same methods.  

// Ganache ->   Provider  ->     Web3
//    |            |              |   
// Testing Lib  Communication    Hook into the ETH network
//              Tool          