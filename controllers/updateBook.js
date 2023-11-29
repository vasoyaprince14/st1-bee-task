const Todo=require("../models/Book");
exports.updateBook=async(req,res)=>{
    try{
         const {id}=req.params;
         const{title,author,genre,publicationYear,ISBN}=req.body;
        const todo=await Todo.findByIdAndUpdate({_id:id},{title,author,genre,publicationYear,ISBN})
        res.status(200).json({
            success:true,
            data:todo ,
            message:"update hogya"
           })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server errror',
        })  
    }
}  