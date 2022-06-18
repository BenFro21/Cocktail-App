const Cocktail = require('../models/cocktailModel')

let create = (req, res) => {
    Cocktail.findById(req.params.id, (err, cocktail) => {
        req.body.owner = req.user._id
        cocktail.comments.push(req.body)
        cocktail.save((err) => {
            if(err){
                res.status(400).json(err)
            }
            res.redirect(`/cocktails/${cocktail._id}`)
        })
    }) 
}

let deleteIt = (req, res) => {
    Cocktail.findById(req.params.id, (err, c) => {
        c.comments.id(req.params.commentsId).remove()
        c.save((err) => {
            if(err){
                res.status(400).json(err)
            }
            res.redirect(`/cocktails/${c._id}`)
        })
    })
}

module.exports = {
    create,
    deleteIt
}