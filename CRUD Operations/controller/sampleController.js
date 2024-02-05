const sampleServices = require('../services/sampleServices')
const Sample = require('../model/sample')

exports.getSamples=async(req,res)=>{
    try {
        const samplesAll = await sampleServices.getSamples()
        res.json(samplesAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }    
}

exports.getOneSample=async(req,res)=>{
    try {
        const oneSample = await sampleServices.getOneSample()
        res.json(oneSample)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getSampleById=async(req,res)=>{
    try {
        const sampleId = req.params.id
        const idSample = await sampleServices.getSampleById(sampleId)
        res.json(idSample)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// exports.createNewSample=async(req,res)=>{
//     try {
//     const { name, age, degree } = req.body;
//     const newSample = new Sample({ name, age,degree });
//     await newSample.save();
//     res.status(201).json(newSample);
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// }

exports.deleteSamples=async(req,res)=>{
    try {
        const deletedSamples = await sampleServices.deleteSamples()
        res.json(deletedSamples)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.countSamples=async(req,res)=>{
    try {
        const countSamples = await sampleServices.countSamples()
        res.json({data: countSamples, status:"success"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// exports.updateSample = async(req,res)=>{
//     try {
//         const samId = req.params.id
//         const updatedData = req.body
//         const updatedSample = await sampleServices.updateSample(samId,updatedData)
//         res.json({data: updatedSample, status:"success"})
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// }