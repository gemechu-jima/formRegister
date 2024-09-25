import React, { ReactNode, ReactElement } from 'react'
import Cross from './Cross'
type props={
  children:ReactNode | ReactElement
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Backdrop({children, setShow}:props) {
  const handlePropagation=(ev:React.MouseEvent)=>{
    ev.stopPropagation()
  }
  return (
    <div className='fixed bg-black bg-opacity-20 h-full w-full inset-0 z-30 '  onClick={()=>setShow(false)}>
      <div className='bg-white w-44 h-full relative ' onClick={handlePropagation}>
        <Cross/>
        {children}
      </div>
    </div>
  )
}
