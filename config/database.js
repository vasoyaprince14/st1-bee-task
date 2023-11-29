const mongoose=require('mongoose');
const dbConnect=()=>{
    mongoose.connect("mongodb+srv://vasoyaprince:9518139625@cluster0.dqdzzbn.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("connnect hogyga db ka")
    }).catch((err)=>{
        console.log("errr agya ");
        process.exit(1);
    });

}
module.exports=dbConnect; 