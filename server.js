// require modules 
const express = require('express');
const app = express();
const PORT = 9000;
const path = require('path')
const methodOverride = require('method-override')
const expressEjsLayouts = require('express-ejs-layouts')
app.use(expressEjsLayouts)

// Db config 
require('./config/db')
//declare route variables 
// const cocktailRoutes = require('./routes/cocktailRoutes')
// const userRoutes = require('./routes/userRoutes')

//view engine set up 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

///middlewares begin 
app.use(methodOverride);
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// routes begin 
// app.use('/cocktails', cocktailRoutes)
// app.use('/user', userRoutes)



app.listen(PORT, () => {
    console.log('IM LISTENING on port: ', PORT)
})