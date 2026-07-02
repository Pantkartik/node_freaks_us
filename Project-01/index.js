const express = require("express")
const app = express()
const PORT = 3000
const path=require('path');// setting parser for form 
const { stringify } = require("querystring");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// setting up static files file css , js for frontend 
app.use(express.static(path.join(__dirname,'public')));
// setting up ejs views 
app.set("view engine",'ejs');

// route for getting data ejs rendering 
app.get('/', (req, res) => {
    res.render("index")
    
})
// dynamic routing
app.get("/profile/:username",(req,res)=>{
    const user=req.params.username
    const salutation="welcome back"
    res.send(`Hello ${user} ${salutation}`);
})

// dynamic routing
app.get("/profile/:username/:password",(req,res)=>{
    const user=req.params.username
    const password=req.params.password
    const salutation="welcome back"
    res.send(`Hello ${user} your password is ${password} ${salutation}`)
})


app.listen(PORT)