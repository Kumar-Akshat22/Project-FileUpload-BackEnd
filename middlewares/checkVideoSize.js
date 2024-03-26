function isUnderLimit(file , upperLimit){

    if(file.size <= upperLimit){

        return true;
    }

    return false;


}

exports.checkVideoSize = (req,res,next)=>{

    try{

        // Upper Limit of 5MB
        const upperLimit = 5000000;

        // Extract the video file from the request
        const file = req.files.myVideo;

        if(isUnderLimit(file,upperLimit)){

            next();
        }

        else{

            return res.status(400).json({

                success:false,
                message:'File size greater than 5MB. Please upload the file within the limit',
            })
        }



    }

    catch(err){

        return res.status(401).json({

            success:false,
            message:'Something went wrong while checking the video size',

        })


    }
}