const fs = require('fs')

const html = fs.readFileSync('createServer.html','utf-8')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const product= jso.products;

const express = require('express')
const server = express()

//create 3 query parameters name,age,subject with some values. check final output of req.query. Can you find all data on server side?
//Can you send it back to client via res object? explain in express js
//req.query
// server.get('/api/data', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     const subject = req.query.subject;
//     console.log(req.query);
//     const name1 = req.params.name;
//     const age2 = req.params.age;
//     const subject3 = req.params.subject;
//     console.log(req.params);
//     // Send a response back to the client
//     res.send(`Hello, ${name}! Your age is ${age} and you are interested in ${subject}.`);
//   });
  
// call 'https://localhost:8080/demo/Youstart/Express' - this will return a req.params json object
//create 3 query parameters name,age,subject with some values. check final output of req.params.
//req.params
//   server.get( '/demo/:name/:subject', (req, res) => {
//     const name = req.params.name;
//     const subject = req.params.subject;
//     console.log(req.params);
//     // Send a response back to the client
//     res.send(`Hello, ${name}! you are interested in ${subject}.`);
//   });

  server.use(express.json());

  // Define the route handler for the form submission
  server.post('/submit', (req, res) => {
    // Access the form data from req.body
    const name = req.body.name;
    const age = req.body.age;
    const subject = req.body.subject;
  
    // Perform any necessary operations with the form data
  
    // Send a response back to the client
    res.send(`Name: ${name}, Age: ${age}, Subject: ${subject}`);
  });
server.listen(8080,()=>{
    console.log('server started')
})