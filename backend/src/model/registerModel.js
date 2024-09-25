import mongoose from "mongoose";


const registerSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,require:true},
    phone:{type:String},
    city:{type:String},
    woreda:{type:String},
    age:{type:Number ,require:true},
    gender:{type:String,require:true},
    member:{type:Number }
})

export default mongoose.model("register", registerSchema)