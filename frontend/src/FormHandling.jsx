import React, { useState } from 'react'
import Button from './components/Button';

export default function FormHandling() {
    const [name,setName]=useState("");
    const [isRead,setIsRead] = useState(false);
    const handleName=()=>{
        setIsRead(true);
    }

    const handleEvent=(e)=>{
        console.log("event",e);
        setName(e.target.value)
    }
   
  return (
    <div>
      <h1>Input type text</h1>
      <label htmlFor='name'>Name</label>
      <input type="text" name='name' id='name' placeholder='Enter name' value={name} onChange={(e)=>handleEvent(e)} onFocus={()=>setIsRead(false)}/>
      <br />
      {/* <button onClick={handleName}>handle name</button> */}
      <Button name="handle name" onclick={()=>handleName()} backgroundColor="#da07b0a1"/>
      {isRead &&<h1>{name}</h1>}
    </div>
  )
}
