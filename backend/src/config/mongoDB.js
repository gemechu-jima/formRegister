import mongoose from "mongoose"


const connect=mongoose.connect(process.env.MONGODB_URL)
connect.then(()=>{
    console.log("DB is connected to mongoose")
}).catch((err)=>{
    console.log(`error occur ${err}`)
})
export {connect}