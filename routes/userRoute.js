const express = require("express");

const { createUser, getUsers } = require("../controllers/user.controller");

const router = express.Router();

router.post("/createUser", createUser);
router.get("/get", getUsers);

module.exports = router;

// https://test-back-one.vercel.app/api/v1/get
