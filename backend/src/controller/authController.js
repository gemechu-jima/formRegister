
import { connection } from "../config/mysqlDB.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


function combineName(fname, lname){
   let firstName=fname.toLowerCase()
   let lastName=lname.toLowerCase()
   return firstName + lastName

}
const signUp=async(req, res)=>{
    const {email, password, firstName, lastName}=req.body
    const hashPassword=await bcrypt.hash(password, 10)
    console.log(hashPassword)
   let userName= combineName( firstName, lastName)
    try {
       connection.query("SELECT username, email FROM auth WHERE email=?", [email], (error, data, fields) => {
        if (error) {
          console.error(error); // Log the actual error for debugging
          return res.status(500).json({ msg: error, error: true, success: false });
        } else if (data.length > 0) {
          return res.status(400).json({ msg: "Already exist, you cannot sign up again", error: true, success: false });
        }
          else{
            connection.query("INSERT INTO auth (email, password, username) VALUES (  ?, ?, ?)", [email, hashPassword, userName],
                (error, data, fields)=>{
                    if(error){ 
                        console.error(error)
                        return res.status(500).json({msg:error, error:true, success:false})
                    }else{
                        return res.status(200).json({msg:"Successfully sign up",  error:false, success:true})
                    }
    
                       
                }
            )
        }
    })
    }catch (error) {
        return res.status(500).json({msg:"Internal server error",error})  
    }
}


const login=async(req, res)=>{
    const {email, password}=req.body
  
    let token
    try {
         connection.query("SELECT id, email, password FROM auth WHERE  email=?", [email], 
            async(error, data, fields)=>{
                if(error){
                    return res.status(500).json({msg:"Internal server error", error:true, success:false})
                }else if(data.length===0){
                   return res.status(401).json({msg:"Invalid email and password", error:true, success:false})
                }
                const user=data[0]
            
                let hashPassword=await bcrypt.compare(password, user.password)
                if(hashPassword){
                    token=jwt.sign({userI:user.id, email:user.email}, "123451", {expiresIn:"1d"})
                     return res.status(202).json({msg:"successfully login", 
                         error:false, success:true, data:token, userI:user.id, email:user.email})
                }else{
                    return res.status(401).json({msg:"Your Password is incorrect", error:true, success:false})
                }
            })
    } catch (error) {
       return  res.status(500).json({msg:"Internal server error",error})
    }
}

export {signUp, login}