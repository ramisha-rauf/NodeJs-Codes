const mongoose = require('mongoose')
const {Schema} = mongoose;

const infoSchema = new Schema({
    brandName: String,
    brandIconUrl: String,
    links:[
    {
        label:String,
        url:String  
    }
]
})

module.exports = mongoose.model("detail",infoSchema)