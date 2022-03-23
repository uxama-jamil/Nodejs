const express =require('express')
const route = express.Router()
const getProduct = require('../controller/product')

route.get('/get-all-product',getProduct.getAllProduct)

module.exports=route;