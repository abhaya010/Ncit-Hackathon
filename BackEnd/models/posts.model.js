const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: [{
        type: Number,
        required: false,
    }],
    dislikes: [{
        type: Number,
        required: false,
    }],
    mentions: [{
        type: Number,
        required: false,
    }]
})

module.exports = mongoose.model('Post', postSchema)