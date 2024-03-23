;
const express=require("express");
const app=express();
const mongoose = require("mongoose");



const mongoUrl="mongodb+srv://kindernestadmin:kindernest123@kindernest.0oh2wca.mongodb.net/?retryWrites=true&w=majority&appName=KinderNest"

mongoose.connect(mongoUrl).then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
    console.log();

});


require('./UserDetails');
const User= mongoose.model("UserInfo");

app.get("/",(req,res)=>{
    res.send({status:"Started"});
});

app.post('/register',async(req,res)=>{
    const {parentname,childname,Kindergartenname,Class,dob,email,password,confirmpassword} = req.body;

    const olduser= await User.findOne({email:email});

    if(olduser){
        return res.send({data:"User already exists!"});
    }
    try{
        await User.create({
            parentname: parentname,
            childname: childname,
            Kindergartenname: Kindergartenname,
            Class: Class,
            dob: dob,
            email: email,
            password,
            confirmpassword,
        })
        res.send({status: "Ok", data:"User Created"});

    }catch {Error}{
        res.send({status:"Error", data: Error});
    }
})




app.listen(5001,()=>{
    console.log("Node js server started.");
})