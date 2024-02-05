const EventEmitter = require('events')
const fs = require('fs')
const rr = fs.createReadStream('./data.json');
const em= new EventEmitter()

// ***EVENTS*****
//register a listener
em.on('demo',()=>{
    console.log('demo')
})

//trigger the execution of registered event listeners
setTimeout(()=>{
    em.emit('demo')
},5000)


// *****STREAMS*****
//read data from a file byte by byte
rr.on('data',(data)=>{
    console.log({data});
})
rr.on('end',(data)=>{
    console.log({data});
})