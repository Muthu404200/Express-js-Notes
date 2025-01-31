const express = require("express");
//change package file "dev":"node --watch --env-file=.env index"
const port = process.env.PORT || 8000

const app = express();
let data =[
    {id:1,"title" :"admin"},
    {id:2,"title" :"Muthu"},
    {id:3,"title" :"Ezio"}
]

//Get all Data
app.get("/api/post",(req,res)=>{
    res.json(data)
})

//Get single Data
// app.get("/api/post/:id",(req,res) => {
//     // console.log(req.params.id);
//     const id = parseInt(req.params.id);
    
//     res.json(data.filter((post) => post.id == id))
// })


//Get single Data
app.get("/api/post/:id",(req,res) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    const post =data.find((post) => post.id === id);
    // if(!post)
    // {
    //     res.status(404).json({"Message":"A post not found"})
    // }
    // else
    // {
    //     res.status(200).json(post);
    // }
    if(!post)
        {
           return res.status(404).json({"Message":"A post not found"})
        }
            res.status(200).json(post);
        
    

})


app.listen(port,()=>{
    console.log(`Server Start in Port ${port}`);
})

