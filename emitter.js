const EventEmitter = require('events');

class FizzBuzz extends EventEmitter {
    log(payload) {
        console.log(payload)
        if(payload % 3 == 0) {  
            console.log("Fizz");
        }
    }
}

module.exports = FizzBuzz;