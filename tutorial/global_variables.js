console.log(__filename);

console.log(__dirname);


function printHello() {
   console.log( "Hello, World!");
}


// Now call above function after 2 seconds
setTimeout(printHello, 2000);


// Now call above function after 3 seconds
var t = setTimeout(printHello, 3000);

// Now clear the timeer
clearTimeout(t);


function printHelloRepeatedly() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setInterval(printHelloRepeatedly, 2000);
