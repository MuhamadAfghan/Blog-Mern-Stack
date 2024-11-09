const express = require("express");

const group = (callback) => {
  const router = express.Router();
  callback(router);
  return router;
};

module.exports = group;
