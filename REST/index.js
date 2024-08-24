const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.set(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let methodOverride = require('method-override');
app.use(methodOverride('_method'));

let id=3;

let posts=[

    {
        id:"1",
        name:"Nischay",
        content:"This Is My First Post"
    },
    {
        id:"2",
        name:"Mahadev",
        content:"I Am Mahadev (lol!!)"
    },
    {
        id:"3",
        name:"Vaibhav",
        content:"I Am Snake..."
    }
]



app.listen(port,(res,req)=>{

    console.log("Listening To Port : 8080");
});

app.get("/posts",(req,res)=>{

    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{

    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{

    let {name,content}=req.body;
    id++;
    posts.push({id,name,content});
    console.log(posts);
    res.redirect("/posts");

});

app.get("/posts/:id",(req,res)=>{

    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("info.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{

    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    console.log(id);
    res.render("patch.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{

    let {id}=req.params;
    let {content}=req.body;

    let post=posts.find((p)=>id==p.id);
    post.content=content;
    res.redirect("/posts");
});

app.delete("/posts/:id/delete",(req,res)=>{

    let {id}=req.params;
    posts=posts.filter((p)=>id!=p.id);
    console.log(posts);
    res.redirect("/posts");
})