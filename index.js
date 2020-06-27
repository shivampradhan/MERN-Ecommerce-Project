const express = require('express')
const app = express() 
const datr = require('./data')
const data = datr() 
app.get("/api/products",(req,res)=>{ res.send(data.products);})

app.listen(5000,()=> console.log("server started"))