const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    // res.send("Hello Express")
    // res.send("<h1> Hello Express </h1>")
    res.send({message : "Hello Express"})
})

app.listen(8000,()=>{console.log("Server Start in Port 8000");
})

