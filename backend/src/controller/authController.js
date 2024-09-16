
import { connection } from "../config/mysqlDB.js"
import jwt from "jsonwebtoken"


function combineName(fname, lname){
   let firstName=fname.toLowerCase()
   let lastName=lname.toLowerCase()
   return firstName + lastName

}
const signUp=(req, res)=>{
    const {email, password, firstName, lastName}=req.body
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
            connection.query("INSERT INTO auth (email, password, username) VALUES (  ?, ?, ?)", [email, password, userName],
                (error, data, fields)=>{
                    if(error){ 
                        console.error(error)
                        return res.status(500).json({msg:error, error:true, success:false})
                    }else{
                        return res.status(200).json({msg:"Successfully sign up",  error:false, success:true, data, token})
                    }
    
                       
                }
            )
        }
    })
    }catch (error) {
        return res.status(500).json({msg:"Internal server error",error})  
    }
}


const login=(req, res)=>{
    const {email, password}=req.body
   
    let token
    try {
        connection.query("SELECT id, email FROM auth WHERE password=? AND email=?", [password, email], 
            (error, data, fields)=>{
                if(error){
                    return res.status(500).json({msg:"Internal server error"})
                }else if(data.length===0){
                return res.status(401).json({msg:"Invalid email and password"})

                }
                token=jwt.sign({userI:data.id, email:data.email}, "12345", {expiresIn:"1d"})
                return res.status(202).json({msg:"successfully login", data:token, userI:data.id, email:data.email})
                
            })
    } catch (error) {
       return  res.status(500).json({msg:"Internal server error",error})
    }
}

export {signUp, login}