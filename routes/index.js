const router = require('express').Router()
const passport = require('passport')

router.get('/', (req, res) => {
    res.redirect('/cocktails')
})

router.get('/auth/google', passport.authenticate(
    'google',
    {scope: ['profile', 'email']}
))

router.get( 
    '/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/cocktails',
        failureRedirect: '/cocktails',
    })
)

router.get('/logout', (req, res) => {
    req.logOut(true, (err) => {
        if(err){
            res.status(400).json(err)
            return
        }
    res.redirect('/cocktails')
    })
})

module.exports = router