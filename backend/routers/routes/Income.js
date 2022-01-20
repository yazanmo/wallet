const express = require("express");

const incomeRouter = express.Router();

const { createNewIncome ,getAllIncome,getAllIncomeAdmin} = require("../controllers/Income");
const auth  = require("../../routers/middlewares/authentication");

incomeRouter.post("/income", auth, createNewIncome);
incomeRouter.get("/income", auth, getAllIncome);
incomeRouter.get("/income/admin", auth, getAllIncomeAdmin);


module.exports = incomeRouter;
