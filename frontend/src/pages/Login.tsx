import React, { useState } from 'react'
import Inputs from '../components/Form/Inputs'
import { Link, useNavigate } from 'react-router-dom'
import google from "../assets/google.png"
import apple from "../assets/apple.png"
import axios from 'axios'
import { useGlobalContext } from '../context/Context'
export default function Login() {
    
    const [data, setData]=useState({
        email:"",
        password:""
    })
    const {login}=useGlobalContext()
    const navigate=useNavigate()
    const handleOnChange=(ev:React.ChangeEvent<HTMLInputElement>)=>{
      const {name, value}=ev.target

      setData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
      })

    }
    const authHandler=async(ev:React.ChangeEvent<HTMLFormElement>)=>{
      ev.preventDefault()
      
      try {
        const response=await axios.post("/api/auth/login", data)
        console.log("response",response.data)
        if(response.data.success){
          alert(response.data.msg)
          login(response.data.email, response.data.data)
          navigate("/dashboard")
        }else if(response.data.error){
          alert(response.data.msg)
          navigate("/")
        }
      } catch (error) {
        console.error(error)
        if(error instanceof Error){
          throw new Error("Error during login")
        }
      }
    }
  return (
    <React.Fragment>
   <div className="authentication w-[95%] h-[90%] mt-2 p-3 rounded-xl mx-auto bg-gray-700 flex sm:flex-row flex-col">
   <div className='w-[50%] bg-sky-500 rounded-lg hidden sm:flex'>

   </div>
    <div className=' w-[90%] sm:w-[45%] mx-auto px-3 text-center text-white'>
    <form onSubmit={authHandler}>
      <h1 className='text-center text-2xl'>Login Page</h1>
      <hr className='my-4'/>
        <Inputs
        labelName="Email"
        type="text"
        name="email"
        value={data.email}
        onChange={handleOnChange}
        placeHolder="Enter your Email"
      />
      
        <Inputs
         labelName="Password"
         type="password"
         name="password"
         value={data.password}
         onChange={handleOnChange}
         placeHolder="Enter password"
         
          
        />
        <button className='w-full mx-auto rounded-md py-2 bg-sky-500 mt-3'>Login</button>
       <div className='flex w-full  justify-between mx-auto mt-6'>
        <span className='border-b-2 w-[35%] bottom-1 items-center'/>
        <span  className='w-auto'>or login with</span>
        <span className='border-b-2  w-[35%] bottom-1'/>
       </div>
       <div className='flex w-full   md:w-[50%] justify-between mx-auto mt-6'>
        <Link to={"https://myaccount.google.com/"} 
        className='border-2 flex items-center gap-2  rounded-md px-2 border-gray-500 mx-2  py-2 '> 
          <img src={google} alt='' className='w-5 h-5'/> Google 
        </Link>
       
        <Link to={"https://appleid.apple.com/sign-in"} 
        className='border-2 flex items-center gap-2  rounded-md px-2 border-gray-500 mx-2 py-2'>
          <img src={apple} alt='' color='white' className='w-5 h-5 text-white '/>  Apple
        </Link>
       </div>
       <div className='my-5 px-3'> New User I haven't account 
        <Link to={"/signup"} 
           className=' rounded-md ml-2 text-sky-500 '  >Sign up
         </Link>
         </div>
      </form>
      
    </div>
      
    </div>
    </React.Fragment>
  )
}
