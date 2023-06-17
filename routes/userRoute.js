const express = require("express");
const { UserModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRoute = express.Router();

userRoute.post("/register", async (req, res) => {
  const {email, password } = req.body;
  try {
 const bcrypt_password = await bcrypt.hash(password, 4);
    const user = new UserModel({
      email: email,
      password: bcrypt_password,
    });
    await user.save();
    res.status(201).json({"msg":"register successful"});
  } catch (err) {
    res.status(500).json({"msg":"something wronge"});
  }
});
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({"msg":"user not found"});
    }

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.status(401);
    }
    const token = jwt.sign({ userId: user._id }, "quiz");
    res.send({ token: `${token}` });
  } catch (err) {
  res.json({"msg":"something error in login"})
  }
});

module.exports = {
  userRoute,
};
