const Cocktail = require('../models/cocktailModel')

let create = (req, res) => {
    Cocktail.findById(req.params.id, (err, cocktail) => {
        cocktail.comments.push(req.body)
        cocktail.save((err) => {
            if(err){
                req.status(400).json(err)
            }
            res.redirect(`/cocktails/${cocktail._id}`)
        })
    }) 
}

module.exports = {
    create
}