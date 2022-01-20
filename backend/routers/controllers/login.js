const userModel = require("./../../db/models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "your email is not exist" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        id: user._id,
      };

      const option = {
        expiresIn: "60m",
      };
      const role = user;
      const secretKey = "user";
      const token = jwt.sign(payload, secretKey, option);
      res.status(201).json({
        token: token,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: "your password is not correct" });
    }
  } catch (err) {}
};

module.exports = {
  login,
};
