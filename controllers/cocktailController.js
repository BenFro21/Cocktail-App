const Cocktail = require('../models/cocktailModel')
const ImageModel = require('../models/imagModel')
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




let showAll = (req, res) => {
    Cocktail.find({})
    .populate('owner')
    .exec((err, cocktails) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('cocktails/index', {cocktails, user: req.user})
    })
}
let renderCreate = (req, res) => {
    res.render('cocktails/new')
}
let create = (req,res) => {
    req.body.owner = req.user?.id
    Cocktail.create(req.body, (err, c) => {
        if(err){
            res.status(400).json(err)
            return
        }
        // ImageModel.create({
        //     name:'test',
        //     image:{
        //         data: req.filename,
        //         contentType: 'image/png'
        //     }
        // }).then(image => {
        if(req.file){
           return c.image = '/images/' + req.file.filename
        }
        c.save(err => {
            console.log(err)
            if(err) return res.redirect('/cocktails/new')
            res.redirect('/cocktails')
        })
    // })
    })
}

let show = (req, res) => {

    Cocktail.findById(req.params.id)
    .populate('owner')
    .populate('image')
    .exec((err, c) => { 
        if(err){
            res.status(400).json(err)
            return
        }
        // console.log(c.comments[0].owner.equals(req.user._id))
        res.render('cocktails/show', {cocktail: c, id: req.params.id, user: req.user})
    }) 
}
//render the update form 
let renderUpdate = (req, res) => {
   Cocktail.findById(req.params.id, (err, c) => { 
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('cocktails/update', {cocktail: c, id: req.params.id})
    })
}

// Request to make the update happen 
let update = (req, res) => {
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, c) => {
        if(err){
            res.status(400).json(err)
            return
        }
        if(req.file.filename){
        return c.image = '/images/' + req.file.filename
        }
        c.save(err => {
            console.log(err)
            if(err) return res.redirect('/cocktails/new')
            res.redirect('/cocktails')
        })
    })
}

let deleteIt = (req, res) => {
    Cocktail.findByIdAndDelete(req.params.id, (err, c) => {
        if(err){
            res.status(400).json(err)
            return 
        }
        res.redirect('/cocktails')
    })

}



module.exports = {
showAll,
renderCreate,
create,
show, 
renderUpdate,
update, 
deleteIt
}