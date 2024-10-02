import mongoose from "mongoose"
import dotenv from "dotenv"
// import path from "path"
// dotenv.config({path:path.join(__dirname, "../.env")})

const connect=mongoose.connect(process.env.MONGODB_URL)
connect.then(()=>{
    console.log("DB is connected to mongoose")
}).catch((err)=>{
    console.log(`error occur ${err}`)
})
export {connect}