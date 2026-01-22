const express = require('express');

const postRoutes = require('./post_routes');

const router = express.Router();

router.use('/post', postRoutes);

module.exports = router;

