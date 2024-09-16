import  {useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { CiSearch } from 'react-icons/ci';
import { IoCalendarClearOutline } from "react-icons/io5";
import { useGlobalContext } from '../../context/Context';
export default function TopMain() {
    const [open, setOpen]=useState<boolean>()
    const {query, setQuery}=useGlobalContext()
  return (
    <div className='flex items-center justify-between gap-2 mt-3  '>
    <h1>Manage Your  project</h1>
    <div className='flex items-center gap-3'>
      <span className='bg-white flex items-center rounded-lg p-2'> 
      <CiSearch onClick={()=>setOpen(!open)}/>
      {open && <input type='search' value={query} onChange={(ev)=>setQuery(ev.target.value)} className='focus:outline-none'/>}
      </span>
     
      <p className='rounded-lg p-2 bg-slate-100'><IoCalendarClearOutline/></p>
      <p className='rounded-lg p-2 bg-slate-100'><CgProfile/></p>
    </div>
 </div>
  )
}
