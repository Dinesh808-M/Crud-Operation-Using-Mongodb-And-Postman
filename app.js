const express = require('express');
const app = express();
const db = require('./Db');
const User = require("./models/user");



app.use(express.json());

app.post("/api/user", async (req,res)=>{
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved)
})

app.get("/api/user" , async (req,res)=>{
    const user = await User.find();
    res.status(201).json(user)
} )

app.get("/api/user/:id" , async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.status(201).json(user)
})

app.put("/api/user/:id" , async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id , req.body , {new : true});
    res.status(201).json(user)
})

app.delete("/api/user/:id" , async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204)

})

app.listen(3000,()=>{
    console.log("server listening to 3000 port")
})