const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
} = require("../routeControllers/authControllers");
const router = express.Router();
const { protect } = require("../middlewares/authmiddleware.js");

// login api
router.post("/login", loginUser);

//register api

router.post("/register", registerUser);

//logout api

router.post("/logout", protect, logoutUser);

module.exports = router;
