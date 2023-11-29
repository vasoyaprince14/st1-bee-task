const Book=require("../models/Book");
exports.readAll=async(req,res)=>{
    try{
           const todos=await Book.find({});
           res.status(200).json({
            success:true,
            data:todos,
            message:"all data agya"
           })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            error:err.message,
            message:'server errror',
        })
    }
} 