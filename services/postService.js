const Post = require("../model/Post");

class PostService {
    async getPosts() {
        let posts = await Post.find({});
        return posts;
    }

    async getPost(id) {
        let post = await Post.findById(id);
        return post;
    }

    async createPost(post) {
        let newPost = await Post.create(post);
        return newPost;
    }

    async updatePost(id, post) {
        let updatedPost = await Post.findByIdAndUpdate(id, post);
        return updatedPost;
    }

    async deletePost(id) {
        let deletedPost = await Post.findByIdAndRemove(id);
        return deletedPost;
    }
}