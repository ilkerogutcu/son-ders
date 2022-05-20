const postService = require("../services/postService")


exports.getPosts = async (req, res) => {
    try {
        const posts = await postService.getPosts();
        res.json(posts);
    } catch (error) {
        res.json({
            message: error
        });
    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await postService.getPost(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({
            message: error
        });
    }
}

exports.createPost = async (req, res) => {
    try {
        const post = await postService.createPost(req.body);
        res.json(post);
    } catch (error) {
        res.json({
            message: error
        });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body);
        res.json(post);
    } catch (error) {
        res.json({
            message: error
        });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await postService.deletePost(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({
            message: error
        });
    }
}