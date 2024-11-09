const { body } = require("express-validator");

exports.store = [
  body("title").isLength({ min: 5 }).withMessage("Title minimal 5 karakter"),
  body("body").isLength({ min: 5 }).withMessage("Body minimal 5 karakter"),
];

exports.update = [
  body("title").isLength({ min: 5 }).withMessage("Title minimal 5 karakter"),
  body("body").isLength({ min: 5 }).withMessage("Body minimal 5 karakter"),
];

exports.delete = [body("postId").isInt().withMessage("Post ID harus angka")];
