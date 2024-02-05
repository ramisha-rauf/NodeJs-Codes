const fs = require('fs')

const html = fs.readFileSync('createServer.html','utf-8')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const product= jso.products;

const express = require('express')
const morgan = require('morgan')   //3rd party middleware function--use to get logging info of incoming request
const server = express()

//server.use to get data in sequence (help to make server log) ---- if dont use next() then it get stuck and doesnt move forward
server.use((req,res,next)=>{
    console.log(req.ip,req.hostname,req.method,new Date(),req.get('User-Agent'))
    next()
})
server.use(morgan('dev')) //----give log info in color and concise format
server.use(express.static('public'))   //use for static hosting

const auth=(req,res,next)=>{
    console.log(req.query)
    if(req.query.password=='123'){
        next()
    }
    else{
        res.sendStatus(401)
    }
    
}
server.use(auth)

//Body Parser
server.use(express.json());        //write above code in body of post request
//server.use(express.urlencoded());

//API-Endpoint-Route ____ Request Types
server.get('/product/:id',auth,(req,res)=>{
    console.log(req.params)  
    res.json({type:'get'})
})
server.post('/',auth, (req,res)=>{
    res.json({type:'POST'})
})
server.put('/',(req,res)=>{
    res.json({type:'put'})
})
server.delete('/',(req,res)=>{
    res.json({type:'delete'})
})
server.patch('/',(req,res)=>{
    res.json({type:'patch'})
})


server.get('/',(req,res)=>{
    res.status(302).send('hello')
   // res.sendFile('E:\NodeJs Codes\createServer.html') ----ERROR
    res.json(product)
    res.sendStatus(200)
})

server.listen(3000,()=>{
    console.log('server started')
})

