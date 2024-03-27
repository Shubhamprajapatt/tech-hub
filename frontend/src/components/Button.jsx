import React from 'react'

export default function Button({name,backgroundColor,onclick}) {
    console.log("props in Button.jsx",name,backgroundColor,onclick);
  return (
    <div>
      <button onClick={onclick} style={{backgroundColor:backgroundColor}}>{name}</button>
    </div>
  )
}
