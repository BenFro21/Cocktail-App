// require modules 
const express = require('express');
const app = express();
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '9000');
const path = require('path')
const methodOverride = require('method-override')
const expressEjsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')

require('dotenv').config()

// Db config 
require('./config/db')
require('./config/passport')

//declare route variables 
const indexRoutes = require('./routes/index')
const cocktailRoutes = require('./routes/cocktailRoutes')
const userRoutes = require('./routes/userRoutes')
const commentsRoutes = require('./routes/comments')

//view engine set up 
app.use(expressEjsLayouts)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

///middlewares begin 
app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.use(session({
    secret: process.env.GOOGLE_SECRET,
    resave: false, 
    saveUninitialized: true
    
}))
app.use(passport.initialize())
app.use(passport.session())
app.use((req,res,next) => {
    res.locals.user = req.user;
    next()
})

// routes begin 
app.use('/i', indexRoutes)
app.use('/cocktails', cocktailRoutes)
app.use('/users', userRoutes)
app.use('/c', commentsRoutes )



app.listen(PORT, () => {
    console.log('IM LISTENING on port: ', PORT)
})