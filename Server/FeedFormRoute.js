const router = require('express').Router()
const feedbackForm = require('./FormSchemaModel')

router.post('/',async (req,res)=>{
    let formData = new feedbackForm({
        feedFrom:req.body.feedFrom,
        feedTo:req.body.feedTo,
        date:req.body.date,
        feedDesc:req.body.feedDesc
    })
   let response= await formData.save()
  
})

module.exports = router