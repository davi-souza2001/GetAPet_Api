const router = require('express').Router()
const Petcontroller = require('../controllers/Petcontroller')

// middlewares
const verifytoken = require('../helpers/verify-token')

router.post('/create', verifytoken, Petcontroller.create)

module.exports = router