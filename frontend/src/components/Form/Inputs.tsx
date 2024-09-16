import React from 'react'
interface propsType{
labelName:string ,
type:string,
name:string,
value:string |number | "male" |"female" | "" | undefined,
onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
placeHolder?:string |undefined
id?:any
}
export default function Inputs({labelName, type, name, value,  onChange, placeHolder}:propsType) {
  return (
    <div className="flex items-center gap-2 justify-center w-full ">
    <div className="flex flex-col justify-center items-start w-full">
    <div className="font-bold w-full text-start">
      <label>{labelName} </label>
    </div>
    <div className='w-full'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className=" w-full rounded-md border-2 py-1.5 
        text-gray-900 ring-1 ring-inset ring-gray-300
        focus:outline-none focus:ring-cyan-600
        placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
        required
      />
    </div>
  </div>
  </div>
  )
}
