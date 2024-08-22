let express = require("express");

let app=express();

app.set("view engine","ejs");

let port=8080;

app.listen(port,()=>{

    console.log("Server Is Listening...");
});

app.get("/",(req,res)=>{

    res.render("home.ejs");
})

app.get("/roll",(req,res)=>{

    let roll=Math.floor(Math.random()*6)+1; //data base data
    res.render("roll.ejs",{roll}); // sent in the form of object
});