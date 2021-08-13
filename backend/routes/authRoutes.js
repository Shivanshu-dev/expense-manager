const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
} = require("../routeControllers/authControllers");
const router = express.Router();

// login api
router.post("/login", loginUser);

//register api

router.post("/register", registerUser);

//logout api

router.post("/logout", logoutUser);

module.exports = router;
