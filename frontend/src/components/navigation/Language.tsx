
import { useGlobalContext } from '../../context/Context'
export default function Language() {
    const {language, setLanguage}=useGlobalContext()
  return (
    <div className='px-2 py-1 rounded cursor-pointer outline-none animate-bounce hover:animate-none bg-blue-300  '>
    <select value={language} onChange={(ev)=>setLanguage(ev.target.value)}
      className='focus:outline-none bg-transparent cursor-pointer'>
      <option value={"EN"}>EN</option>
      <option value={"AM"}>AM</option>
      <option value={"AO"}>AO</option>
    </select>
   </div>
  )
}
