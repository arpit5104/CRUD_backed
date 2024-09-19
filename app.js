const express = require("express");
const app = express();
const  userModel=require("./userModel");

app.get("/",(req,res)=>{
    res.send("Connected");
})
app.get("/create",  async (req,res)=>{
    //Create operatiion
    let  user =   await userModel.create([{
        name:   "Arpit",
        email:"guptaarpit3334@gmail.com",
        image:"abc"

    },
    {
        name:   "Arpita",
        email:"guptaarpit334@gmail.com",
        image:"abcdef"
    }
    ] 
    )
    res.send(user);
})
app.get("/update",  async (req,res)=>{
    //Update operatiion
     let user=await userModel.findOneAndUpdate({name:"Arpit"},{name:"Arp"},{new:true});
     res.send(user);
})

app.get("/read",async (req,res)=>{
    //Read  operation
  
    let user=await  userModel.find();
   res.send(user);

})
app.get("/delete",async (req,res)=>{
    //Delete opertion
    let user=await  userModel.findOneAndDelete({name:"Arpit"});
    res.send("Successfully  deleted");
})

app.listen(3000);