const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.getPosts);
router.post('/', multer, postsCtrl.createPost);

module.exports = router;