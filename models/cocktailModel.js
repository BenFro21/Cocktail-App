const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    content: String, 
    rating: {type: Number, min: 1, max:5, default: 5}, 
})

const cocktailSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    crafting: String, 
    img: String, 
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }, 
    comments: [commentSchema], 
})

module.exports = mongoose.model('Cocktail', cocktailSchema)