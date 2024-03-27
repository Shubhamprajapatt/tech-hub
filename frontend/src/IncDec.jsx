import { message } from "antd";
import React, { useState } from "react";
import Button from "./components/Button";
export default function IncDec() {
  const [value, setvalue] = useState(0);
  const [name, setmame] = useState("Durgesh");
  const [message, setMessage] = useState(false);


  const handleInc = () => {
    setvalue(value + 1);
    setmame("prajapat");
    setMessage(false)
  };
  console.log("value=", value);

  const handleDec = () => {
    if (value > 0) {
      setvalue(value - 1);
    } else {
        setMessage(true)
    }
    setmame("durgesh");
  };

  return (
    <div>
      <h1>Increment/Decrement Application By Durgesh Sir</h1>
      <Button name="+" onclick={()=>handleInc()} backgroundColor="yellow"/>
      <span>{value}</span>
      <Button name="-" onclick={()=>handleDec()}  backgroundColor="red"/>

      <span>{name}</span>
      {
        message&&<h1>value can not be less than 0</h1>
      }
    </div>
  );
}
