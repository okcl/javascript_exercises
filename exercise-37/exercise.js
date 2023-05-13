const number = 15;
 
const isGreater = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(number > 10){
            resolve(`${number} is greater than 10`);
        } else {
            reject(`${number} is not greater than 10` );
        }
    }, 1000);
});

isGreater
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });