const Book=require("../models/Book");
 
exports.createBook=async(req,res)=>{
    try{
            const{title,author,genre,publicationYear,ISBN}=req.body;
            const response=await Book.create({title,author,genre,publicationYear,ISBN});
            res.status(200).json({
                success:true,
                data:response,
                message:"entry hogye"
            }
            );
    }
    catch(err){
        console.log("error agya");
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
} 