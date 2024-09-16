import React from 'react'
interface propsType{
    type:string,
    name:string,
    value:string |number | "male" |"female" | "" | undefined,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
    checked:boolean | undefined,
    label:string
    }
export default function RadioButton({ label, type, name, value, checked, onChange}:propsType) {
  return (
   
      <label className="flex radio p-2 cursor-pointer">
        <input 
        value={value}
        checked={checked}
        onChange={onChange}
        type={type} name={name}
        className="my-auto transform scale-125"  />
        <div className="title px-2">{label}</div>
      </label>
   
  )
}
