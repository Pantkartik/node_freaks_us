const express = require("express")
const app = express()
// import { check_login } from "./middlewares/middleware";

// for handling the data format basically the convertion from gibrish data 
// from client to server making it readable for server
app.use(express.json)
app.use(express.urlencoded({ extended: true }));


// routes for form 
app.use(check_login);
app.get('/', function (req, res) {
    res.send("Hello");
})

app.post('/submit', function (req, res) {
    res.end("Working on this");

}
)


app.listen(PORT);