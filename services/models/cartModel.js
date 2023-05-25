const db = require ('../db/index')

module.exports={
get:(callback)=>{
    const sql=`select * from cart`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
add: (cb, values) => {
    const sql = `insert into cart (user_id, product_name,product_price,quantity, shop_id) values (?, ?, ?, ?, ?)`;
    db.query(sql, values, (err, rslt) => {
      cb(err, rslt);
    });
  },

  update: (cb, id, user_id, product_name, product_price, quantity, shop_id) => {
    const sql = `UPDATE cart SET user_id=?, product_name=?, product_price=?, quantity=?, shop_id=? WHERE id=?`;
    const values = [user_id, product_name, product_price, quantity, shop_id, id];
    
    db.query(sql, values, (err, rslt) => {
      cb(err, rslt);
    });
  },

getOne:(callback,user_id)=>{
    const sql=`select * from cart where user_id="${user_id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
delete:(callback,id)=>{
    const sql=`DELETE FROM cart WHERE id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
}


}