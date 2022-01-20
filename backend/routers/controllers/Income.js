const incomeModel = require("./../../db/models/income");
const outcomeModel = require("./../../db/models/outcome");


const createNewIncome = (req, res) => {
  const { title, description, amount } = req.body;

  const userId = req.token.id;

  const inCome = new incomeModel({
    title,
    description,
    amount,
    userId,
  });

  inCome
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getAllIncome = (req, res) => {
  const userId = req.token.id;
  incomeModel
    .find({userId: userId})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const getAllIncomeAdmin = (req, res) => {
  incomeModel
    .find()
    .populate("userId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};


module.exports = {
  createNewIncome,
  getAllIncome,
  getAllIncomeAdmin,
};