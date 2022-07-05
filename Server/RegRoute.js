const router = require('express').Router()
const UserReg = require('./UserSchemaModel.js')
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const schema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(8).required()

})

router.post('/', async (req, res) => {
  const err = schema.validate(req.body)
  if (err.error == null) {

    const emailExist = await  UserReg.findOne({ email: req.body.email})   
    if (emailExist) return res.json("Email already registered")
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    let user = new UserReg({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    try {

      const savedUser = await user.save()

      let msg = "User registered sucessfully"
      res.json(msg)
    } catch (error) {
      res.json(error)
    }
  } else {
    res.json(err.error.details[0].message)
  }
})

module.exports = router