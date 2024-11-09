const mongoose = require("mongoose");

const Schema = mongoose.Schema;
exports.BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
