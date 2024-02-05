const fs = require('fs')
const jso = JSON.parse(fs.readFileSync('data.json','utf-8'))
const users= jso.users;
const User = model.User
const jwt = require('jsonwebtoken')


// MVC - model view controller
exports.createUsers = (req,res)=>{  
    const user = new User(req.body)
    var token = jwt.sign({email: req.body.email} , 'shhhhh');
    user.token = token;
    user.save((err,doc)=>{
         console.log({err,doc})
        if(doc){
            res.status(200).json(doc);
        }
        else{
            res.status(400).json(err);
        }
    })
    // console.log(req.body);
    // users.push(req.body)
    // res.status(201).json(req.body)
}

exports.getAllUsers = async(req,res)=>{  
    const user = await User.find()
    res.json(user)
}

exports.getUsers = async(req,res)=>{  
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
}

exports.replaceUsers = async(req,res)=>{ 
    const id= req.params.id;   
    try{
        const doc = await User.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc)
    } 
    catch(err){
        res.status(400).json(err)
    }
    // const id= +req.params.id;
    // const productIndex = users.findIndex(p=>p.id===id);
    // //splice is used to update data by replacing,removing or adding
    // //splice(index where need to update,no. of events to remove,new content to place)
    // users.splice(productIndex,1,{...req.body,id:id})    
    // res.status(201).json();
}

exports.updateUsers = (req,res)=>{  
    const id= +req.params.id;
    const productIndex = users.findIndex(p=>p.id===id);
    const pro=users[productIndex]
    users.splice(productIndex,1,{...users,...req.body}) //firstly place previous data then add new data which is needed
    res.status(201).json();
}

exports.deleteUsers = (req,res)=>{  
    const id= +req.params.id;
    const productIndex = users.findIndex(p=>p.id===id);
    const pro=users[productIndex]
    users.splice(productIndex,1) //firstly place previous data then add new data which is needed
    res.status(201).json(users);
}

