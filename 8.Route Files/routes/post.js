const express = require("express");
const router = express.Route();

let data =[
    {id:1,"title" :"admin"},
    {id:2,"title" :"Muthu"},
    {id:3,"title" :"Ezio"}
]

//Get all Data
router.get("/",(req,res)=>{
    res.json(data)
})

//Get single Data
// app.get("/api/post/:id",(req,res) => {
//     // console.log(req.params.id);
//     const id = parseInt(req.params.id);
    
//     res.json(data.filter((post) => post.id == id))
// })


//Get single Data
router.get("/api/post/:id",(req,res) => {
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

export default router;