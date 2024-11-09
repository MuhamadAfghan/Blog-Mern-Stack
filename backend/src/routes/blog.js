const express = require("express");
const { body } = require("express-validator");
const BlogController = require("../controllers/BlogController");
const BlogValidation = require("../validations/BlogValidation");

const router = express.Router();

router.get(
  "/posts",

  BlogController.index
);
router.post("/post", BlogValidation.createBlog, BlogController.store);
router.get("/post/:postId", BlogController.show);

module.exports = router;
