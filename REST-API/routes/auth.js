const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hey this is auth')
});


module.exports = router