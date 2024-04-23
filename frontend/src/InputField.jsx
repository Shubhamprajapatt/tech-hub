import React from "react";

export default function InputField(props){
    return(
        <div className='p-3'>
            <span>*</span>
        <label className="text-xl ml-2" style={{color:props.color}}>
            {props.label}
        </label>
        <input type={props.type} placeholder={props.placeholder} className='p-2 rounded ml-4' onChange={props.onChange} value={props.value}/>
      </div>
    )
}