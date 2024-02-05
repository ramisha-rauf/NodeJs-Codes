const mongoose= require('mongoose')
const {Schema}= mongoose

const cakeSchema = new Schema({
    type : String,
    name: String,
    ppu: Number,
    topping: String
})

const Cake = mongoose.model('Cake',cakeSchema)
module.exports = Cake