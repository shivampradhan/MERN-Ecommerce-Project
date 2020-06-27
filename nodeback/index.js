const express = require('express')
const dotenv = require('dotenv');
const config = require('./config');
const mongoose = require('mongoose');
const app = express() //to serve the http request
const port = process.env.PORT || 9000
dotenv.config();



const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')

//const user_Router = require('./routers/user')
const product_Router = require('./routers/product')
const cart_Router = require('./routers/cart')





products= [{ _id: '1',countInStock:10, name: 'Banana', category: 'Fruits', image: '/images/banana.png', price: 60},{ _id: '2',countInStock:3, name: 'Avacado  ', category: 'Vegetables', image: '/images/avacado.png', price: 50},{ _id: '3',countInStock:3, name: 'Bread', category: 'Bread', image: '/images/bread.png', price: 70}, { _id: '4',countInStock:3, name: 'Cineman', category: 'Spieces', image: '/images/cineman.png', price: 70}, { _id: '5',countInStock:3, name: 'Laccha', category: 'Dairy', image: '/images/laccha.png', price: 30}, { _id: '6',countInStock:3, name: 'Saffron', category: 'Spieces', image: '/images/saffron.png', price: 40}
  ]
user={"name": "shivam",  "email": "shivampradhan21@gmail.com",  "password": "1234", "isAdmin": true }
  
 const mongodbUrl=config.MONGODB_URL; 
 mongoose.set('useCreateIndex', true);//to remove warning
 mongoose.connect(mongodbUrl,{useNewUrlParser:true, useUnifiedTopology: true });


//app.use("/api/users",user_Router);






app.get("/api/products",(req,res)=>{res.send(products);})
app.use(express.json())
app.get("/api/products/:id",(req,res)=>{
    const productId=req.params.id;
    const product =products.find(x=>x._id===productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({msg:"Product not found"})

  res.send(products.find(x=>x._id===productId));})


app.listen(port, () =>{  console.log('Server running on port '+ port)  });

