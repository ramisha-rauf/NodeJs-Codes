const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('createServer.html','utf-8')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const product= jso.products[0];


const data={age:5}

const server = http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case '/product':
            res.setHeader('Content-Type','text/html')
            const modifiedIndex=html.replace('Rs 9,199',product.title)
            res.end(modifiedIndex)
            break;
        case '\api':
            res.setHeader('Content-Type','Application/JSON')
            res.end(jso);
            break;
        default:
            res.writeHead(404)
            res.end()
    }
    
    //res.setHeader('Content-Type','Application/JSON')
    // res.end(JSON.stringify(data));
    // res.setHeader('Content-Type','text/html')
    // res.end('hello')
    res.end(jso)
})

server.listen(8080);