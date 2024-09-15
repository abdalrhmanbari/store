import React from 'react'

export default function Input({id,placeholder, type, name, divStyle, inputStyle }:{id:string ,placeholder:string, type:string, name:string , divStyle?:string, inputStyle?:string }) {
  return (
<div className={`relative mt-2 rounded-md shadow-sm w-full ${divStyle}`}>

<input
  id={id}
  name={name}
  type={type}       
  required
  placeholder={placeholder}
  className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${inputStyle}`}
  />
</div>
  )
}
