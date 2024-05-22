require('dotenv').config()


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blogs")
.then(()=>{console.log("...connected to db")})


const blogSchema = new mongoose.Schema({
    title: String,
    blog: String,
    date: Date
})

module.exports = mongoose.model('Blog', blogSchema)

