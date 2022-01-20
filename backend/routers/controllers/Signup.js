const usersModel = require("../../db/models/user");

const createNewUser = (req, res) => {
  const { fullName, email, password, role } = req.body;

  const user = new usersModel({
    fullName,
    email,
    password,
    role,
  });

  user.save().then((result) => {
    res.status(201).json(result);
  });
};
module.exports = {
  createNewUser,
};
