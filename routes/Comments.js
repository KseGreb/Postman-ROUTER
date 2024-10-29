const { Router } = require('express');
const router = Router();


// // COMMENTS
router.get("/", (req, res) => {
    res.send("GET comments")
})

router.post("/", (req, res) => {
    res.send("POST comments")
})

router.put("/", (req, res) => {
    res.send("PUT comments")
})

router.delete("/", (req, res) => {
    res.send("DELETE comments")
})

module.exports = router;