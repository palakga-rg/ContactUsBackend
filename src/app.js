const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
require("./db/conn");
const Contact=require("./models/registers");

const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
// const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
// hbs.registerPartials(partials_path);


// app.get("/",(req,res)=>{
//   res.render("index") 
// });

app.get("/register",(req,res)=>{
    res.render("register") 
  });

  app.post("/register",async(req,res)=>{
     try{

       const contactdata=new Contact({
        menu:req.body.menu,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        msg:req.body.msg
        
       })

const contactdatas=await contactdata.save();
res.status(201).render(register);
     } catch(error){
        res.status(400).send(error);
     }
  });

// app.get("/",(req,res)=>{
//     res.send("hello") 
//   });
  

app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`);
})