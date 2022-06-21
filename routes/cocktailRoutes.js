const express = require('express')
const router = express.Router()
const cocktailCtrl = require('../controllers/cocktailController')

const multer = require('multer')
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname )
    }
})
const upload= multer({storage: fileStorageEngine})

router.get('/', cocktailCtrl.showAll)
router.get('/new', cocktailCtrl.renderCreate)
router.post('/', upload.single("image"), cocktailCtrl.create)
router.get('/:id', cocktailCtrl.show)
router.get('/:id/update', cocktailCtrl.renderUpdate)
router.put('/:id', upload.single("image"), cocktailCtrl.update)
router.delete('/:id', cocktailCtrl.deleteIt)

module.exports = router

 


