const express = require("express");
const post = require("./routes/post.js")
const port = process.env.PORT || 8000

const app = express();

//Routes

app.use('/api/postes',post);

app.listen(port,()=>{
    console.log(`Server Start in Port ${port}`);
})

