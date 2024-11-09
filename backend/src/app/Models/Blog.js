const mongoose = require("mongoose");
const { BlogSchema } = require("../../database/schema/blog-schema");

module.exports = mongoose.model("BlogPost", BlogSchema);
