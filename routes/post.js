const express = require('express')
const {getPosts, createPost} = require('../controllers/post')

// index files are automatically found
const {createPostValidator} = require('../validators')

const router = express.Router()

router.get('/', getPosts)
router.post('/post', createPostValidator, createPost)

module.exports = router
