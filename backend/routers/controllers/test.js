const expressAsyncHandler = require("express-async-handler");
const Expense = require("./../../db/models/outcome");
const Income = require("./../../db/models/income");

const accountStatsCtrl = expressAsyncHandler(async (req, res) => {
  try {
    //Expenses statistics

    const expenseStats = await Expense.aggregate([
      //filter
      { $match: { amount: { $gte: 0 } } },
      {
        $group: {
          _id: null,
          averageExp: { $avg: "$amount" },
          totalExp: { $sum: "$amount" },
          minExp: { $min: "$amount" },
          maxExp: { $max: "$amount" },
          totalRecordsExp: { $sum: 1 },
        },
      },
    ]);

    //Income statistics

    // const incomeStats = await Income.aggregate([
    //   //filter
    //   { $match: { amount: { $gte: 0 } } },
    //   {
    //     $group: {
    //       _id: null,
    //       averageIncome: { $avg: "$amount" },
    //       totalIncome: { $sum: "$amount" },
    //       minIncome: { $min: "$amount" },
    //       maxIncome: { $max: "$amount" },
    //       totalRecordsIncome: { $sum: 1 },
    //     },
    //   },
    // ]);

    res.json({ expenseStats });
  } catch (error) {
    res.json(error);
  }
});

module.exports = accountStatsCtrl;
