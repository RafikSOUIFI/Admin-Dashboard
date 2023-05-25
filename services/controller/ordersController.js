const orders =require ("../models/ordersModel")
module.exports ={
getAll:(req,res)=>{
    orders.get((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    })
},
addOrder: (req, res) => {
  const {
  
    product_id,
    quantity,
    price,
    status,
    date_created,
    date_modified,
    user_id
  } = req.body;

  orders.add((err, rslt) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(req.body);
      res.status(200).json(rslt);
    }
  }, [product_id, quantity, price, status, date_created, date_modified, user_id]);
},

updateOrder: (req, res) => {
  const {
    user_id,
    status,
    worker_name,
    pet_name,
    pick_up_date,
    drop_off_date,
    walk_per_day,
    meal_per_day,
    price,
    worker_id
  } = req.body;

  model.update((err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(result);
  }, req.params.id, user_id, status, worker_name, pet_name, pick_up_date, drop_off_date, walk_per_day, meal_per_day, price, worker_id);
},
getOneOrder:(req,res)=>{
    locations.getOne((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    },req.params.user_id)
},

deleteOrder:(req,res)=>{
    locations.delete((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    },req.params.id)
},

}