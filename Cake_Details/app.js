const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const cake = require('./model/cake-model')
const { mainModule } = require('process')

//db connection
main().catch(err => console.log(err));

async function main(){
   await mongoose.connect('mongodb+srv://ramisha_rauf:yvExpeUuCx6PTAsh@cluster0.ilbtxal.mongodb.net/techsolutions')
    console.log("DB Connected")
}

app.get('/cakes',async (req,res)=>{
    try{
    const allCakes = await cake.find()
    res.json(allCakes);
    }
    catch(err){
        console.log(err,err.message)
        res.sendStatus(500).json(err)
    }
})

app.post('/create',async(req,res)=>{
    try {
        const {type,name,ppu,topping}=req.body
        const newCake = new cake({type,name,ppu,topping})
        await newCake.save()
        res.json(newCake)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(error)
    }
})

app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedCake =await cake.findOneAndDelete({_id:id});
        res.json(deletedCake)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(error)
    }
})

app.get('/sort',async(req,res)=>{
    try {
        const sortedCakes = await cake.find().sort({name:1}).exec()
        res.json(sortedCakes)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(error)
    }
})

app.get('/count',async(req,res)=>{
    try {
        const countedCakes = await cake.count({type:'Strawberry CheeseCake'})
        res.json(countedCakes)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(error)
    }
})










app.listen('1050',()=>{
    console.log("Server Started")
})