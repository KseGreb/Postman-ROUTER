const { Router } = require('express');
const router = Router();

//POSTS
router.get("/", (req, res) => {
    res.send("GET POSTS")
})

router.post("/", (req, res) => {
    res.send("POST POSTS")
})

router.put("/", (req, res) => {
    res.send("PUT POSTS")
})

router.delete("/", (req, res) => {
    res.send("DELETE POSTS")
})

module.exports = router;