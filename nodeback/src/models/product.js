const mongoose = require('mongoose')
const validator = require('validator')

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    productImage: {
        type: Buffer
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Price should be positive')
            }
        }
    },
    performence: [{
            type: String,
            required: true,
            trim: true
        }],
    display: [{
            type: String,
            required: true,
            trim: true
        }],
    camera: [{
            type: String,
            required: true,
            trim: true
        }],
    battery: [{
            type: String,
            required: true,
            trim: true
        }]

  ,
    inStock: {
        type: Boolean,
        default: false,
       
    }

})

const Product = mongoose.model('Product', ProductSchema)


module.exports = Product