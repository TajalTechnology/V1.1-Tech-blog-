// -------------------------IMPORTING-------------------------
//express
const express = require('express')
//controller
const {comments,commentsView} = require('../controllers/commentController')
//middleware
const {authVerify} = require('../middlewares/auth')

const {commentValidator} = require('../middlewares/validators/commentValidator')
const {validationResult} = require('../middlewares/validators/validationResult')


// -------------------------DEFINE ROUTER-------------------------
const router = express.Router()


// -------------------------CUSTOM ROUTE-------------------------
router.get('/comments', commentsView)
router.delete('/comment/:id', authVerify, comments)
router.post('/comment', commentValidator, validationResult, authVerify, comments)
router.put('/comment/:id',commentValidator,validationResult, authVerify, comments)


// -------------------------EXPORT ROUTER-------------------------
module.exports = router


