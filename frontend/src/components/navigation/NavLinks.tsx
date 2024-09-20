
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context';
type props ={
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}
const linkTranslations:any = {
  EN: {
    home: "Home",
    about: "About",
    contact: "Contact",
    service: "Service",
    register: "Register",
    dashboard: "Dashboard",
  },
  AM: {
    home: "ቤት",
    about: "ስለኛ",
    contact: "እውቂያ",
    service: "አገልግሎት",
    register: "መመዝገብ",
    dashboard: "መቆጣጠሪያ",
  },
  AO: {
    home: "Mana",
    about: "Waa'ee keenya",
    contact: "Quunnamtii",
    service: "Tajaajila",
    register: "Galmee",
    dashboard: "Gabate",
  },
};
let classname="mouse-over:bg-slate-300 rounded-md"
export default function NavLinks({setShow}:props) {
  const {language}=useGlobalContext()
  const labels=linkTranslations[language]
  return (
    <div className='flex sm:flex-row flex-col w-20 sm:w-auto sm:gap-2 md:gap-5 gap-5 absolute sm:relative my-6 left-3 '>
        <Link className={classname} to={"/home"} onClick={()=>setShow(false)}>{labels.home}</Link>
        <Link className={classname} to={"/about"} onClick={()=>setShow(false)}>{labels.about}</Link>
        <Link className={classname} to={"/contact"} onClick={()=>setShow(false)}>{labels.contact}</Link>
        <Link className={classname} to={"/service"} onClick={()=>setShow(false)}>{labels.service}</Link>
        <Link className={classname} to={"/demo"} onClick={()=>setShow(false)}>{labels.register}</Link>
        <Link className={classname} to={"/dashboard"} onClick={()=>setShow(false)}>{labels.dashboard}</Link>
    </div>
  )
}
