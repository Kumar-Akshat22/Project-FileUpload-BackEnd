const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({

    name:{

        type:String,
        required:true,

    },

    imageUrl:{

        type:String
    },

    tags:{

        type:String
    },

    email:{

        type:String
    }
});

// Post Middleware
fileSchema.post('save' , async function(doc){

    try{

        console.log('DOC->',doc);

        // Nodemailer Transporter
        // TODO: Shift this configuration under /config folder
        let transporter = nodemailer.createTransport({

            host: process.env.MAIL_HOST,
            auth:{

                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,

            }
        });

        // Now, send the mail
        let info = await transporter.sendMail({

            from: "MyServer",
            to: doc.email,
            subject: "New file uploaded to Cloudinary",
            html: `<h2>Hello, Guys</h2> <p>File Uploaded <a href="${doc.imageUrl}">Click Here</a></p>`,

        });

        console.log("INFO->",info)
    }

    catch(error){

        console.error(error);
    }
})
const File = mongoose.model("File",fileSchema);
module.exports = File;