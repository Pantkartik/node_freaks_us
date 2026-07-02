const express=require('express')
const app=express()
PORT=8000
// middleware 1
app.use(function(req,res,next){
    console.log("Middleware 1");
    next();
})
// middleware 2
app.use(function(req,res,next){
    console.log("Middleware 2");
    next();
})
// route 
app.get("/",function(req,res){
    res.send("This is a route home ")
})

app.get("/profile",function(req,res){
    res.send("This is a profile hooh hheheh route")
})
// if the user routes to the login page which is not present will use erro handling 
app.get("/login",function(req,res,next){
    return next(new Error("ERROR USER IN LOGIN PAGE ACCES "));
    
})
// error handling middleware 
app.use(function(err,req,res,next){
    console.error(err.stack); // for exact code problem log only developer access
    res.status(500).send("Something went wrong!"); // for frontend user access
})

app.listen(PORT)