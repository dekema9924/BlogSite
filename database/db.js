require('dotenv').config()


const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{console.log("...connected to db")})


const blogSchema = new mongoose.Schema({
    title: String,
    blog: String,
    date: Date
})

module.exports = mongoose.model('Blog', blogSchema)

