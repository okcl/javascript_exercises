function repeatHello(callback){
    let cbInt = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        clearInterval(cbInt);
    }, 5000);
}

repeatHello(() => console.log('Hello'));