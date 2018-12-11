var fs = require("fs")
////Blocking code example
// var  data = fs.readFileSync('input.txt')
// console.log(data.toString())


// Non-blocking code example
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(error);
  console.log(data.toString());
});

console.log("Program Ended!")
