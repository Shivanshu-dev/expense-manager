// import axios from "axios";

import axios from "axios";

let options;

export const fetchExpense = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_EXPENSES_REQUEST",
    });

    try {
      options = {
        headers: {
          "content-type": "application/json",
          authorization: `${user.token}`,
        },
      };

      const { data } = await axios.get("/api/user/expenses", options);

      const { expenses } = data.getUserExpenses;

      dispatch({
        type: "FETCH_EXPENSES_SUCCESS",
        expenses,
      });
    } catch (error) {
      const { message, success } = error?.response.data;

      dispatch({
        type: "FETCH_EXPENSES_ERROR",
        message,
        success,
      });
    }
  };
};

export const addExpense = (newInput, user) => {
  console.log(newInput, user);
  return async (dispatch) => {
    dispatch({
      type: "ADD_EXPENSE_REQUEST",
    });

    try {
      options = {
        headers: {
          "content-type": "application/json",
          authorization: `${user.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/user/expenses",
        newInput,
        options
      );
      const { addedExpense } = data;
      dispatch({
        type: "ADD_EXPENSE_SUCCESS",
        addedExpense,
      });
    } catch (error) {
      const { data } = error.response;
      const { message, success } = data;

      dispatch({
        type: "ADD_EXPENSE_ERROR",
        message,
        success,
      });
    }
  };
};

// edit expense

// delete expense

export const deleteExpense = (user, expenseID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete("/", expenseID);
    } catch (error) {}

    dispatch({
      type: "REMOVE_EXPENSE",
    });
  };
};
