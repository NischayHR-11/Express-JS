let express =require("express");
let app =express();

let port=8080;

app.use(express.urlencoded({extended :true}));
app.use(express.json());

app.listen(port,(req,res)=>{

    console.log("Listening To Server Port : "+port);
});

app.get("/Request",(req,res)=>{

    let {username,password} =req.query;
    res.send("GET REQUEST, WELCOME "+username+" !!");
});

app.post("/Request",(req,res)=>{

    let {username,password} =req.body;

    res.send("GET REQUEST, WELCOME "+username+" !!");
});