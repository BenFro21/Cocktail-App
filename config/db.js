const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/CocktailApp', {
//     useNewUrlParser: true
// })

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
  

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})