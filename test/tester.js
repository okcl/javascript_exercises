let arr = [1,2,3,4];

let obj = {
    "key": 1,
    "key2": 2
}

console.log(Object.entries(obj))
for (let entry in Object.entries(obj)){
    console.log(entry)
}
