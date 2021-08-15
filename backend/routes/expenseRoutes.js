const express = require("express");
const { protect } = require("../middlewares/authmiddleware");
const {
  getAllExpenses,
  updateOneExpense,
  createExpense,
  deleteOneExpense,
} = require("../routeControllers/expenseControllers");
const expenseRouter = express.Router();

// base route---> /api/user
expenseRouter.get("/expenses", protect, getAllExpenses);

expenseRouter.put("/expense/:id", protect, updateOneExpense);

expenseRouter.post("/expenses", protect, createExpense);

expenseRouter.delete("/expense/:id", protect, deleteOneExpense);

module.exports = expenseRouter;
