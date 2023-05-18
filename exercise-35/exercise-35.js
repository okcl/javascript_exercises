function repeatHello(callback){
    let cbInt = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        clearInterval(cbInt);
    }, 10000);
}

repeatHello(() => console.log('Hello'));


/* We can also get the same result with old way, for example:

repeatHello(function() {
    console.log('Hello');
});

 But arrow function feature helps us to improve readibility and menagement of the code
*/