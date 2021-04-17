const router = require('express').Router();
const path = require('path');
const viewDir = path.join(__dirname, "../views");

router.get("/", (req, res) => {
    res.sendFile(path.join(viewDir, "index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(viewDir, "exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(viewDir, "stats.html"));
});

module.exports = router;