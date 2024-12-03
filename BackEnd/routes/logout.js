const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    if (!req.session.userId) {
        return res.status(400).json({ message: "Not currently logged in" });
    }

    console.log("Logout");
    console.log(req.session.userId);
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Not possible" });
        }

        res.clearCookie("sessionId");
        res.json({ message: "Logged out" });
    });
});

module.exports = router;
