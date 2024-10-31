const bodyParser = require("body-parser");
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const Contact = require("./models/contactSchema.js");

const app=express();

const PORT = process.env.PORT || 5000;
// ---------------------------------------------------- Middleware ----------------------------------------------------

app.use(bodyParser.json());
app.use(cors());

// --------------------------------------------------- Mongodb connection ---------------------------------------------

main()
.then(()=>{
    console.log("!------ Mongodb connection succesfully --------!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/clientdata");
}


//  ----------------------------------------------- API call ---------------------------------------------------------

app.post('/submit',async(req,res)=>{
    const { fname, lname, email, password, address1, address2, city, state, zip } = req.body;
    const newContact= new Contact({
        fname,
        lname,
        email,
        password,
        address1,
        address2,
        city,
        state,
        zip,
    });
    try{
        const savedContact = await newContact.save();
        console.log('Contact saved successfully:', savedContact);
        res.status(201).send('Contact saved');
    } catch(error){
        console.error('Error saving contact:', error);
        res.status(400).send("Error saving contact");
    }
});

app.listen(PORT,()=>{
   console.log(`app is listening on port:${PORT}`);
});
