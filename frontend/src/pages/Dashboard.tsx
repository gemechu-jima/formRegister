import React , {useState} from 'react'
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle } from "react-icons/io";
import { Outlet } from 'react-router-dom'
import Sideboard from '../components/Dashboard/Sideboard'
import TopMain from '../components/Dashboard/TopMain'
import { useGlobalContext } from '../context/Context';
export default function Dashboard() {
 const {openIcon, setOpenIcon}=useGlobalContext()
  return (
    <div className='dark:bg-black bg-slate-100 w-full h-screen '>
      <div className='flex items-center justify-center py-2 h-full '>
        <div className={`${  openIcon ? "w-[15%]" :"w-[5%]"} sm:block hidden  px-3  h-full relative
         dark:bg-slate-900 dark:text-white text-black bg-slate-400 rounded-s-lg `}>
          <span className='flex absolute -right-2 text-3xl top-2 cursor-pointer
           dark:bg-white text-yellow-300 bg-white rounded-full z-50'
           onClick={()=>setOpenIcon(!openIcon)}>
         {openIcon ?
         <IoIosArrowDroprightCircle/>:
         <IoIosArrowDropleftCircle/>
         }
        </span>
        <Sideboard />
        </div>
        <div className={`${  openIcon ? "w-[84%]" :"w-[94%]"} bg-slate-200 px-4  h-full rounded-e-lg overflow-hidden overflow-y-auto`}>
        <TopMain/>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}
