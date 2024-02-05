//Chapter2 Assignment
const http = require('http');

// Create first server instance
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server 1 is running!');
});

// Create second server instance
// const server2 = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Server 2 is running!');
// });

// Define the ports for each server
const port1 = 3000;
//const port2 = 4000;

// Start listening for incoming requests on the specified ports
server1.listen(port1, () => {
  console.log(`Server 1 is running on port ${port1}`);
});

// server2.listen(port2, () => {
//   console.log(`Server 2 is running on port ${port2}`);
// });
