import axios from "axios";

export const loginUser = () => {
  return async (dispatch) => {};
};

export const logoutUser = () => {
  return async (dispatch) => {};
};

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "REGISTER_USER_REQUEST",
    });
    console.log(data);
    const newuser = await axios.post("/api/auth/register", data);

    console.log(newuser);
  };
};
