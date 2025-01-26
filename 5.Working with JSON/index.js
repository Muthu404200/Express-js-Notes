const express = require("express");

const app = express();

let data =[
    {id:1,"title" :"admin"},
    {id:2,"title" :"Muthu"},
    {id:3,"title" :"Ezio"}
]
app.get("/api/post",(req,res)=>{
    res.json(data)
})

app.listen(8000,()=>{console.log("Server Start in Port 8000");
})

