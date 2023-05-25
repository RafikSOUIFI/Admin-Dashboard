const db = require ('../db/index')

module.exports={
get:(callback)=>{
    const sql=`select * from appointments`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
add: (cb, values) => {
    const sql = `INSERT INTO appointments (date, time, notes, user_id, worker_id) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, values, (err, rslt) => {
      cb(err, rslt);
    });
  }
  ,
  update: (cb, id, date, time, notes) => {
    const sql = `UPDATE appointments SET date=?, time=?, notes=? WHERE id=?`;
    db.query(sql, [date, time, notes, id], (err, rslt) => {
      cb(err, rslt);
    });
  },
  
getOne:(callback,id)=>{
    const sql=`select * from appointments where user_id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
delete:(callback,id)=>{
    const sql=`DELETE FROM appointments WHERE id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
}


}