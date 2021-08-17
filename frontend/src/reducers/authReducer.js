export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { ...state, loading: true };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        user: action.registeredUser,
        loading: false,
      };
    case "USER_REGISTER_ERROR":
      return {
        ...state,
        loading: false,
        success: action.success,
        message: action.message,
      };
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true };
    case "USER_LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.loggedInUser };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        success: action.success,
        message: action.message,
      };
    case "LOGOUT_USER":
      return { user: {}, loading: true };
    default:
      return state;
  }
};
