import React from "react";

export default function InputField(props){
    return(
        <div className='p-3'>
            <span>*</span>
        <label className="text-xl ml-2" style={{color:"rgba(0, 0, 0, 0.88)"}}>
            {props.label}
        </label>
        <input type="text" placeholder={props.placeholder} className='p-2 rounded ml-4' onChange={props.onChange}/>
      </div>
    )
}