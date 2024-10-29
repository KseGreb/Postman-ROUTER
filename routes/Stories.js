const { Router } = require("express");
const router = Router();


// // STORIES
router.get("/", (req, res) => {
    res.send("GET STORIES")
})

router.post("/", (req, res) => {
    res.send("POST STORIES")
})

router.put("/", (req, res) => {
    res.send("PUT STORIES")
})

router.delete("/", (req, res) => {
    res.send("DELETE STORIES")
})

module.exports = router;