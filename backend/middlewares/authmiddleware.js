// auth middleware
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.authorization;
  }

  if (!token) {
    return res
      .status(401)
      .json({ message: "you are not authorized", success: false });
  }

  try {
    const takeToken = jwt.verify(token, process.env.JWT_SECRET);
    // we get json web token the verified one created on signup to check if user is real or right

    req.user = await User.findById(takeToken.id);
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "you are not authorized", success: false });
  }
};
