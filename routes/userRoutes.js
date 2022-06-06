const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

//Show all Users 
router.get('/', userCtrl.showAll)
//Render new user page 
router.get('/new', userCtrl.renderCreate)
// post request to user page 
router.post('/', userCtrl.create)
// show detail page 
router.get('/:id', userCtrl.show)
//get update form 
router.get('/:id/update', userCtrl.renderUpdate)
//put request to update 
router.put('/:id', userCtrl.update)
// destroy 
router.delete('/:id', userCtrl.deleteIt)


module.exports = router