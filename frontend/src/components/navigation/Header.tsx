import React, { useState } from 'react'
import Logo from '../UI/Logo'
import NavLinks from './NavLinks'
import Button from '../UI/Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Backdrop from '../UI/Backdrop';
import { Link } from 'react-router-dom';
import Language from './Language';
export default function Header() {
    const [show, setShow]=useState<boolean>(false)
  
  return (
    <div className='bg-white'>
        <div className='w-full sm:flex hidden sm:flex-row justify-between px-8 h-16 items-center'>
        <Logo/>
        <NavLinks/>
        <div className='flex gap-3 text-sm'>
         <Link to="/login">
          Login
         </Link>
         <Link to="/signup">
           SignUp 
         </Link>
        <Language/>
        </div>
        </div>
        <div className='w-full sm:hidden flex justify-between items-center px-8 h-16'>
            <Logo/>
            {show && 
            <Backdrop setShow={setShow}>
            <NavLinks/>
            </Backdrop>
        
            }
            <span>
              { show &&<ImCross className='cursor-pointer text-red-500' onClick={()=>setShow(false)}/>}
               {!show && <GiHamburgerMenu className='cursor-pointer' onClick={()=>setShow(true)}/>}
            </span>
           
        </div>
    </div>
  )
}
