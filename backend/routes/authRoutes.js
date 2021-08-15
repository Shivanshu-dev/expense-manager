const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
} = require("../routeControllers/authControllers");
const authRoutes = express.Router();
const { protect } = require("../middlewares/authmiddleware.js");

// login api
authRoutes.post("/login", loginUser);

//register api

authRoutes.post("/register", registerUser);

//logout api

authRoutes.post("/logout", protect, logoutUser);

module.exports = authRoutes;
