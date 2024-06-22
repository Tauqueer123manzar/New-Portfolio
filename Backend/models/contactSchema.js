const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address1:{
        type:String
    },
    address2:{
        type:String
    },
    City:{
        type:String
    },
    state:{
        type:String
    },
    zip:{
        type:String
    }
});

const Contact = mongoose.model("Contact",userSchema);

module.exports=Contact;