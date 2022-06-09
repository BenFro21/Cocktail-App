const User = require('../models/userModel')

let showAll = (req, res) => {
    console.log('showall')
}

let renderCreate = (req, res) => {
    res.render('user/new', {user: User})
}

let create = (req, res) => {
    User.create(req.body, (err, u) => {
        if(err){
            res.status(400).json(err)
            return
        }
        u.save()
        res.redirct('/user')
    })    
}

let show = (req, res) => {
    User.findById(req.params.id, (err, u) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('user/show', {id: req.params.id, user: u})
    })
}

let renderUpdate = (req, res) => {
    res.render('user/update')
}

let update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, u) => {
        if(err){
            res.status(400).json(err)
            return
        }
        u.save()
        res.redirect('/user')
    })
}

let deleteIt = (req, res) => {
    User.findByIdAndDelete(req.params.id, err => {
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
deleteIt,
}