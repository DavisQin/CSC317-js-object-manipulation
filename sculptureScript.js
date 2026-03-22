const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[0] // <---- comment out this line in your solution!

const sculptureListLengths = []

for (let i = 0; i < sculptureList.length; i++) {
    const item = sculptureList[i]
    const temp = {}

    for (let key in item) {
        temp[key] = item[key].length
    }

    sculptureListLengths.push(temp)
}

//console.log(sculptureListLengths)
for (let i = 0; i < sculptureListLengths.length; i++) {
    console.log('{')
    for (const key in sculptureListLengths[i]) {
        console.log(`  ${key}: ${sculptureListLengths[i][key]}`)
    }
    console.log('}\n')
}

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element) {
//     console.log(`${key}: ${element[key].length}`)
// }