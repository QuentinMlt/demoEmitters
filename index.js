const test = require("./emitter");
const test1 = new test();

test1.on("messageReçu", function(payload){
    console.log('test1 : payload => ', payload)
})

test1.log(6);
test1.log(5);
test1.log(30);