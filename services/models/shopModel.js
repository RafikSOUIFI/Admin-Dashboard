const db = require ('../db/index')

module.exports={
get:(callback)=>{
    const sql=`select * from shop`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
add: (cb, values) => {
    const sql = `INSERT INTO shop (name, description, image, price, category, breed, total_purchase, last_purchase, updated_at, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, values, (err, rslt) => {
      cb(err, rslt);
    });
  },
  update: (cb, data) => {
    const sql = 'UPDATE shop SET ? WHERE id = ?;';
    db.query(sql, data, (err, rslt) => {
      cb(err, rslt);
    });
  },
getOne:(callback,id)=>{
    const sql=`select * from shop where id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
deleteProduct:(callback,id)=>{
    const sql=`DELETE FROM shop WHERE id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
}


}