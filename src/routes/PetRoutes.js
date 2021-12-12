const router = require('express').Router()
const Petcontroller = require('../controllers/Petcontroller')

router.post('/create', Petcontroller.create)

module.exports = router