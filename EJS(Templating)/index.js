let express = require("express");
let data=require("./data.json");

let app=express();

app.set("view engine","ejs");
app.set("view engine",)

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

app.get("/insta",(req,res)=>{

    res.render("Instagram.ejs");
})

app.get("/insta/:username",(req,res)=>{

    let {username}=req.params;
    let datar=data[username];
    console.log(datar);
    res.render("Instagram.ejs",{datar});
})