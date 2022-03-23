const seq = require("../utill/database");
const Sequelize = require("sequelize");
const hardware = require("./hardware");
const Product = seq.define("Devices",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    description:{type:Sequelize.STRING},
},{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,      // removes auto generated columns like createdat and updated at
  })
module.exports = Product;