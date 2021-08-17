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

export const updateOneExpense = (user, updatedInfo, updateID) => {
  return async (dispatch) => {
    try {
      options = {
        headers: {
          "content-type": "application/json",
          authorization: `${user.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/user/expense/${updateID}`,
        updatedInfo,
        options
      );
      const { message, newUpdatedExpense, success } = data;

      const { _id } = newUpdatedExpense;
      console.log(_id);

      dispatch({
        type: "UPDATE_EXPENSE",
        message,
        newUpdatedExpense,
        _id,
        success,
      });
    } catch (error) {
      console.log(error.response);
      const { message, success } = error.response;

      // only hit this when we want a error condition implimented
      dispatch({
        type: "UPDATE_EXPENSE_ERROR",
        message,
        success,
      });
    }
  };
};

// delete expense

export const deleteExpense = (user, expenseID) => {
  return async (dispatch) => {
    try {
      options = {
        headers: {
          "content-type": "application/json",
          authorization: `${user.token}`,
        },
      };

      const { data } = await axios.delete(
        `/api/user/expense/${expenseID}`,
        options
      );
      const { message, deleteExpense, success } = data;

      const { _id: removeID } = deleteExpense;

      dispatch({
        type: "DELETE_EXPENSE",
        message,
        removeID,
        success,
      });
    } catch (error) {
      console.log(error.response);
      const { message, success } = error.response;
      dispatch({
        type: "DELETE_EXPENSE_FAIL",
        message,
        success,
      });
    }
  };
};
