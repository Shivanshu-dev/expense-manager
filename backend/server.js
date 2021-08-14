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
app.use(express.static(path.join(__dirname, "/../frontend/build")));
// file upload
app.use(fileupload());

// base route for login
app.use("/api/auth", authRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../frontend/build", "index.html"));
});

app.listen(PORT || 5000, console.log("server started"));
