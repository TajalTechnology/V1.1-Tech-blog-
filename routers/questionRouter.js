// -------------------------IMPORTING-------------------------
//express
const express = require('express')
//controller
const {questions,questionList,questionDetails,tagList,singleQuestion} = require('../controllers/questionController')
//middlewares
const {authVerify} = require('../middlewares/auth')
//validators
const {questionValidators} = require('../middlewares/validators/questionValidator')
const {validationResult} = require('../middlewares/validators/validationResult')

// -------------------------DEFINE ROUTER-------------------------
const router = express.Router()

// -------------------------CUSTOM ROUTE-------------------------
router.get('/questions', questionList)
router.get('/questions/tag-list', tagList)
router.get('/question-answers/:id', questionDetails)
router.get('/question-details/:id', singleQuestion)

router.put('/question/:id', authVerify, questions)
router.delete('/question/:id', authVerify, questions)
router.post('/question',questionValidators, validationResult, authVerify, questions)

// -------------------------EXPORT ROUTER-------------------------
module.exports = router


