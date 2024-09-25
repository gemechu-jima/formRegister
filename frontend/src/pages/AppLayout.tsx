
import { Outlet } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/navigation/Footer'
export default function AppLayout() {
  return (
    <div className={`
      h-full w-full bg-cover bg-center bg-[url('./assets/bg-image.jpg')] 
       mx-auto place-content-center`}>
        <Header/>
      <div className='dark:bg-black bg-opacity-60 w-full text-black dark:text-white h-screen pt-1'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
