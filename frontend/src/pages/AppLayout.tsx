
import { Outlet } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/navigation/Footer'
export default function AppLayout() {
  return (
    <div className={`
      h-screen w-full bg-cover bg-center bg-[url('./assets/preview.png')]   bg-opacity-15
       mx-auto place-content-center`}>
        <Header/>
      <div className='dark:bg-black bg-slate-200 bg-opacity-60 w-full text-black dark:text-white h-screen pt-1'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
