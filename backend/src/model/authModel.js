import mongoose from "mongoose";

const schemaAuth=mongoose.Schema({
    email:{type:String, require:true, unique:true},
    password:{type:String ,  require:true},
    username:{type:String}
})

export default mongoose.model("user", schemaAuth)