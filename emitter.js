const EventEmitter = require('events');

class FizzBuzz extends EventEmitter {
    log(payload) {
        console.log(payload)
        if(payload % 3 == 0) {  
            console.log("Fizz");
        }
        if(payload % 5 == 0) {  
            console.log("Buzz");
        }
    }
}

module.exports = FizzBuzz;