const defaultFilterState = {
  titleFilter: "",
};

export const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "TITLE_FILTER":
      return { ...state, titleFilter: action.text };

    default:
      return state;
  }
};
