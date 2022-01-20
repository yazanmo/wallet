const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(403).json({ message: "forbidden" });

    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = jwt.verify(token, "user");

    req.token = parsedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: "forbidden" });
  }
};

module.exports = authentication;
