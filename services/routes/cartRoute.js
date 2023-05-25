const express = require("express")
const router=express.Router()
const{getAll,addToCart,updateCart,deleteCart}=require("../controller/cartController")


router.get("/getAll",getAll)
router.post("/addToCart",addToCart)
router.put("/updateCart/:id",updateCart)
router.delete("/deleteCart/:id",deleteCart)
module.exports = router