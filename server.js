const express = require("express");
const app = express();
const db =require("./utill/database");
const prod = require("./Model/product");
const hardware = require("./Model/hardware");
const route = require('./routes/product')
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views","templates")
app.use(route)
hardware.hasOne(prod,{foreignKey:"macing"});
prod.belongsTo(hardware,{onDelete: "CASCADE",constraints:true,foreignKey:"macing"})

db.sync().then((res)=>{
    console.log("console is",res)
    app.listen(1000,()=>{console.log("i am listening at port 1000")})

}).catch((err)=>{
console.log(err)
})

// app.listen(1000,()=>{console.log("i am listening at port 1000")})