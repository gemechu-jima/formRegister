
import { IoLogoWebComponent } from "react-icons/io5";
import { useGlobalContext } from '../../context/Context';
export default function Logo() {
  const {openIcon}=useGlobalContext()
  return (
    <div className='flex items-center gap-2 text-3xl'>
        <IoLogoWebComponent className='text-green-600 '/>
        
        {openIcon && <h1 >REG</h1>}
    </div>
  )
}
