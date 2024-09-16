import React from "react";
interface propsType{
    type:string,
    name:string,
    value?:number,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
    label:string
    }
export default function Member({type, name, value, onChange, label}:propsType) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="inline  py-1.5 
              my-2 w-14 px-2 pl-4 focus:ring-inset rounded-lg border-2
              text-gray-900 ring-1 ring-inset ring-gray-300
              focus:outline-none  "
        />
      </label>
    </div>
  );
}
