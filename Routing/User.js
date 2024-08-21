let express = require("express");

let app=express();

let port=3000;

app.listen(port,()=>{

    console.log("Server Started To Listen..");
});

app.get("/:username/:id",(req,res)=>{

    let {username,id}=req.params;
    console.log(req.params);
    res.send("WELCOME  : "+username);
});