const express = require('express')
const Product = require('../models/product')  
const router = new express.Router()


router.post('/products', (req, res) =>{
    const product = new Product(req.body)
    try{if(!product){throw new Error('Not valid')}
        console.log(product)
       res.status(200).send(product)
       product.save()
    }
    catch(e){res.status(400).send("Failed") }})

router.get('/products/:id', (req, res) =>{
    const _id = req.params.id
    Product.findById( _id ).then((product)=> {res.status(200).send(product) }).catch((e) => { res.status(400).send(e)})
})

router.get('/allProducts', (req, res) =>{
    Product.find({} ).then((product)=> {
        res.status(200).send(product)
        console.log(product)
    }).catch((e) => {res.status(400).send(e)})})


router.patch('/products/:id', async (req, res) => {

    const updates = Object.keys(req.body) 
    const allowedUpdates = ['category', 'name', 'productImage', 'price', 'performence', 'display', 'camera', 'battery', 'inStock'] 
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) 

    if (!isValidOperation) {return res.status(400).send({ error: 'Invalid updates!' })} 
    try {
 const product = await Product.findByIdAndUpdate( req.params.id , req.body, { new : true ,useFindAndModify: false, runValidators: true })

        if(!product){ return res.status(404).send()}
        res.status(200).send(product)
    } catch (e) {res.status(400).send(e)} })


router.delete('/products/:id',  async (req, res) => {
    try {const product = await Product.findByIdAndDelete(req.params.id) 
       if(!product){res.status(404).send()}
            res.send(product) } catch (e) {res.status(500).send() }})

module.exports = router