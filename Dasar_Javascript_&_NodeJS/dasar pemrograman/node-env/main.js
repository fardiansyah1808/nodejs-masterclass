const os = require('os');

const fs = require('fs');

console.log('Hello World!');

console.log(1 + 1 * 23);


console.log(os.platform());

console.log(os.arch());

// console.log(os.cpus());

fs.writeFileSync('output.txt', 'Ini adalah output dari fs writeFileSync main.js');

let content = fs.readFileSync('output.txt');

console.log(content.toString());
