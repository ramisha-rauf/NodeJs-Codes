// const helmet = require('helmet') , server.use(helmet())----this middleware provides security to application
//require('dotenv').config() ---- To check db pswrd
//To include your own module, use require keyword------use type:commonjs in package.json file
const express = require('express')
const server = express()
const app = require('http').createServer(server)
const io=require('socket.io')(app)

const lib = require('./lib.js')
console.log('env', process.env.DB_PASSWORD)
console.log(lib.sum(3,6))
const t1 = performance.now(); //Calculate time
console.log(t1)


//To include ES module, use import keyword
import {sum,diff} from './lib.js';
console.log(sum(3,6),diff(7,6))

//File System Module
const fs= require('fs')
// read file synchronously
const txt = fs.readFileSync('data.txt','utf-8');   //By default read file in binary format
console.log(txt)
// const t2=performance.now()
console.log(t2)

//Asynchronously read the file (no blockage in server)
fs.readFile('data.txt','utf-8',(err,txt)=>{
    console.log(txt)
}); 
const t2 = performance.now(); //Calculate time

//*****SOCKETS*****
io.on('connection',(socket)=>{
    console.log(socket.id)

    //receiving server side info
    socket.emit('ServerMsg',{server:'hi'})
})

app.listen(4000,()=>{
    console.log('server started')
})

// ASSIGNMENT

// Can you run system command from node js file?
// Yes, you can run system commands from a Node.js file using the child_process module. 
// const { exec } = require('child_process');

// // Run a system command
// exec('ls -l', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout:\n${stdout}`);
// });

// If we delete node_modules how can we again run application succesfully ?
// The npm install command will recreate the node_modules directory and download the necessary packages based on the information in the package.json file. 
// It will restore all the dependencies your application needs to run correctly.


//Multer Library