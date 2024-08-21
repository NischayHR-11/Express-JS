let express = require("express");

let app=express();

let port=3000;

app.listen(port,()=>{

    console.log("Server Started To Listen..");
});

// app.use((req,res)=>{

//     console.log("Same Response Is Given For Every Routes!!");
//     res.send("Response Sent Successfully...");
// });

app.get("/",(req,res)=>{

    res.send("Root Portal ");
});

app.get("/apple",(req,res)=>{

    res.send("Apple Portal ");
});

app.get("/banana",(req,res)=>{

    res.send("Banana Portal ");
});

app.get("/Mango",(req,res)=>{

    res.send("Mango Portal ");
});

app.get("*",(req,res)=>{

    res.send("FRUIT NOT FOUND !!");
});