const isLogged = true;

const isTrue = (isLogged) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if(isLogged) {
                resolve(randomNumber);
            } else {
                reject("An error occurred.");
            }
        }, 100);
    });
};

const isGreater = (number) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number > 0.5){
                resolve({name: "John", age: 24});
            } else {
                reject(`${number} is not greater than 0.5.`);
            }
        }, 100);
    })
}

isTrue(isLogged)
  .then(randomNumber => isGreater(randomNumber))
  .then(data => console.log(data))
  .catch(error => console.error(error));