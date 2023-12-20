const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({
      name,
      email,
      age,
    });

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log("error in create user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "User not created",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Users fetched",
      users,
    });
  } catch (error) {
    console.log("error in get user controller");
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Users not fetched",
    });
  }
};
