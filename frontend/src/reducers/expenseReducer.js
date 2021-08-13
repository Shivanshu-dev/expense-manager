export const expenseReducer = (state = { expense: [] }, action) => {
  switch (action.type) {
    case "ADD_EXPENSE_REQUEST":
      return { loading: true, expense: [...state.expense] };
    case "ADD_EXPENSE_SUCCESS":
      return { loading: false, expense: [...state.expense, action.data] };
    default:
      return state;
  }
};
