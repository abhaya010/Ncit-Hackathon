const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

// Getting all
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One
router.get("/:userId", getUser, (req, res) => {
    res.json(res.user);
});

// Creating one
router.post("/", async (req, res) => {
    const lastUser = await User.findOne().sort({ field: "asc", _id: -1 });
    const user = new User({
        userId: lastUser.userId + 1,
        userName: req.body.userName,
        email: req.body.email,
        role: req.body.role,
        department: req.body.department,
        password: req.body.password,
        userDocuments: req.body.userDocuments,
    });
    try {
        const userFound = await User.findOne({
            $or: [{ userId: req.body.userId }, { email: req.body.email }],
        });
        if (userFound) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(req.body.userName);
        res.status(400).json({ message: err.message });
    }
});

// Updating One
router.put("/:userId", getUser, async (req, res) => {
    if (req.body.userName != null) {
        res.user.userName = req.body.userName;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.role != null) {
        res.user.role = req.body.role;
    }
    if (req.body.department != null) {
        res.user.department = req.body.department;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    if (req.body.userDocuments != null) {
        res.user.userDocuments = req.body.userDocuments;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete("/:userId", getUser, async (req, res) => {
    try {
        await res.user.deleteOne({ userId: req.params.userId });
        res.json({ message: "Deleted User" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findOne({ userId: req.params.userId });
        if (user == null) {
            return res.status(404).json({ message: "Cannot find User" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;
