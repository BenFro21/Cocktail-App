const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    content: String, 
    rating: {type: Number, min: 1, max:5, default: 5}, 
})


// const ImageSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     image:{
//         data: Buffer,
//         contentType: String
//     }
// })

const cocktailSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    crafting: String,
    image: String, 
    // image: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'imageModel'

    // }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    comments: [commentSchema],
    
})

module.exports = mongoose.model('Cocktail', cocktailSchema)