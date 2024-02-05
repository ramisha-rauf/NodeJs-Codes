const fs = require('fs')

const html = fs.readFileSync('createServer.html','utf-8')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const product= jso.products;

const express = require('express')
const morgan = require('morgan')   //3rd party middleware function
const server = express()

server.use(morgan('dev'))
server.use(express.static('public'))   //use for static hosting
//Body Parser
server.use(express.json());        //write above code in body of post request
server.use(express.urlencoded());

//API-Endpoint-Route ____ Request Types
// CRUD-Create,read,update,delete in database
// Read GET products
server.get('/products',(req,res)=>{  
    res.json(product)
})
server.get('/products/:id',(req,res)=>{  
    const id= +req.params.id;
    const pro = product.find(p=>p.id===id);
    res.json(pro)
})

//Create POST /products
server.post('/pro',(req,res)=>{  
    console.log(req.body);
    res.json({type: 'POST'})
})

//Update PUT /products/:id
server.put('/products/:id',(req,res)=>{     // while updating using put , it overwrites previous data
    const id= +req.params.id;
    const productIndex = product.findIndex(p=>p.id===id);
    //splice is used to update data by replacing,removing or adding
    //splice(index where need to update,no. of events to remove,new content to place)
    product.splice(productIndex,1,{...req.body,id:id})    
    res.status(201).json();
})

//Update PATCH /products/:id
//Patch - it doesn't overwrite , place previous data as it is and update by adding new data
server.patch('/products/:id',(req,res)=>{  
    const id= +req.params.id;
    const productIndex = product.findIndex(p=>p.id===id);
    const product=product[productIndex]
    product.splice(productIndex,1,{...product,...req.body}) //firstly place previous data then add new data which is needed
    res.status(201).json();
})

//Delete DELETE /products/:id
server.delete('/products/:id',(req,res)=>{  
    const id= +req.params.id;
    const productIndex = product.findIndex(p=>p.id===id);
    const product=product[productIndex]
    product.splice(productIndex,1) //firstly place previous data then add new data which is needed
    res.status(201).json(product);
})



server.listen(8080,()=>{
    console.log('server started')
})
