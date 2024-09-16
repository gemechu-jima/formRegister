
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context';

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

export default function NavLinks() {
  const {language}=useGlobalContext()
  const labels=linkTranslations[language]
  return (
    <div className='flex sm:flex-row flex-col w-20 sm:w-auto sm:gap-2 md:gap-5'>
        <Link to={"/home"}>{labels.home}</Link>
        <Link to={"/about"}>{labels.about}</Link>
        <Link to={"/contact"}>{labels.contact}</Link>
        <Link to={"/service"}>{labels.service}</Link>
        <Link to={"/demo"}>{labels.register}</Link>
        <Link to={"/dashboard"}>{labels.dashboard}</Link>
    </div>
  )
}
