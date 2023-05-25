const appointments =require ("../models/appointmentsModel")
module.exports ={
getAll:(req,res)=>{
    appointments.get((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    })
},
addAppointment: (req, res) => {
  const {
    user_id,
    worker_id,
    date,
    time,
    notes
  } = req.body;

  appointments.add((err, rslt) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(req.body);
      res.status(200).json(rslt);
    }
  }, [date, time, notes, user_id, worker_id]);
},

updateAppointments: (req, res) => {
  const {
    user_id,
    worker_id,
    date,
    time,
    notes
  } = req.body;

  appointments.update((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(req.body);
      res.status(200).json(result);
    }
  }, req.params.id, date, time, notes);
},
getAppointments:(req,res)=>{
    appointments.getOne((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    },req.params.id)
},

deleteAppointments:(req,res)=>{
    appointments.delete((err,result)=>{
        if (err) res.status(500).send(err)
        else res.status(200).json(result)
    },req.params.id)
},

}