const router = require('express').Router();
const path = require('path');
const viewDir = path.join(__dirname, "../views");

router.get("/", (req, res) => {
    res.sendFile(path.join(viewDir, "index.html"));
})

module.exports = router;