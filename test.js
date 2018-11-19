let obj = {
    id: 12,
    names: ['bill', 'mary'],
    map: {
        lon: 123,
        lat: 234
    }
}
const newObj = {};

for (let o in obj) {
    console.log(o);
    if (typeof obj[o] === 'object') {

        
        for (let i in obj[o]) {
            console.log(i);
            //newObj[o] = obj[o][i];
        }
    } else {
        newObj[o] = obj[o];
    }
}

console.log(newObj);