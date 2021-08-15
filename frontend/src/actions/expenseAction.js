// import axios from "axios";

import axios from "axios";

let options;

export const fetchExpense = () => {
  return (dispatch) => {};
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
