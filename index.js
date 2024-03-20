const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// express.json() middleware
app.use(express.json());

// File Upload middleware
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// Import Database Connection Method
const dbConnect = require("./config/database");
dbConnect();

// Import Cloudinary connect method
const cloudinaryConnect = require("./config/cloudinary");
cloudinaryConnect();

// Import routes
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload' , Upload)

// Activate the Server
app.listen(PORT , ()=>{

    console.log(`APP STARTED AT PORT ${PORT}`);
})