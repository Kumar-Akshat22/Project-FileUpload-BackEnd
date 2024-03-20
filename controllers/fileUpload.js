const File = require('../models/File');
const cloudinary = require("cloudinary").v2;
const path = require("path");

// Local File Upload -> This controller will fetch the file from the local system and put it on server
exports.localFileUpload = async(req,res) => {

    try{

        // Fetch the file
        const file = await req.files.file;
        console.log('FILE AA GAYA YAAR -> ', file);

        // Create Path where the file needs to be stored on the server
        // path = __dirname -> (current working directory) + "/files/ -> (directory named files is present)" 
        let path = __dirname + "/files/" + 'My Photo' + `.${file.name.split('.')[1]}`;
        console.log('PATH ->',path);

        // Move the file to the "path"
        file.mv(path , (err) => {

            
        });


        // Create a successfull response
        return res.status(200).json({

            success:true,
            message:'Local File uploaded successfully',
        })


    }

    catch(err){

        console.error(err);
    }
}

function isFileTypeSupported(type , supportedFileTypes){

    return supportedFileTypes.includes(type);

}

async function uploadFileToCloudinary(file , folder){

    const options = {folder};
    console.log("tempFilePath",file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath, options);

}

// Image Upload Handler
exports.imageUpload = async(req,res)=>{

    try{

        // Fetch the data from request 
        const { name, tags, email } = req.body;
        console.log(name,tags,email);

        const file = req.files.myImage;
        console.log(file);

        // Validation
        const supportedFileTypes = [".jpg",".jpeg",".png"];
        // const fileType = file.name.split('.')[1].toLowerCase();
        const fileType = path.extname(file.name).toLowerCase();
        console.log(fileType);


        // Check whether the file type is supported or not
        if(!isFileTypeSupported(fileType , supportedFileTypes)){

            return res.status(400).json({

                success:false,  
                message:"File Type not Supported"
            })
        }

        // File Format is Supported
        // Upload to Cloudinary
        console.log('Uploading to Project-FileUpload on Cloudinary');
        const response = await uploadFileToCloudinary(file, "Project-FileUpload");
        console.log(response);

        console.log('Name:',name);
        console.log('Tags:',tags);
        console.log('Email:',email);

        // Save the entry into the database
        const fileData = await File.create({

            name,
            tags,
            email,
            imageUrl:response.url,
        })

        // console.log('Printing the File Data');
        // console.log(fileData);

        res.status(200).json({
            success:true,
            // imageUrl:response.secure_url,
            // message:"Image successfully uploaded"
        })

        
    }

    catch(err){
        
        console.error(err);
        res.status(400).json({

            success:false,
            message:'Something went wrong'
        })

    }
}