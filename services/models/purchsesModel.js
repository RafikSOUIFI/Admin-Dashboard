const db = require ('../db/index')

module.exports={
get:(callback)=>{
    const sql=`select * from purchases`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
add: (cb, values) => {
    const sql = `INSERT INTO purchases (username, phone, date, email, product_name, number_of_items, cost) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    //const { username, phone, email, product_name, number_of_items, cost }
    db.query(sql, values, (err, rslt) => {
      cb(err, rslt);
    });
  }

}