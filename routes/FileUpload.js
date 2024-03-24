const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileUpload");

const {checkSize} = require("../middlewares/checkSize")
// API route
router.post('/localFileUpload' , localFileUpload);
router.post('/imageUpload', checkSize, imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/imageSizeReducer' , imageSizeReducer);

module.exports = router;

