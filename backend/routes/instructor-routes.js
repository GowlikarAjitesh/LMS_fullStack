const express = require("express");
const multer = require("multer");

const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../helpers/cloudinary");
const { route } = require("./auth-routes");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log("req.file:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file received",
      });
    }
    const result = await uploadMediaToCloudinary(req.file.path);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Upload Failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "Media Upload Successful",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Uploading File",
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "No Media Found",
      });
    }
    const result = await deleteMediaFromCloudinary(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Cannot Delete Media",
      });
    }
    res.status(200).json({
      success: true,
      message: "Media Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something went wrong",
    });
  }
});

module.exports = router;
