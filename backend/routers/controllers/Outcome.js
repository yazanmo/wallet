const outcomeModel = require("./../../db/models/outcome");

const createNewOutcome = (req, res) => {
  const { title, description, amount } = req.body;

  const userId = req.token.id;

  const outCome = new outcomeModel({
    title,
    description,
    amount,
    userId,
  });

  outCome
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getAllOutcome = (req, res) => {
  const userId = req.token.id;
  outcomeModel
    .find({userId:userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const getAllOutcomeAdmin = (req, res) => {
 
  outcomeModel
    .find({})
    .populate("userId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};


module.exports = {
    createNewOutcome,
    getAllOutcome,
    getAllOutcomeAdmin
  
};