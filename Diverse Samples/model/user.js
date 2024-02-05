const mongoose = require('mongoose')
const { Schema } = mongoose;
//Schema
const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: String,
    email:{
        type: String,
        unique: true,
        validate:{
            validator:function(v){
                return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not valid email !`
        },
        required: true,
    },
    password:{
        type: String,
        minLengt: 6,
        required: true
    },
    token: String
  });

exports.User = mongoose.model('User', userSchema);