export const expenseReducer = (state = { expense: [] }, action) => {
  switch (action.type) {
    case "ADD_EXPENSE_REQUEST":
      return { ...state, loading: true };
    case "ADD_EXPENSE_SUCCESS":
      return {
        loading: false,
        expense: [...state.expense, action.addedExpense],
      };
    case "ADD_EXPENSE_ERROR":
      return {
        loading: false,
        message: action.message,
        success: action.success,
      };
    default:
      return state;
  }
};
