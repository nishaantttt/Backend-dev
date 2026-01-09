//fs module

const fs = require("fs");

console.log("end")

// fs.readFile('./log.txt', 'utf-8', (err,data) =>{
//     if(err) throw err
//     console.log(data)
// })

// const data = fs.readFileSync('./log.txt', 'utf-8');
// console.log(data)
const data = " sdukfgbdfku"
fs.writeFile('./output.txt', data, (err)=>{
    if(err) throw err
    console.log("file write success")
})

console.log("first") 


