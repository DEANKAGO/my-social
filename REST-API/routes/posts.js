const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');




// create a post 

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a post

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json('post has been updated successfully');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a post
// like/ dislike a post
// get a post
// get timeline posts


module.exports = router;
    