const mongoose =require('mongoose')
const Schema = mongoose.Schema

const SampleSchema = new Schema({
    name:String,
    age:Number,
    degree: String
})

const Sample = mongoose.model('sample', SampleSchema)
module.exports = Sample;