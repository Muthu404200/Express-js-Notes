const express = require("express");
const path = require("path")
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})

app.listen(8000,()=>{console.log("Server Start in Port 8000");
})

