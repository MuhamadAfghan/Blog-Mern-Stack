const express = require("express");
const router = express.Router();
const { group } = require("../app/helpers/helpers");

// import controllers
const {
  AuthController,
  BlogController,
} = require("../app/Http/Controllers/controllers");

// import validations
const { BlogValidation } = require("../app/Http/Validations/validations");

// routes
router.get("/", (req, res) =>
  res
    .status(200)
    .json({ message: "Server ready to use", status: 200, currentVersion: "v1" })
);

//[url]/v1
router.use(
  "/v1",
  group((route) => {
    route.get("/", (req, res) =>
      res.status(200).json({ message: "API v1 ready to use", status: 200 })
    );

    route.post("/register", AuthController.register);
    route.post("/login", AuthController.login);
    route.post("/logout", AuthController.logout);

    route.use(
      "/posts",
      group((route) => {
        route.get("/", BlogController.index);
        route.post("/", BlogValidation.store, BlogController.store);
        route.get("/:postId", BlogController.show);
        route.put("/:postId", BlogValidation.update, BlogController.update);
        route.delete("/:postId", BlogController.destroy);
      })
    );
  })
);

module.exports = router;
