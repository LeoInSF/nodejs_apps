var buf = new Buffer(10);

var buf2 = new Buffer([10, 20, 30, 40, 50]);

var buf3 = new Buffer("Simply Easy Learning", "utf-8");

buf = new Buffer(256);

len = buf.write("Simply Easy Learning")

console.log("Octets written: " + len)


buf = new Buffer(26);
for (var i = 0; i < 26; i++){
  buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5))

// convert buffer to json
var buf = new Buffer('Simply Easy Learning')
var json = buf.toJSON(buf)

console.log(json)

// concatenate buffers
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simple Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 content: " + buffer3.toString())


//compare buffer
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}

// Copy buffer
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString())

// Slice buffer
var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content: " + buffer2.toString());


// Buffer size
var buffer = new Buffer('TutorialsPoint');
console.log("buffer length: " + buffer.length);
