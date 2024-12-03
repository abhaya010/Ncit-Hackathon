const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    commentId: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Number,
        required: true,
    },
    post: {
        type: Number,
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
        required: true,
    }],
    required: false
})

module.exports = mongoose.model('Comment', commentSchema)