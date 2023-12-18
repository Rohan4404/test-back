const express = require("express");
require("dotenv").config();

const app = express();
const connectToDB = require("./config/database");
const userRoute = require("./routes/userRoute");

const PORT = process.env.PORT || 8000;
app.use(express.json());

connectToDB();

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log(`Server is started ${PORT}`);
});
