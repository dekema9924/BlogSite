const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const blogRouter = require('./routes/router');
var methodOverride = require('method-override')




//middlewares
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
//add css
app.use(express.static('assets'))
//add imgs
app.use('/assets/', express.static('./assets'));
app.use(express.static( __dirname + "/assets"));
app.use(bodyParser.urlencoded({ extended: false }))
//using router
app.use('/routes', blogRouter);



//creating server
app.listen(port, ()=>{
    console.log(`server open on port ${port}`)
});

app.get('/', (req, res)=>{
    res.redirect('/routes')
})










app.get('/', (req,res)=>{
    res.render("Blog.ejs")
});