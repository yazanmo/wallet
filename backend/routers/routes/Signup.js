const express = require("express");

const signUpRouter = express.Router();

const { createNewUser } = require("../controllers/Signup");
const authentication = require("../../routers/middlewares/authentication");

signUpRouter.post("/signup", createNewUser);

module.exports = signUpRouter;
