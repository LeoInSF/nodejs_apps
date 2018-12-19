
var fs = require('fs');

/*
Reading from the input stream
*/

// var data = '';
//
// // Create a readable stream
// var readableStream = fs.createReadStream('input.txt');
//
// // Set the encoding to be utf8
// readableStream.setEncoding('utf8');
//
// // Handle stream events ---> data, end, and error
// readableStream.on('data', function(chunk) {
//   data += chunk;
//   console.log('Reading the file....')
// })
//
// readableStream.on('end', function(){
//   console.log('Finishing the reading...')
//   console.log(data);
// })
//
// readableStream.on('error', function(err) {
//   console.log(err.stack);
// })
//
// console.log('Program Ended');


/*
Writting to a Stream
*/

// var data = 'Simple Easy Learning';
// // Create a writable Stream
// var writerStream = fs.createWriteStream('output.txt');
// //Write the data to stream with encoding to be utf8
// writerStream.write(data, 'utf8');
// // Mark the end of the file
// writerStream.end();
// // Handle stream events --> finish, and error
// writerStream.on('finish', function(){
//   console.log('Finishing the write');
// })
//
// writerStream.on('error', function(err) {
//   console.log(err.stack);
// })
//
// console.log('WriterStream program ended.')


/*
Piping the streams
*/
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
//
// // Create a writable stream
// var writerStream = fs.createWriteStream('pipe_output.txt');
//
// // Pip the read and write operations
// readerStream.pipe(writerStream);
//
// console.log('Program Ended!!!')


/*
Chaining the streams
*/
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");
