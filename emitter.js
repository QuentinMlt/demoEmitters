const EventEmitter = require('events');

class FizzBuzz extends EventEmitter {
    log(payload) {
        console.log(payload)
        if(payload % 3 == 0 && payload % 5 != 0) {  
            console.log("Fizz");
        }
        else if(payload % 5 == 0 && payload % 3 != 0) {  
            console.log("Buzz");
        }
        else if(payload % 5 == 0 && payload % 3 == 0) {  
            console.log("FizzBuzz");
        }
        else if(payload % 5 != 0 || payload % 3 != 0) {  
            console.log("pas multiple de 3 ou de 5");
        }
        

    }
}

module.exports = FizzBuzz;