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
        } else {
            res.status(403).json('you can only update your post');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a post

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json('post has been deleted successfully');
        } else {
            res.status(403).json('you can only delete your post');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// like/ dislike a post

router.put('/:id/like', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            await Post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json('post has been liked successfully');
        } else {
            await Post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json('post has been disliked successfully');
        }
    } catch (err) { res.status(500).json(err);}
});

// get a post
// get timeline posts


module.exports = router;
    