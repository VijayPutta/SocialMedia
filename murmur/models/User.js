const mongoose = require('mongoose');




//having a schema to store data


const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unquie: true
    },
    password:{
        type:String,
        required: true
    }, 
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = User = mongoose.model('user',UserSchema);