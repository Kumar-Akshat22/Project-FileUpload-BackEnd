const mongoose = require("mongoose");
require("dotenv").config();

// MONGODB Connection
const dbConnect = ()=>{

    mongoose.connect(process.env.MONGODB_URL, {


    }).then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((error) => {

        console.log("DB CONNECTION ISSUES");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;