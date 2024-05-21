const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;



//middlewares
app.set('view engine', 'ejs')
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({ extended: false }))

//creating server
app.listen(port, ()=>{
    console.log(`server open on port ${port}`)
});










app.get('/', (req,res)=>{
    res.render("Blog.ejs")
});