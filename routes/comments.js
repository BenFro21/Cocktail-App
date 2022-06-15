const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/commentsController')

router.post('/cocktails/:id/comments', commentsCtrl.create)

router.delete('/cocktails/:id/comments/:commentsId', commentsCtrl.deleteIt)

module.exports = router