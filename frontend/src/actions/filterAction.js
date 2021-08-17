export const settitleFilter = (text) => {
  return (dispatch) => {
    dispatch({
      type: "TITLE_FILTER",
      text,
    });
  };
};
