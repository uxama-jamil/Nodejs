const db = require('../utill/database');
module.exports = class Product{
    
    constructor(body){
        this.name = body.name;
        this.price = body.price;
        this.type = body.type;
        this.description = body.description;
    }
    save(){
        return db.execute("insert into products(name,price,type,description) values(?,?,?,?) ",
                            [this.name,this.price,this.type,this.description])

    }
    static edit(id,body){
        return db.execute("update products set name=?,price=?,description=?,type=? where id = ?;",
                            [body.name,body.price,body.description,body.type,id])

    }
    static get(){
        return db.execute("select * from products")
    }
    static getById(id){
        return db.execute("select * from products where id = ?",[id])
    }
    static deleteById(id){
        return db.execute("delete from products where id = ?;",[id])
    }
    static deleteProducts(){
        return db.execute("delete from products")
    }
    static editView(id){
        return db.execute("select * from products where id=?",[id])

    }

}