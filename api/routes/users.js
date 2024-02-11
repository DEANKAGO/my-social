const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require("bcrypt");


// update user
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json('Acccount has been updated');
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json('You can update only your account!');
        }
});

// delete user
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.body.id);
            res.status(200).json('Account deleted');
        }catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json('You can delete only your accounts');
    }
});

// get user
router.get('/', async (req, res) => {
    const { userId, username } = req.query;
    try {
        let user;
        if (userId) {
            user = await User.findById(userId);
        } else if (username) {
            user = await User.findOne({username});
        } else {
            return res.status(400).json({message: 'Please provide either userId or username'});
        }

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
    
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json({message: 'Internal Server Error'});
    }
});
// follow user

router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if( !user.followers.includes(req.body.userId)) {
                await User.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json('user has been followed successfully')
            } else {
                res.status(403).json('You already follow this user');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cant follow yourself');
    }
});

// unfollow user

router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if( user.followers.includes(req.body.userId)) {
                await User.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json('user has been unfollowed successfully')
            } else {
                res.status(403).json('You dont follow this user');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cant unfollow yourself');
    }
});



module.exports = router