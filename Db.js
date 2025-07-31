const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/users")

.then(()=>{
    console.log("Database Connected Sucessfully");
})
.catch((err)=>{
    console.log("Database Connection Failed" , err);
})