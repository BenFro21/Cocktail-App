const express = require('express')
const router = express.Router()
const cocktailCtrl = require('../controllers/cocktailController')

//Show all cocktails
router.get('/', cocktailCtrl.showAll)
//Render new cocktail page 
router.get('/new', cocktailCtrl.renderCreate)
// post request to cocktail page 
router.post('/', cocktailCtrl.create)
// show detail page 
router.get('/:id', cocktailCtrl.show)
//get update form 
router.get('/:id/update', cocktailCtrl.renderUpdate)
//put request to update 
router.put('/:id', cocktailCtrl.update)
// destroy 
router.delete('/:id', cocktailCtrl.deleteIt)




module.exports = router


