const mongoose=require('mongoose');
const express=require('express');
const app=express();
const bookRoutes=require("./routes/routes");
const dbConnect=require('./config/database');
app.use("/api/",bookRoutes);
app.listen(3000,()=>{
    console.log(`server started at ${3000}`);
});
dbConnect();
// app.get("/",(req,res)=>{
//     res.send(`<h1>This is Homepage</h1>`);
//  })
