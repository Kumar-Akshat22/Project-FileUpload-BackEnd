const File = require('../models/File');

// Local File Upload -> This controller will fetch the file from the local system and put it on server

exports.localFileUpload = async(req,res) => {

    try{

        // Fetch the file
        const file = req.files.file;
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