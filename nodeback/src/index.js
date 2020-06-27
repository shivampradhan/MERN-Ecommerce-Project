const express = require('express')
require('./db/mongoose')

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);//to remove warning
const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart')

const user_Router = require('./routers/user')
const product_Router = require('./routers/product')
const cart_Router = require('./routers/cart')

const app = express() //to serve the http request
const port = process.env.PORT || 9000

app.use(express.json()) // to parse incoming JSON into a JavaScript object

//to fetch the data from ./routers/user or prduct ot cart folder 
app.use(user_Router)
app.use(product_Router)
app.use(cart_Router)

app.listen(port, () =>{
    console.log('Server running on port '+ port)
    
})