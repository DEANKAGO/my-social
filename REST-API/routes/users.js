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
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});
// follow user

router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if( !user.followers.includes(req.body.userId)) {
                await User.updateOne({$push: {followers: req.params.id}})
                await currentUser.updateOne({$push: {followings: req.params.id}})
                res.status(200).json('user has been followed successfully')
            } else {
                res.status(404).json('You already follow this user')
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cant follow yourself');
    }
});

// unfollow user


module.exports = router