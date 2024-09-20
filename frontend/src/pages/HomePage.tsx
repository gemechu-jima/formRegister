
import apple from "../assets/R.jpg"
export default function HomePage() {
  return (
    <div className={`w-full h-full bg-white -mt-[2px]  bg-[url(./assets/R.jpg)] flex items-center justify-center`}>
         <div className=" w-full h-full bg-opacity-50 text-white text-center flex flex-col items-center justify-center">
            <h1 className="mt-10 text-5xl"> Well come to Home page </h1>
            <div className="flex gap-2 mt-4 ">
              <button className="rounded-md px-2 py-1 bg-yellow-300">Get start</button>
              <button className="rounded-md px-2 py-1 bg-red-300"> Demo</button>
            </div>
         </div>
    </div>
  )
}
