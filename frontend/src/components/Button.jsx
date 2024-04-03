import React from 'react'

export default function Button({name,backgroundColor,onclick}) {
    console.log("props in Button.jsx",name,backgroundColor,onclick);
  return (
    <div>
      <button className="text-white p-3 rounded-2xl m-2 float-left text-xl cursor-pointer hover:bg-gray-200 bg-blue-500 hover:text-black" onClick={onclick} >{name}</button>
    </div>
  )
}
