// import axios from "axios";

export const fetchExpense = () => {
  return (dispatch) => {};
};

export const addExpense = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_EXPENSE_REQUEST",
    });

    dispatch({
      type: "ADD_EXPENSE_SUCCESS",
      data,
    });
  };
};

// edit expense
