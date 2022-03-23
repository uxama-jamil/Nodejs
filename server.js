const express =require('express')
const app = express();
const product = require('./routes/product');
const inventory = require('./routes/inventory');

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views','templates')
app.use('/product',product)
app.use('/inventory',inventory)

app.listen(1000,()=>{
    console.log('i am listening at 1000')
})