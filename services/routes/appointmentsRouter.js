const express = require("express")
const router=express.Router()
const{getAll,addAppointment,updateAppointments,getAppointments,deleteAppointments}=require("../controller/appointmentsController")


router.get("/getAll",getAll)
router.post("/addAppointment",addAppointment)
router.put("/updateAppointments/:id",updateAppointments)
router.get("/getAppointments/:id",getAppointments)
router.delete("/deleteAppointments/:id",deleteAppointments)
module.exports = router