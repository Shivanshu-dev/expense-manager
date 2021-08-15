//server code
const express = require("express");
const PORT = process.env.PORT;
const path = require("path");
const dotenv = require("dotenv").config();
const fileupload = require("express-fileupload");
const authRoutes = require("./routes/authRoutes.js");
const expenseRouter = require("./routes/expenseRoutes.js");
const connectDb = require("./configDB/db.js");

const app = express();
connectDb();
// parsing body
app.use(express.json());
// parsing cookie
// app.use(cookieParser());
// serving static files from photos folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));
// file upload
app.use(fileupload());

// base route for login
app.use("/api/auth", authRoutes);

// expense routes
app.use("/api/user", expenseRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../frontend/build", "index.html"));
});

app.listen(PORT || 5000, console.log("server started"));
