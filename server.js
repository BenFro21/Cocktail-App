// require modules 
const express = require('express');
const app = express();
const PORT = 9000;
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
const cocktailRoutes = require('./routes/cocktailRoutes')
const userRoutes = require('./routes/userRoutes')

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
    secret: 'Firefly21',
    resave: false, 
    saveUninitialized: true
    
}))
app.use(passport.initialize())
app.use(passport.session())

// routes begin 
app.use('/cocktails', cocktailRoutes)
app.use('/user', userRoutes)



app.listen(PORT, () => {
    console.log('IM LISTENING on port: ', PORT)
})