const { body } = require("express-validator");

exports.createBlog = [
  body("title").isLength({ min: 5 }).withMessage("Title minimal 5 karakter"),
  body("body").isLength({ min: 5 }).withMessage("Body minimal 5 karakter"),
];

exports.updateBlog = [
  body("title").isLength({ min: 5 }).withMessage("Title minimal 5 karakter"),
  body("body").isLength({ min: 5 }).withMessage("Body minimal 5 karakter"),
];

exports.deleteBlog = [
  body("postId").isInt().withMessage("Post ID harus angka"),
];
