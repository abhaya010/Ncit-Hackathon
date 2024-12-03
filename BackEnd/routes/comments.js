const express = require("express");
const router = express.Router();
const Comment = require("../models/comments.model");

// Getting all comments
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One comment
router.get("/:commentId", getComment, (req, res) => {
    res.json(res.comment);
});

// Creating one comment
router.post("/", async (req, res) => {
    const comment = new Comment({
        commentId: req.body.commentId,
        content: req.body.content,
        comment: req.body.comment,
        post: req.body.post,
        date: req.body.date,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        mentions: req.body.mentions,
    });
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One comment
router.put("/:commentId", getComment, async (req, res) => {
    if (req.body.content != null) {
        res.comment.content = req.body.content;
    }
    if (req.body.user != null) {
        res.comment.user = req.body.user;
    }
    if (req.body.post != null) {
        res.comment.post = req.body.post;
    }
    if (req.body.date != null) {
        res.comment.date = req.body.date;
    }
    if (req.body.likes != null) {
        res.comment.likes = req.body.likes;
    }
    if (req.body.dislikes != null) {
        res.comment.dislikes = req.body.dislikes;
    }
    if (req.body.mentions != null) {
        res.comment.mentions = req.body.mentions;
    }
    try {
        const updatedComment = await res.comment.save();
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One comment
router.delete("/:commentId", getComment, async (req, res) => {
    try {
        await res.comment.deleteOne();
        res.json({ message: "Deleted Comment" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getComment(req, res, next) {
    let comment;
    try {
        comment = await Comment.findOne({commentId: req.params.commentId});
        if (comment == null) {
            return res.status(404).json({ message: "Cannot find Comment" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.comment = comment;
    next();
}

module.exports = router;
