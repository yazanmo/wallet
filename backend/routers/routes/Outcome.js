const express = require("express");

const outcomeRouter = express.Router();

const { createNewOutcome ,getAllOutcome,getAllOutcomeAdmin} = require("../controllers/Outcome");
const auth  = require("../../routers/middlewares/authentication");

outcomeRouter.post("/outcome", auth, createNewOutcome);
outcomeRouter.get("/outcome", auth, getAllOutcome);
outcomeRouter.get("/outcome/admin",auth, getAllOutcomeAdmin);

module.exports = outcomeRouter;
