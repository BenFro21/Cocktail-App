const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/', userCtrl.showAll)
router.get('/new', userCtrl.renderCreate)
router.post('/', userCtrl.create)
router.get('/:id', userCtrl.show)
router.get('/:id/update', userCtrl.renderUpdate)
router.put('/:id', userCtrl.update)
router.delete('/:id', userCtrl.deleteIt)


module.exports = router