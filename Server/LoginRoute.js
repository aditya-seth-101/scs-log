const router = require('express').Router()
const UserReg = require('./UserSchemaModel.js')    
const bcrypt = require('bcryptjs')

router.post('/', async (req,res)=>{
    const user = await  UserReg.findOne({ email: req.body.email})   
   if (!user){
   return res.json('Email does not exist')
   }
   const vaildPass = await bcrypt.compare(req.body.password,user.password)
   if (!vaildPass) return res.json('Password is not correct')
     
    res.send({message:"Login Successful",user:user._id})
})

module.exports = router