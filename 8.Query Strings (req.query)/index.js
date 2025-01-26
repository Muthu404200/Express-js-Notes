const express = require("express");
//change package file "dev":"node --watch --env-file=.env index"
const port = process.env.PORT || 8000

const app = express();


app.listen(port,()=>{
    console.log(`Server Start in Port ${port}`);
})

