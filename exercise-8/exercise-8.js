function multiplyByTwo(value) {
  let number = 2;
  
  function inner(){
    number *= value;
    console.log(number);
  }
  inner()
}

multiplyByTwo(5);
