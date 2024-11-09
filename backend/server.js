require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const routes = require("./src/routes/web");
const upload = require("./src/config/multerConfig");
const cors = require("./src/app/Http/Middlewares/cors");
const errorHandler = require("./src/app/Http/Middlewares/errorHandler");

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "src/public")));
app.use(upload.single("image"));
app.use(cors);

app.use("/", routes);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => console.log(err));
