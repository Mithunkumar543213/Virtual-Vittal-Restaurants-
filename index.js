const express=require("express");
const app=express();
const mongoose= require ("mongoose");
const path = require("path");
const data = require("./models/init.js");
const ejsMate=require("ejs-mate");
app.engine("ejs", ejsMate);


// const { v4: uuidv4 } = require('uuid');  // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
 

app.use(express.urlencoded({extended:true}));

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const port =8080;

app.listen(port,()=>{
    console.log(`app is listen on ${port}`);
});

main().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/resturant");
};

app.get("/VvR",(req,res)=>{
  res.render("index.ejs");
});
 
app.get("/VvR/login",(req,res)=>{
  res.render("users/login.ejs");
});  


app.get("/VvR/signup",(req,res)=>{
    res.render("users/signup.ejs");
});
app.post("/VvR/signup",(req,res)=>{
let {username,email,password}=req.body;
  console.log(req.body);
    let signupdata = new data({
      username:username,
      email:email,
      password:password,
    });
    signupdata
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/VvR/home");
  });

  app.post("VvR/login",(req,res)=>{
    let {email,password} =req.body;
    res.redirect("/VvR/home");
    

  })

  app.get("/VvR/home",(req,res)=>{
      res.render("users/home.ejs")
  })
  

  
  

