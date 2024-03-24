const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileUpload");

const {checkImageSize} = require("../middlewares/checkImageSize")
// API route
router.post('/localFileUpload' , localFileUpload);
router.post('/imageUpload', checkImageSize, imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/imageSizeReducer' , imageSizeReducer);

module.exports = router;

