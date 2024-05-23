

const mongoose = require('mongoose');
require('dotenv').config()
let Mongo_Url = process.env.DB_CONNECTION
mongoose.connect(Mongo_Url)
.then(()=>{console.log("...connected to db")})


const blogSchema = new mongoose.Schema({
    title: String,
    blog: String,
    date: Date
})

module.exports = mongoose.model('Blog', blogSchema)

