// -------------------------IMPORTING-------------------------
//express
const express = require('express')
//controller
const {answer, answerView} = require('../controllers/answerController')
//middleware
const {authVerify} = require('../middlewares/auth')
const {answerValidators} = require('../middlewares/validators/answerValidators')
const {validationResult} = require('../middlewares/validators/validationResult')


// -------------------------DEFINE ROUTER-------------------------
const router = express.Router()


// -------------------------CUSTOM ROUTE-------------------------
router.get('/answer/:id', answerView)
router.delete('/answer/:id', authVerify, answer)
router.post('/answer', answerValidators, validationResult, authVerify, answer)
router.put('/answer/:id',answerValidators,validationResult, authVerify, answer)


// -------------------------EXPORT ROUTER-------------------------
module.exports = router


