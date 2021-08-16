const Expense = require("../models/expenseModel.js");
const User = require("../models/userModel.js");

exports.getAllExpenses = async (req, res) => {
  if (!req.user) {
    return res.status(400).json({
      message:
        "something went wrong, it looks like you are not authorized to view this page",
      success: false,
    });
  }

  const { _id } = req.user;
  try {
    const getUserExpenses = await User.findById(_id).populate("expenses");
    console.log(getUserExpenses);
    if (!getUserExpenses) {
      return res.status(400).json({ message: "no data found", success: false });
    }

    return res
      .status(200)
      .json({ message: " fetched expenses", success: true, getUserExpenses });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error, success: false });
  }
};

exports.updateOneExpense = async (req, res) => {
  // update expense with expense id
  console.log(req.body);
};

exports.deleteOneExpense = async (req, res) => {
  if (!req.user) {
    // delete expense with expense id
  }
};

exports.createExpense = async (req, res) => {
  if (!req.user) {
    return res.status(400).json({
      message: "you are not authorized to add expenses",
      success: false,
    });
  }
  const { _id } = req.user;
  const { title, note, amount, date } = req.body;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "no user with this id exists", success: false });
    }
    console.log(title, note, amount, date, _id);
    const addedExpense = await Expense.create({
      title,
      amount,
      note,
      date,
      user,
    });

    if (!addedExpense) {
      return res
        .status(400)
        .json({ message: "could not add expense", success: false });
    }

    res
      .status(200)
      .json({ message: "expense has been saved", addedExpense, success: true });
  } catch (error) {
    res.send(error);
  }
};
