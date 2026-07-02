const express = require("express")
const app = express()
const PORT = 3000
// setting parser for form 

app.use(express.json);
app.use(express.urlencoded({ extended: true }))


// route for getting data

app.get('/', (req, res) => {
    res.send("This is a login page")

})


app.listen(PORT, (err) => {
    if (err) {
        console.err(err.stack)
        res.status(500).send("Something Went wrong ")
    }

})