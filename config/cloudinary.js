const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Cloudinary Setup
const cloudinaryConnect = ()=>{

    try{

        cloudinary.config({

            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })
    }

    catch(err){

        console.log(err);
    }
}

module.exports = cloudinaryConnect;