//server code
const express = require("express");
const PORT = process.env.PORT;
const dotenv = require("dotenv").config();
const fileupload = require("express-fileupload");
const authRoutes = require("./routes/authRoutes.js");
const connectDb = require("./configDB/db.js");

const app = express();
connectDb();
// parsing body
app.use(express.json());
// parsing cookie
// app.use(cookieParser());
// serving static files from photos folder
app.use(express.static("photos"));

// file upload
app.use(fileupload());

// base route for login
app.use("/api/auth", authRoutes);

app.listen(PORT || 5000, console.log("server started"));