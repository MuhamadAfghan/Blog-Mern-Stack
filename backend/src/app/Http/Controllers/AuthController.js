exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const result = {
    message: "Register success",
    data: {
      uid: 1,
      name: name,
      email: email,
      password: password,
    },
  };
  res.status(201).json(result);
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const result = {
    message: "Login success",
    data: {
      uid: 1,
      email: email,
      password: password,
    },
  };

  res.status(201).json(result);
};

exports.logout = (req, res, next) => {
  res.status(201).json({ message: "Logout" });
};
