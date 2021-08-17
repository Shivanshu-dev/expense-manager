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

    if (!getUserExpenses) {
      return res.status(400).json({ message: "no data found", success: false });
    }

    return res
      .status(200)
      .json({ message: " fetched expenses", success: true, getUserExpenses });
  } catch (error) {
    // .log(error);console
    return res.status(400).json({ message: error, success: false });
  }
};

exports.updateOneExpense = async (req, res) => {
  // update expense with expense id
  if (!req.user) {
    return res.status(401).json({
      message: "you are not authrized to delete this expense",
      success: false,
    });
  }
  try {
    const newUpdatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.newTitle,
        note: req.body.newNote,
        data: req.body.date,
        amount: req.body.newAmount,
      },
      {
        new: true,
      }
    );

    if (!newUpdatedExpense) {
      return res
        .status(400)
        .json({ message: "something went wrong", success: false });
    }

    // console.log(newUpdatedExpense);
    res.status(200).json({
      message: "updated the expense",
      newUpdatedExpense,
      success: true,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "something went wrong , server error", success: false });
  }
};

exports.deleteOneExpense = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "you are not authrized to delete this expense",
      success: false,
    });
  }

  try {
    const deleteExpense = await Expense.findByIdAndDelete(req.params.id);

    if (!deleteExpense) {
      return res.status(400).json({
        message: "something went wrong could not delete expense",
        success: false,
      });
    }

    return res.status(200).json({
      message: "successfully deleted expense",
      deleteExpense,
      success: true,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "server error while deleting expense", success: false });
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
