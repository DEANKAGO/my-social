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

router.get('posts/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).json({error: 'Post not found'});
        }

        res.status(200).json(post);
    } catch (err) { 
        console.err('Error fetching post:', err);
        res.status(500).json({err: 'Internal Server Error'});
    }
});

// get timeline posts

// router.get("/timeline/:userId", async (req, res) => {
//     try {
//       const currentUser = await User.findById(req.params.userId);
//       const userPosts = await Post.find({ userId: currentUser._id });
//       const friendPosts = await Promise.all(
//         currentUser.followings.map((friendId) => {
//           return Post.find({ userId: friendId });
//         })
//       );
//       res.status(200).json(userPosts.concat(...friendPosts));
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// GET timeline posts
router.get('/timeline/:userId', async (req, res) => {
    try {
        const userId = req.query.userId; // Use query parameters

        // Check if userId is provided
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }

        const currentUser = await User.findById(params.userId);
        
        if (!currentUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );

        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// get user's all posts

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
    