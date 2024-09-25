import  {useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { CiSearch } from 'react-icons/ci';
import { VscThreeBars } from "react-icons/vsc";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useGlobalContext } from '../../context/Context';
export default function TopMain() {
    const [open, setOpen]=useState<boolean>()
    const [openLogout, setOpenLogout]=useState<boolean>()
    const {query, setQuery, logout, setOpenIcon, setShow}=useGlobalContext()
  return (
    <div className='flex items-center justify-between gap-2 mt-3  '>
   <div className=''><VscThreeBars className='sm:hidden' onClick={()=>{setOpenIcon(true), setShow(true)}}/><h1 className='hidden sm:flex'>Manage Your  project</h1></div>
    <div className='flex items-center gap-3 mx-2'>
      <span className='bg-white flex items-center rounded-lg p-2'> 
      <CiSearch onClick={()=>setOpen(!open)}/>
      {open && <input type='search' value={query} onChange={(ev)=>setQuery(ev.target.value)} className='focus:outline-none'/>}
      </span>
     
      <p className='rounded-lg p-2 bg-slate-100'><IoCalendarClearOutline/></p>
      <p className='rounded-lg p-2 bg-slate-100 relative'>
        <CgProfile onClick={()=>setOpenLogout(prev=>!prev)} />
       {openLogout &&
        <button className='absolute -left-4 mt-3 bg-white px-2 py-1 rounded-md flex flex-col'>
          <span onClick={logout}>logout</span>
          <span>...</span>
          </button>}
        </p>
    </div>
 </div>
  )
}
