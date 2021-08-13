const validator = require("email-validator");
const User = require("../models/userModel.js");

// api -> /api/auth/login will come here
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(400).json({ message: "bad request", success: false });
  }

  if (!validator.validate(email)) {
    return res
      .status(400)
      .json({ message: "email is not valid", success: false });
  }

  if (password.length <= 8) {
    return res
      .status(400)
      .json({ message: "password invalid", success: false });
  }

  try {
    const loginuser = await User.findOne({ email }, { new: true });
    res.status(200).json({ message: "user logged in", success: true });
  } catch (error) {
    res.send(error.message);
  }
};

//api - > /api/auth/register
exports.registerUser = async (req, res) => {
  // checking if user is sending data or not
  const { email, password, username, image } = req.body;
  if (!email || !password || !username || !image) {
    return res
      .status(400)
      .json({ message: "credentials missing", success: false });
  }
  if (!validator.validate(email)) {
    return res
      .status(400)
      .json({ message: "incorrect email format", success: false });
  }

  if (password.length <= 8) {
    return res
      .status(400)
      .json({ message: "password must be 8 characters", success: false });
  }

  try {
    const finduser = await User.findOne({ email });

    if (finduser) {
      return res
        .status(400)
        .json({ message: "email is already registered", success: false });
    }
    const newuser = await User.create(req.body);

    // method called on new user object
    const token = newuser.getSignedJwtToken();

    res
      .status(200)
      .json({ success: true, newuser, message: "user has been saved" });
  } catch (error) {
    res.send(error.message);
  }
};

// api -> /api/auth/logout

exports.logoutUser = async (req, res) => {
  console.log(req.body);
};
