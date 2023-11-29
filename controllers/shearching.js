const Todo=require("../models/Book");
exports.shearching=async(req,res)=>{
    try{
            // const queryObj={};
           const todos=await Todo.find(req.query);
           res.status(200).json({
            success:true,
            data:todos,
            message:"all data agya"
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