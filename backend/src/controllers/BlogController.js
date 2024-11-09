const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.index = (req, res, next) => {
  BlogPost.find()
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

  BlogPost.findById(postId)
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
    .catch((err) => console.log(err));
};

exports.store = (req, res, next) => {
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

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: {
      uid: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create new blog success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
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

  BlogPost.findById(postId)

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
    .catch((err) => console.log(err));
};

exports.destroy = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Data not found");
        err.errorStatus = 404;
        throw err;
      }

      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Delete blog success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};
