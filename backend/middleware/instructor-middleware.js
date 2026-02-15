const express = require("express");

const Course = require("../models/course");

const instructorMiddleWare = async (req, res, next) => {
  try {
    if (req.user.role != "instructor" && req.user.role != "admin") {
        return res.status(400).json({success: false, message: 'Instructor access only'})
    }
    return next();
  } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong'})
  }
};

module.exports = instructorMiddleWare;
