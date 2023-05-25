const cart =require ("../models/cartModel")
module.exports ={
getAll:(req,res)=>{
    cart.get((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    })
},
addToCart: (req, res) => {
  const { user_id, shop_id,product_name, product_price, quantity } = req.body;


  cart.add((err, rslt) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(req.body);
      res.status(200).json(rslt);
    }
  }, user_id, shop_id, product_name, product_price, quantity);
},

updateCart:(req,res)=>{
    const { user_id, shop_id,product_name, product_price, quantity } = req.body;

  cart.update((err,result)=>{
      if (err) res.status(500).send(err)
      else res.status(200).json(result)
  }, [req.params.id, user_id, shop_id,product_name, product_price, quantity ]);
},


deleteCart:(req,res)=>{
    cart.delete((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    },req.params.id)
},

}