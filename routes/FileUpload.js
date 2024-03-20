const express = require("express");
const router = express.Router();

const {localFileUpload} = require("../controllers/fileUpload");

// API route
router.post('/localFileUpload' , localFileUpload);

module.exports = router;

