//server code
const express = require("express");
const PORT = process.env.PORT;
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes.js");
const connectDb = require("./configDB/db.js");

const app = express();
connectDb();
app.use(express.json());
app.use(express.static("photos"));

// base route for login
app.use("/api/auth", authRoutes);

app.listen(PORT || 5000, console.log("server started"));
