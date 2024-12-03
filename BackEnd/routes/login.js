const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

router.post("/", async (req, res) => {
    try {
        console.log(req.body.email);
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.log(user);
            return res.status(400).json({ message: "User does not exist" });
        }
        if (req.body.password != user.password) {
            console.log(user);
            return res.status(400).json({ message: "Invalid credentials" });
        }
        req.session.userId = user.userId;
        console.log(user);
        console.log(user.username);
        res.status(200).json({username: user.username, success: true});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
