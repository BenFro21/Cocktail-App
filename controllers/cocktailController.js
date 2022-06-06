const Cocktail = require('../models/cocktailModel')

//show all cocktails
let showAll = (req, res) => {
    Cocktail.find({}, (err, cocktails) => {
        res.render('cocktails/index', {cocktails})
    })

}
// render new ejs to make a new cocktail
let renderCreate = (req, res) => {
    res.render('cocktails/new')
}
// post reqiest to create the new cocktail 
let create = (req,res) => {
    Cocktail.create(req.body, (err, c) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log(c)
        c.save(err => {
            if(err) return res.redirect('/cocktails/new')
            res.redirect('/cocktails')
        })
    })
}
//show details on one cocktail 
let show = (req, res) => {
    Cocktail.findById(req.params.id, (err, c) => { 
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('cocktails/show', {cocktail: c})
    })
}
//render the update form 
let renderUpdate = (req, res) => {
    res.render('cocktails/update', {id: req.params.id})
}

// Request to make the update happen 
let update = (req, res) => {
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, c) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.redirect('/cocktails')
    })
}

let deleteIt = (req, res) => {
    Cocktail.findByIdAndDelete(req.params.id, (err, c) => {
        if(err){
            res.status(400).json(err)
            return 
        }
        res.json({message: 'Item Deleted'})
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