import mongoose from "mongoose";


const registerSchema=new mongoose.Schema({
    fname:{type:string ,request:true},
    lname:{type:string ,request:true},
    phone,
    city:{type:string },
    woreda:{type:string },
    age:{type:number ,request:true},
    gender:{type:string ,request:true},
    member:{type:number }
})

mongoose.model("register", registerSchema)