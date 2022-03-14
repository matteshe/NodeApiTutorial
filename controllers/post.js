const Post = require('../models/post')

exports.getPosts = (req, res) => {
    res.json({posts: [
        {title: "First post"},
        {title: "Second post"}
        ]   
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("Creating Post: ", post);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.status(201).json({
            message: "new post created."
        });
    })
}