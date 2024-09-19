import { useEffect,ReactNode, ReactElement } from "react"
import { useGlobalContext } from "../context/Context"
import { useNavigate } from "react-router-dom"
type Prop={
  children:ReactNode | ReactElement
}
export default function Protective({children}:Prop) {
  const {token}=useGlobalContext()
  const navigate=useNavigate()
  useEffect(()=>{
  if(token){
     navigate("/dashboard")
    }else{
      navigate("/login")
    }
  },[token])
  return token ? children :null
}
