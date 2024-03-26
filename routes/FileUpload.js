const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileUpload");

const {checkImageSize} = require("../middlewares/checkImageSize");
const {checkVideoSize} = require("../middlewares/checkVideoSize");

// API route
router.post('/localFileUpload' , localFileUpload);
router.post('/imageUpload', checkImageSize , imageUpload);
router.post('/videoUpload', checkVideoSize , videoUpload);
router.post('/imageSizeReducer' , imageSizeReducer);

module.exports = router;

