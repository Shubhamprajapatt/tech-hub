import React from "react";
import InputField from "../InputField";
import Button from "../components/Button";

export default function Register() {
    const handleSubmit=()=>{
        alert('Universal')
    }
  return (
    <div className="m-40">
      <div className="content">
        <center>
        <form>
        <h2>Register</h2>

          <InputField name="firstName" label="First Name" type="text" placeholder="Enter First Name" />
          <InputField name="LastName" label="Last Name" type="text" placeholder="Enter Last Name"  />
          <InputField name="email" label="Username" type="email" placeholder="Enter Email"/>
          <InputField name="password" label="Password" type="password" placeholder="Enter Password"/>
          <div className="p-3">
            <label className="mr-2 text-black text-xl">Role</label>

            <input type="radio" placeholder="enter value" className="p-2" />
            <label className="text-black text-xl">Student</label>
          </div>
       
        </form>
        <button className="text-white p-3 rounded-2xl m-2  text-xl cursor-pointer hover:bg-gray-200 bg-blue-500 hover:text-black" onClick={handleSubmit}>Register</button>
        </center>
      </div>
    </div>
  );
}
