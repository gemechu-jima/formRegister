
import jwt from "jsonwebtoken"

let secret=process.env.JWT_SECRET
const authenticate=async(req, res, next)=>{
     let token 

     try {
        if(req.headers.authorization){
            token=await req.headers.authorization.split(" ")[1]
        }else{
            return res.status(400).json({msg:"Authorization method is missed"})
        }
        if(!token){
            return res.status(401).json({message:"Authentication is failed"})
        }
        let decoded=jwt.verify(token, secret)
        req.user={email:decoded.email}

        next()
     } catch (error) {
        console.log(error)
        return res.status(401).json({message:"Authentication is failed", error})
     }
}

export default authenticate