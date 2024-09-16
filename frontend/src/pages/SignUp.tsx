
import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/Form/Inputs'
import google from "../assets/google.png"
import apple from "../assets/apple.png"
import axios from 'axios'
export default function SignUp() {

    const [data, setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
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
        const response=await axios.post("/api/auth/signup", data)
        console.log(response)

        if(response.data.success){
          alert(response.data.msg)
          navigate("/login")
        }else if(response.data.error){
          alert(response.data.msg)
        }else if(response.data.msg==="Already exist, you cannot sign up again"){

        }
      } catch (error) {
        if(error instanceof Error){
          alert(`Error is happen, ${error}`)
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
      <h1 className='text-center text-2xl'>Create Account</h1>
      <hr className='my-4'/>
      <div className='flex sm:flex-row flex-col justify-center items-center sm:w-[100%] mx-auto gap-2'>

      
      <Inputs
      labelName="First Name"
      type="text"
      name="firstName"
      value={data.firstName}
      onChange={handleOnChange}
      placeHolder="Enter your first name"
    />
        
      
        <Inputs
        labelName="Last Name"
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={handleOnChange}
        placeHolder="Enter your last name"
      />
      </div>
        <Inputs
        labelName="Email"
        type="email"
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
        <button className='w-full mx-auto rounded-md py-2 bg-sky-500 mt-3'>Create Account</button>
       <div className='flex w-full  justify-between mx-auto mt-6'>
        <span className='border-b-2 w-[35%] bottom-1'/>
        <span  className='w-auto'>or Register with</span>
        <span className='border-b-2 w-[35%] bottom-1 '/>
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
       <div className='my-5 px-3'> Already have an account
        <Link to={"/login"} 
           className=' rounded-md ml-2 text-sky-500 '  >login
         </Link>
         </div>
      </form>
      
    </div>
      
    </div>
    </React.Fragment>
  )
}