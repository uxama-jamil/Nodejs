const Product = require('../model/model');
exports.getAllProduct = (req,res,next)=>{
    Product.get().then((data)=>{
        res.render("product-details",{arr:data[0]})
    }).catch((err)=>{
        res.render("product-details",{arr:[]})
    })
}

exports.addProduct = (req,res,next)=>{
    const product = new Product(req.body)
    product.save().then((data)=>{
        res.redirect('/inventory/get-all-product');

    }).catch((err)=>{
        res.status(404).send(err);
    })

}

exports.getProductById = (req,res,next)=>{
    Product.getById(req.params.productId).then((data)=>{
        res.render('product',{product:data[0][0]})
    }).catch((err)=>{
        res.status(404).send(err);
    })
}

exports.deleteProductById = (req,res,next)=>{
    Product.deleteById(req.params.productId).then((data)=>{
        res.redirect('/inventory/get-all-product');
    }).catch((err)=>{
        res.status(404).send(err);
    })
}
exports.deleteProducts = (req,res,next) => {
    Product.deleteProducts().then((data)=>{
        res.redirect('/inventory/get-all-product');
    }).catch((err)=>{
        res.status(404).send(err);
    })
}

exports.editProductById = (req,res,next)=>{
    Product.edit(req.params.productId,req.body).then((data)=>{
        res.redirect('/inventory/get-all-product');
    }).catch((err)=>{
        res.status(404).send(err);
    });
}

exports.editProductByView = (req,res,next)=>{
    Product.editView(req.params.productId).then((data)=>{
        res.render("edit-product",{product:data[0][0]})
    }).catch((err)=>{
        res.status(404).send(err);
    })
}

