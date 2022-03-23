const seq = require("../utill/database");
const Sequelize = require("sequelize");
const hardware = seq.define("Mac_address",{
    
    
    address:{
        type:Sequelize.STRING,
        primaryKey:true,
    },
    PTA:{type:Sequelize.STRING}
},{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,      // removes auto generated columns like createdat and updated at
  });
module.exports = hardware;