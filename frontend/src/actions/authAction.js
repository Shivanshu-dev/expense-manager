import axios from "axios";

export const loginUser = (userInput) => {
  return async (dispatch) => {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    try {
      const { data } = await axios.post("/api/auth/login", userInput);

      const { token, loginuser } = data;

      const loggedInUser = {
        email: loginuser.email,
        image: loginuser.image,
        username: loginuser.username,
        token,
      };

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        loggedInUser,
      });
      localStorage.setItem("User", JSON.stringify(loggedInUser));
    } catch (error) {
      // console.log(error.response);
      const { data } = error.response;

      const { message, success } = data;
      dispatch({
        type: "USER_LOGIN_ERROR",
        message,
        success,
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT_USER",
    });
    localStorage.removeItem("User");
  };
};

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    try {
      const { data: newdata } = await axios.post("/api/auth/register", data);
      const { newuser, token } = newdata;
      // success responses
      const registeredUser = {
        email: newuser.email,
        image: newuser.image,
        username: newuser.username,
        token,
      };
      dispatch({
        type: "USER_REGISTER_SUCCESS",
        registeredUser,
      });

      localStorage.setItem("User", JSON.stringify(registeredUser));
    } catch (error) {
      // failure responses
      const { data } = error.response;
      const { message, success } = data;

      dispatch({
        type: "USER_REGISTER_ERROR",
        message,
        success,
      });
    }
  };
};
