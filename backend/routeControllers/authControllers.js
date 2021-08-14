const { v4: uuidv4 } = require("uuid");
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
    const loginuser = await User.findOne({ email });

    if (!loginuser) {
      return res
        .status(401)
        .json({ message: "invalid user email", success: false });
    }

    // checking if password matches for the entered password with the user password using method
    const isMatch = await loginuser.matchPassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "invalid user password", success: false });
    }

    const token = loginuser.getSignedJwtToken();

    res
      .status(200)
      .json({ message: "user logged in", success: true, loginuser, token });
  } catch (error) {
    res.send(error.message);
  }
};

//api - > /api/auth/register
exports.registerUser = async (req, res) => {
  // checking if user is sending data or not
  const { email, password, username } = req.body;
  console.log(req.body);
  if (!req.files) {
    return res.status(400).json({ message: "photo missing", success: false });
  }

  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "credentials missing", success: false });
  }
  if (!validator.validate(email)) {
    return res
      .status(400)
      .json({ message: "incorrect email format", success: false });
  }

  if (password.length < 8) {
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

    const { image } = req.files;

    if (!image.mimetype.startsWith("image")) {
      return res
        .status(400)
        .json({ message: "please upload only image", success: false });
    }

    if (image.size > process.env.MAX_FILE_SIZE) {
      return res
        .status(400)
        .json({ message: "max size should be under 5 mb", success: false });
    }

    image.name = `${uuidv4()}_${image.name}`;

    image.mv(`${process.env.FILE_UPLOAD_PATH}/${image.name}`);

    const newuser = await User.create({
      image: image.name,
      username,
      password,
      email,
    });

    // method called on new user object
    const token = newuser.getSignedJwtToken();

    res
      .status(200)
      .json({ success: true, newuser, message: "user has been saved", token });
  } catch (error) {
    res.send(error.message);
  }
};

// api -> /api/auth/logout

exports.logoutUser = async (req, res) => {
  console.log(req.body, "123");
};
