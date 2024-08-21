let express = require("express");

let app=express();

let port=3000;

app.listen(port,()=>{

    console.log("Server Started To Listen..");
});

app.get("/search",(req,res)=>{

    let {q,i}=req.query;
    console.log(req.query);
    res.send("Results For Search  : "+q+" "+i);
});