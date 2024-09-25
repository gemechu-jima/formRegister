
import userConnect from "../model/authModel.js"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"


function combineName(fname, lname){
   let firstName=fname.toLowerCase()
   let lastName=lname.toLowerCase()
   return firstName + lastName

}
const signUp=async(req, res)=>{
    const {email, password, firstName, lastName}=req.body
    const hashPassword=await bcryptjs.hash(password, 10)
    console.log(hashPassword)
    let user
   let userName= combineName( firstName, lastName)
    try {
         user=await userConnect.findOne({email})
        if(user){
            return res.status(402).json({msg:"This user already exist"})
        }
        let hashPassword
            hashPassword=await bcryptjs.hash(password, 10)
            user=await userConnect.create({email, password:hashPassword, username:userName})
            // token=jwt.sign({userId:user.id, email:user.email}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.status(201).json({msg:"Successfully sign up",  error:false, success:true})
    } catch (error) {
        console.log(error.message)
        return res.status(402).json({msg:error.message})
    }
}


const login=async(req, res)=>{
    const {email, password}=req.body
    let secret=process.env.JWT_SECRET
    console.log(email, password)
    let user
    let token
    try {
        user=await userConnect.findOne({email})
        if(!user){
          return res.status(404).json({msg:"Fail into login ",  error:true, success:false})
        }
        let isValid=await bcryptjs.compare(password, user.password)
        if(isValid){
            token=jwt.sign({userId:user.id, email:user.email},  secret, {expiresIn:'1d'})
                return res.status(200).json({msg:"Successfully login", 
                     error:false, success:true,
                      userId:user.id, email:user.email, token})
        }else{
        return res.status(404).json({msg:"Login is failed Not found credential password", error:true, success:false })
        }
    } catch (error) {
        return res.status(404).json({msg:"Login is failed Not found credential email.",error:true, success:false})
    }
    
}

export {signUp, login}