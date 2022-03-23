const app = require('express')
const Product = require("../Model/product")
const hardware = require("../Model/hardware")
const route = app.Router()

route.get("/getproducts",(req,res)=>{
    Product.findAll().then(prod=>{
        res.render("getProd",{products:prod,form:false})
    }).catch(err=>{
        console.log(err)
    })
})
route.get("/gethardware",(req,res)=>{
    hardware.findAll().then(prod=>{
        res.render("getProd",{hardware:prod,form:false})
    }).catch(err=>{
        console.log(err)
    })
})
route.get("/addProduct",(req,res)=>{
    res.render("getProd",{form:true})
})
route.post("/addProduct",(req,res)=>{
Product.create({name:req.body.name,
                price:req.body.price,
                description:req.body.description}).then(prod=>{
                    console.log(prod)
    

}).catch(err=>{
    console.log(err)
})
hardware.create({address:req.body.address,PTA:req.body.PTA}).then(ress=>{
    console.log(ress,"request body hardware",req.body)
    res.redirect("/getproducts")
}).catch(err=>{
    console.log(err)
})
})


module.exports = route;