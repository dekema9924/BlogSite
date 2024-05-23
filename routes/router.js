
const express = require('express');
const routes = express.Router();
const Blog = require('../database/db');
const { ObjectId } = require('bson');




//homepage
routes.get('/', async(req, res)=>{
    // res.render('Blog.ejs')
    const ShowBlogs =  await Blog.find({});
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

//delete route
routes.get('/delete/:_id', async (req,res)=>{
    const id = req.params._id
    const result = await Blog.findByIdAndDelete(id);
    console.log(`Deleted ${result.title}: `, id );
    res.redirect('/routes')
    
})


//readmore route

routes.get('/readmore/:id', async (req,res)=>{
    let id = req.params.id;
    const blog = await Blog.findById(id)
    console.log(blog);
    console.log(blog.id);

    res.render('Readmore.ejs', {blog: blog})


    
})





module.exports = routes;
