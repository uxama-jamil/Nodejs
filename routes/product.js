const expres = require('express');
const { append } = require('express/lib/response');
const route = expres.Router()
const getProduct = require('../controller/product')

route.get('/add-product',(req,res)=>{
    res.render('add-product')

});
route.post('/add-product',getProduct.addProduct);
route.get('/get-product-by-id/:productId',getProduct.getProductById);
route.get('/delete-product-by-id/:productId',getProduct.deleteProductById);
route.get('/delete-products',getProduct.deleteProducts);
route.get('/edit-product/:productId',getProduct.editProductByView);
route.post("/update-product/:productId",getProduct.editProductById);


module.exports=route;
// exports.route = route;