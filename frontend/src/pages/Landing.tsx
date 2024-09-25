
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div className='w-[80%] mx-auto  pt-10 '>
        <div className='flex gap-3'>
        
        <div className='h-96 w-[80%] mx-auto text-white'>
          <h1 className='text-5xl  pb-5'>Where you Work</h1>
            <h2 className='font-bold text-2xl '>
            Generate dummy text for web design with this handy tool.
            </h2>
            <h2 className='sm:block hidden text-3xl'>Choose from different options,
            such as Cicero, Kafka, pangram, or number, and customize the number of words, characters,
            </h2>
        </div>
        </div>
        <div className='text-white text-center w-full md:w-1/2 rounded-lg mt-1 mx-auto  '>
           <Link to="/register" className="p-3 mr-4 "> <button className='rounded-full bg-red-500 text-xl px-2 py-1'>Sign up</button></Link>
           <Link to="/login" className="p-3 mr-4 "> <button className='rounded-full bg-red-500 text-xl px-2 py-1'>Login</button></Link>
            <div className='flex gap-3 justify-center mt-5 items-center text-xl'>
            <p>Demo Explore</p> 
            <Link to="/demo"> <button className='rounded-full bg-sky-500 text-xl px-4 py-2'>Demo</button></Link>
             </div>
        </div>
    </div>
  )
}
