const db = require ('../db/index')

module.exports={
get:(callback)=>{
    const sql=`select * from orders`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
add:(cb,values)=>{
    const sql=`insert into orders (user_id,status,worker_name,pet_name,pick_up_date,drop_off_date,walk_per_day,meal_per_day,price,worker_id) values (?,?,?,?,?,?,?,?,?,?)`
    db.query(sql, values, (err,rslt)=>{
        cb(err,rslt)
    })
},
update:(cb,id,user_id,status,worker_name,pet_name,pick_up_date,drop_off_date,walk_per_day,meal_per_day,price,worker_id)=>{
    const sql=`update orders set user_id="${user_id}",worker_name="${worker_name}",pet_name="${pet_name}",status="${status}",pick_up_date="${pick_up_date}",drop_off_date="${drop_off_date}",walk_per_day="${walk_per_day}",meal_per_day="${meal_per_day}",price="${price}",worker_id="${worker_id}" where id="${id}"`
    db.query(sql,(err,rslt)=>{
        cb(err,rslt)
    })
},
getUserorders:(callback,user_id)=>{
    const sql=`select * from orders where user_id="${user_id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
},
deletepet:(callback,id)=>{
    const sql=`DELETE FROM orders WHERE id="${id}"`
    db.query(sql,(err,res)=>{
        callback(err,res)
    })
}


}