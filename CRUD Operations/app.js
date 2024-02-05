const express = require('express')
const server = express()
server.use(express.json())
const mongoose = require('mongoose')
const routes = require('./routes/sampleRoutes')
const Sample = require('./model/sample')
//const sampleRouter = require('router')

//db connection 
main().catch(err=>console.log(err))

async function main(){
    await mongoose.connect('mongodb+srv://ramisha_rauf:yvExpeUuCx6PTAsh@cluster0.ilbtxal.mongodb.net/techsolutions')
    console.log("mongodb connected")
}

server.use('',routes)

server.post('/create',async(req,res)=>{
    try {
    const { name, age, degree } = req.body;
    const newSample = new Sample({ name, age,degree });
    await newSample.save();
    res.status(201).json(newSample);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

server.put('/updateSample/:id', async (req, res) => {
    try {
      const sampleId = req.params.id;
      const updatedData = req.body;
  
      const updatedSample = await Sample.findByIdAndUpdate(sampleId, updatedData, { new: true });
  
      if (!updatedSample) {
        return res.status(404).json({ message: 'Sample not found' });
      }
  
      res.json(updatedSample);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

server.listen('3005',()=>{
    console.log("server started")
})