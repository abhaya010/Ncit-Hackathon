const express = require("express");
const router = express.Router();
const Post = require("../models/posts.model");

// Getting all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One post
router.get("/:postId", getPost, (req, res) => {
    res.json(res.post);
});

// Creating one post
router.post("/", async (req, res) => {
    const post = new Post({
        postId: req.body.postId,
        content: req.body.content,
        user: req.body.user,
        date: req.body.date,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        mentions: req.body.mentions,
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One post
router.put("/:postId", getPost, async (req, res) => {
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    if (req.body.user != null) {
        res.post.user = req.body.user;
    }
    if (req.body.date != null) {
        res.post.date = req.body.date;
    }
    if (req.body.likes != null) {
        res.post.likes = req.body.likes;
    }
    if (req.body.dislikes != null) {
        res.post.dislikes = req.body.dislikes;
    }
    if (req.body.mentions != null) {
        res.post.mentions = req.body.mentions;
    }
    try {
        const updatedPost = await res.post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One post
router.delete("/:postId", getPost, async (req, res) => {
    try {
        await res.post.deleteOne();
        res.json({ message: "Deleted Post" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPost(req, res, next) {
    let post;
    try {
        post = await Post.findOne({postId: req.params.postId});
        if (post == null) {
            return res.status(404).json({ message: "Cannot find Post" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.post = post;
    next();
}

module.exports = router;
