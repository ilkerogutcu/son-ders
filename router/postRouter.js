const {
    Router
} = require("express");
const router = Router();
const postController = require("../controller/postController");

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;