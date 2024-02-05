const fs = require('fs')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const product= jso.products;
const model = require('../model/product')
const Products = model.Products


// MVC - model view controller
exports.createProduct = (req,res)=>{  
    const product = new Products(req.body)
    // product.title = 'PhoneX'
    // product.price=12000;
    // product.rating=4.5;
    product.save()
    .then((doc) => {
    // Save successful
    console.log(doc)
  })
  .catch(error => {
    // Handle error
    console.log(error)
  });

    // product.save((err,doc)=>{
    //     console.log({err,doc})
    // })
    // console.log(req.body);
    // product.push(req.body);

    res.status(201).json(req.body)
}

exports.getAllProducts = async (req,res)=>{  
    // const product = await Products.find({price:{$gt:500}})
    // res.json(product)

    let query = Products.find()
    if(req.query && req.query.sort){
        const products = await Products.query.sort({price: 1}).exec();
        res.json(products)
    }
    else{
        const products = await Products.query.exec();
        res.json(products)
    }
}

exports.getProduct = async(req,res)=>{  
    const id = req.params.id
    const product = await Products.findById(id)
    res.json(product)
    // const id= +req.params.id;
    // const pro = product.find(p=>p.id===id);
    // res.json(pro)
}

exports.replaceProduct = (req,res)=>{     
    const id= +req.params.id;
    const productIndex = Products.findIndex(p=>p.id===id);
    //splice is used to update data by replacing,removing or adding
    //splice(index where need to update,no. of events to remove,new content to place)
    product.splice(productIndex,1,{...req.body,id:id})    
    res.status(201).json();
}

exports.updateProduct = async (req,res)=>{  
    const id= req.params.id;
    try{
        const doc = await Products.findOneAndUpdate({_id:id},req.body,{new:true})
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    // const productIndex = product.findIndex(p=>p.id===id);
    // const pro=product[productIndex]
    // product.splice(productIndex,1,{...product,...req.body}) //firstly place previous data then add new data which is needed
    // res.status(201).json();
}

exports.deleteProduct = async(req,res)=>{ 
    const id= req.params.id;
    try{
        const doc = await Products.findOneAndDelete({_id:id})
        res.status(201).json(doc)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    } 
    // const id= +req.params.id;
    // const productIndex = product.findIndex(p=>p.id===id);
    // const pro=product[productIndex]
    // product.splice(productIndex,1) //firstly place previous data then add new data which is needed
    // res.status(201).json(product);
}