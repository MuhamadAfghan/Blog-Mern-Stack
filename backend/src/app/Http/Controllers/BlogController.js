const { validationResult } = require("express-validator");
const { Blog } = require("../../models/models");

exports.index = (req, res, next) => {
  Blog.find()
    .then((result) => {
      res.status(200).json({
        message: "Data blog berhasil dipanggil",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.show = (req, res, next) => {
  const postId = req.params.postId;

  Blog.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("Data not found");
        error.errorStatus = 404;
        throw error;
      }

      res.status(200).json({
        message: "Data blog berhasil dipanggil",
        data: result,
      });
    })
    .catch((err) => next(err)); // Pass the error to the next middleware
};

exports.store = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    return next(err); // Pass the error to the next middleware
  }

  const { title, content } = req.body;
  const blog = new Blog({
    title,
    content,
  });

  blog
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Blog created successfully",
        data: result,
      });
    })
    .catch((err) => next(err)); // Pass the error to the next middleware
};

exports.update = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Image must be uploaded");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const body = req.body.body;
  const image = req.file.path;
  const postId = req.params.postId;

  Blog.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Data not found");
        err.errorStatus = 404;
        throw err;
      }

      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update blog success",
        data: result,
      });
    })
    .catch((err) => next(err)); // Pass the error to the next middleware
};

exports.destroy = (req, res, next) => {
  const postId = req.params.postId;

  Blog.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Data not found");
        err.errorStatus = 404;
        throw err;
      }

      return Blog.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Delete blog success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};
