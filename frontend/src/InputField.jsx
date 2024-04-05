import React from "react";

export default function InputField(props){
    return(
        <div className='p-3'>
        <label>
            {props.label}
        </label>
        <input type="text" placeholder={props.placeholder} className='p-2 rounded ml-4'/>
      </div>
    )
}