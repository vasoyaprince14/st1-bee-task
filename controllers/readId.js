const Book=require("../models/Book");
exports.readId=async(req,res)=>{
    try{
            const id=req.params.id;
           const todos=await Book.findById({_id:id});
           if(!todos){
            return res.status(404).json({
                success:false,
                // error:err.message,
                message:'no data found'
            })
           }
           res.status(200).json({
            success:true,
            data:todos,
            message:"data agya"
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