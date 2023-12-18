const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log("Database is not connected");
      console.log(err);
    });
};

module.exports = connectToDB;
