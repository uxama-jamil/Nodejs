const mysql2 = require("mysql2");
const pool = mysql2.createPool({
    host : "localhost",
    port : 3306,
    database : "node",
    user : "root",
    password : "password"
})
module.exports = pool.promise();