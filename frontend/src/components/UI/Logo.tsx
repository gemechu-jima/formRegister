
import { IoLogoWebComponent } from "react-icons/io5";

import { useGlobalContext } from '../../context/Context';
export default function Logo() {
  const {openIcon}=useGlobalContext()
  return (
    <div className={`flex items-center gap-2 text-3xl mb-8 relative ${openIcon ? "gap-0 left-0":"gap-2"}`}>
        <IoLogoWebComponent className='text-green-600 '/>
         {openIcon && <h1>REG</h1>} 
    </div>
  )
}
