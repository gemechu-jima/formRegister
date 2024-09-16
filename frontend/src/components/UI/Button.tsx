import React, { ReactNode } from 'react'
interface props{
  children :ReactNode
}
export default function Button({children}:props) {
  return (
    <div className='cursor-pointer'>
      {children}
    </div>
  )
}
