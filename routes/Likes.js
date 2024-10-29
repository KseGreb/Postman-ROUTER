const { Router } = require("express");
const router = Router();


// // LIKES
router.get("/", (req, res) => {
    res.send("GET LIKES")
})

router.post("/", (req, res) => {
    res.send("POST LIKES")
})

router.put("/", (req, res) => {
    res.send("PUT LIKES")
})

router.delete("/", (req, res) => {
    res.send("DELETE LIKES")
})


module.exports = router;