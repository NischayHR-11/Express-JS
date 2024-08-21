let express=require("express");
const app=express(); // returns object

let port=3000;

app.listen(port,()=>{

    console.log("This Is My First Server!!");
})

app.use((req,res)=>{

    console.log("recieved !!");
    res.send("<h1>THIS IS THE FIRST SERVER ..<h1>");
})