const express = require("express");
const accountStatsCtrl = require("./../controllers/test");

const accountStatsRoute = express.Router();

accountStatsRoute.get("/api/accounts-statistics", accountStatsCtrl);

module.exports = accountStatsRoute;
