const mongoose = require('mongoose')
const { Schema } = mongoose;
//Schema
const productSchema = new Schema({
    id: Number,
    title: {type:String, required:true, unique:true},
    description: String,
    price: {type:Number, min:[0,'wrong price'],required:true},
    discountPercentage: {type:Number, min:[0,'wrong discount'], max:[60,'too high discount']}, //validation
    rating: {type:Number, min:[0,'wrong rating'], max:[5,'too high rating']},
    stock: Number,
    brand: {type:String,required:true},
    category: {type:String,required:true},
    thumbnail: {type:String,required:true},
    images: [String]
  });

exports.Products = mongoose.model('Products', productSchema)