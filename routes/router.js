
const express = require('express');
const routes = express.Router();
const Blog = require('../database/db')

routes.get('/', (req, res)=>{
    res.render('Blog.ejs')
});








module.exports = routes;
