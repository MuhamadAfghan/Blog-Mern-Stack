const { validationResult } = require("express-validator");
const { Blog } = require("../../models/models");
const fs = require("fs");

exports.index = (req, res, next) => {
  const page = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  Blog.find()
    .countDocuments() // Get total data
    .then((count) => {
      totalItems = count;
      return Blog.find()
        .skip((parseInt(page) - 1) * parseInt(perPage)) // lewati beberapa data
        .limit(parseInt(perPage)); // batasi data yang diambil
    })
    .then((result) => {
      res.status(200).json({
        message: "Data blog berhasil dipanggil",
        data: result,
        total_data: totalItems,
        per_page: parseInt(perPage),
        current_page: parseInt(page),
        total_page: Math.ceil(totalItems / perPage),
      });
    })
    .catch((err) => next(err)); // Pass the error to the next middleware
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

  if (!req.file) {
    const err = new Error("Image must be uploaded");
    err.errorStatus = 422;
    return next(err); // Pass the error to the next middleware
  }

  const { title, body } = req.body;
  const blog = new Blog({
    title,
    body,
    image: req.file.path,
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

exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error("Invalid value");
      err.errorStatus = 400;
      err.data = errors.array();
      throw err;
    }

    const { title, body } = req.body;
    const image = req.file ? req.file.path : null;
    const postId = req.params.postId;

    const post = await Blog.findById(postId);
    if (!post) {
      const err = new Error("Data not found");
      err.errorStatus = 404;
      throw err;
    }

    const oldImage = image ? post.image : null;

    post.title = title;
    post.body = body;
    post.image = image ?? post.image;

    const result = await post.save();
    if (image && oldImage) {
      removeImage(oldImage);
    }

    res.status(200).json({
      message: "Update blog success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
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

      return Blog.findByIdAndDelete(postId);
    })
    .then((result) => {
      removeImage(result.image);
      res.status(200).json({
        message: "Delete blog success",
        data: result,
      });
    })
    .catch((err) => next(err)); // Pass the error to the next middleware
};

const removeImage = (filePath) => {
  // console.log(__dirname + "../../../../" + filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
