const mongoose = require('mongoose')
const validator = require('validator')

const cartSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId,required: true,ref: 'User' },
    productId: [{type: mongoose.Schema.Types.ObjectId,ref: 'Product',default: '' }],
    Status: { type: Boolean, default: true},
    TotalPrice: {type: Number,default: 0} 
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart