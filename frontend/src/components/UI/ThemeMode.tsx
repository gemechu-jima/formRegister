
import {  IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import { useGlobalContext } from '../../context/Context'
export default function ThemeMode() {
  const {handleClick, theme}=useGlobalContext()
 
  return (
    <div >
        <button className='w-16 h-6 rounded-full dark:bg-white p-4 flex items-center bg-black relative transition delay-150 duration-300' onClick={handleClick}>
          { theme?
          <FaMoon className=' text-yellow-600 absolute right-1 text-2xl'/>:
          <IoSunny className='text-white absolute left-1 text-2xl'/> 
          }
        </button>
    </div>
  )
}
