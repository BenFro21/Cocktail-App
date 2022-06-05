const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    content: String, 
    rating: {type: number, min: 1, max:5, default: 5}, 
    timestamps: true
})

const cocktailSchema = new mongoose.Schema({
    title: {type:String, required: true},
    ingredients: [String],
    crafting: String, 
    img: String, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    comments: [commentSchema], 
    timestamps: true
})

module.exports = mongoose.model('Cocktail', cocktailSchema)