
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "../../context/Context";
export default function Cross() {
  const { setShow}=useGlobalContext()

  return (
   
      <RxCross2 className="sm:hidden flex z-10 bg-slate-300 absolute right-1 top-5 text-red-500 text-2xl rounded-full p-1 "
      onClick={()=>{setShow(false)}}/>
   
  )
}
