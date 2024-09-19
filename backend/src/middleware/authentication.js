
import jwt from "jsonwebtoken"

const authenticate=async(req, res, next)=>{
     let token 

     try {
        if(req.header.authorization){
            token=await req.header.authorization.split(" ")[1]
        }else{
            return res.status(400).json({msg:"Authorization method is missed"})
        }
        if(!token){
            return res.status(401).json({message:"Authentication is failed"})
        }
        let decoded=jwt.verify(token, "123456")
        req.user={email:decoded.email}

        next()
     } catch (error) {
        console.log(err)
        return res.status(401).json({message:"Authentication is failed", err})
     }
}

export default authenticate