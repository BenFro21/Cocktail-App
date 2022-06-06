const User = require('../models/userModel')

let showAll = (req, res) => {

}

let renderCreate = (req, res) => {
    res.render('user/new')
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
        res.redirct('/user')
    })
}

let renderUpdate = (req, res) => {
    res.render('users/update')
}

let update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, u) => {
        if(err){
            res.status(400).json(err)
            return
        }
        u.save()
        res.redirct('/user')
    })
}

let deleteIt = (req, res) => {
    User.findByIdAndDelete(req.params.id, err => {
        if(err){
            res.status(400).json(err)
            return
        }
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