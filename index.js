const test = require("./emitter");
const test1 = new test();

test1.on("messageReçu", function(payload){
    console.log('test1 : payload => ', payload)
})

test1.log(6);