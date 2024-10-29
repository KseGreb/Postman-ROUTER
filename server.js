const express = require("express");
const app = express();


//IMAGINE INSTAGRAM WITH POSTS, LIKES, STORIES, ETC
// THE CODE WOULD BE HUGE IS NOT USE ROUTER! 
// EXAMPLE BELOW HOW NOT TO WRITE THE CODE WITH app.get, app.post, app.put, app.delete
// AND REFACTOR IT INSTEAD with creating new folder for all the routes and showing the route here


const postsRoute = require('./routes/Posts');
const likesRoute = require('./routes/Likes');
const commentsRoute = require('./routes/Comments');
const storiesRoute = require('./routes/Stories');

app.use('/posts', postsRoute);
app.use('/likes', likesRoute);
app.use('/comments', commentsRoute);
app.use('/stories', storiesRoute)



// //POSTS
// app.get("/posts", (req, res) => {
//     res.send("GET POSTS")
// })

// app.post("/posts", (req, res) => {
//     res.send("POST POSTS")
// })

// app.put("/posts", (req, res) => {
//     res.send("PUT POSTS")
// })

// app.delete("/posts", (req, res) => {
//     res.send("DELETE POSTS")
// })

// // COMMENTS
// app.get("/comments", (req, res) => {
//     res.send("GET comments")
// })

// app.post("/comments", (req, res) => {
//     res.send("POST POSTS")
// })

// app.put("/comments", (req, res) => {
//     res.send("PUT comments")
// })

// app.delete("/comments", (req, res) => {
//     res.send("DELETE comments")
// })


// // LIKES
// app.get("/LIKES", (req, res) => {
//     res.send("GET LIKES")
// })

// app.post("/LIKES", (req, res) => {
//     res.send("POST LIKES")
// })

// app.put("/LIKES", (req, res) => {
//     res.send("PUT LIKES")
// })

// app.delete("/LIKES", (req, res) => {
//     res.send("DELETE LIKES")
// })



// // STORIES
// app.get("/STORIES", (req, res) => {
//     res.send("GET STORIES")
// })

// app.post("/STORIES", (req, res) => {
//     res.send("POST STORIES")
// })

// app.put("/STORIES", (req, res) => {
//     res.send("PUT STORIES")
// })

// app.delete("/STORIES", (req, res) => {
//     res.send("DELETE STORIES")
// })



app.listen(4000, ()=> {
    console.log("Listening on port 4000")
})