const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

router.post("/", async (req, res) => {
    const lastUser = await User.findOne().sort({ field: "asc", _id: -1 });
    const user = new User({
        userId: lastUser.userId + 1,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        role: req.body.role,
        password: req.body.password
    });
    try {
        const userFound = await User.findOne({
            $or: [{ userId: req.body.userId }, { email: req.body.email }, { username: req.body.username }],
        });
        if (userFound) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await user.save();
        res.status(201).json({success: true});
    } catch (err) {
        console.log(req.body.username);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
