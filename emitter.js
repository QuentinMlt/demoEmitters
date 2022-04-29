const EventEmitter = require('events');

class FizzBuzz extends EventEmitter {
    log(payload) {
        console.log(payload)
    }
}

module.exports = FizzBuzz;