const express = require('express')
const Cart = require('../models/cart')
const User = require('../models/user')
const Product = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/products/addtocart/:id',auth,async(req,res)=>{
    const product=await Product.findById(req.params.id)
    const pid=product._id
    console.log('PROD ID',pid)

    const user=await User.findById(req.user._id)
    const id=user._id
    console.log('ID',id)

    const cart=await Cart.findOneAndUpdate({owner:id},{$push:{productId:pid}})
    console.log('cart',cart)
    res.status(200).send('product added to cart')
})


module.exports = router