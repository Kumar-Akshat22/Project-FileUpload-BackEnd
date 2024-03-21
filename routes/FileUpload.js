const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload} = require("../controllers/fileUpload");

// API route
router.post('/localFileUpload' , localFileUpload);
router.post('/imageUpload', imageUpload);
router.post('/videoUpload',videoUpload)

module.exports = router;

