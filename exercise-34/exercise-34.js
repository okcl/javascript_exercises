function printAsyncName(callback, string) {
    let helloInt = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        clearInterval(helloInt);
        console.log(string);
    }, 2000);
}

printAsyncName(() => console.log("Hello"), 'There 👽')