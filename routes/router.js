
const express = require('express');
const routes = express.Router();
const Blog = require('../database/db')


//homepage
routes.get('/', async(req, res)=>{
    // res.render('Blog.ejs')
    const ShowBlogs =  await Blog.find({});
    console.log(ShowBlogs);

    res.render("Blog.ejs", { ShowBlogs: ShowBlogs})
});

// show post route
routes.get('/newpost', (req, res)=>{
    res.render("Post.ejs")

});

//post to db
routes.post('/newpost', async (req,res)=>{
    const title = req.body.title;
    const content = req.body.content;

    const newBlog = await Blog.create({title: title, blog: content, date:Date.now()});
    await newBlog.save();
    console.log(`${newBlog.title} created`)
    res.redirect('/routes')

})










module.exports = routes;
