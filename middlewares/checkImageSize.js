function isUnderLimit(file,upperLimit){

    if(file.size <= upperLimit){

        return true;
    }

    return false;

}

exports.checkImageSize = async(req,res,next) => {

    try{

        // Upper Limit for uploading the file
        const upperLimit = 1000000;

        // Extract the file from the request
        const file = req.files.myImage;

        if(isUnderLimit(file,upperLimit)){

            next();
        }

        else{

            return res.status(400).send({

                success:false,
                message:'File size is more than 5MB. Please upload file within the size limit'
            })
        }


    }

    catch(err){

        return res.status(401).json({

            success:false,
            message:'Something went wrong'
        })
    }
}