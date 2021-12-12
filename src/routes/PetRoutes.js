const router = require('express').Router()
const Petcontroller = require('../controllers/Petcontroller')

// middlewares
const verifytoken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')

router.post('/create', verifytoken, imageUpload.array('images'), Petcontroller.create)
router.get('/', Petcontroller.getAll)

module.exports = router