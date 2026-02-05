const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const isValidUsername = await User.findOne({ username: username });
    // console.log(isValidUsername);
    if (isValidUsername) {
        
        return res.status(400).json({
            success: false,
            message: "Username is alreay in use",
        });
    }
    const isValidEmail = await User.findOne({ email: email });
    if (isValidEmail) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm-password doesn't match",
      });
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user
    const newlyCreatedUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      role: req.body.role || "user",
    });

    if (!newlyCreatedUser) {
      return res.status(400).json({
        success: false,
        message: "Registeration Failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: newlyCreatedUser
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const {credential, password} = req.body;
    console.log(credential, password);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const forgotPasswordController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  registerController,
  loginController,
  forgotPasswordController,
};
