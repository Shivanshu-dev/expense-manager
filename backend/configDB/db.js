const mongoose = require("mongoose");

const db = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongodb has been connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = db;
