import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    role:""
  });
  const handleSubmit = () => {
    // alert('Universal')
    console.log("firstname: " + formData.firstName + " lastname: " + formData.lastName);
    console.log("email: " + formData.email + " password: " + formData.password);
    console.log("role: " + formData.role);
    // return;
    axios
      .post("http://localhost:8080/register", {
        email: formData.email,
        password: formData.password,
        firstname: formData.firstName,
        lastname: formData.lastName,
        role:formData.role
      })
      .then((res) => {
        console.log("backend response", res);
        if (res.data.status == 1) {
          alert("success");
        } else {
          alert(`${res.data.message}`);
        }
      })
      .catch((err) => {
        console.log("backend error", err);
        alert(`${err.message}`);
      });
  };
  console.log("formData: ",formData);
  return (
    <div className="m-40">
      <div className="content">
        <center>
          <form>
            <h2>Register</h2>

            <InputField
              name="firstName"
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
            <InputField
              name="LastName"
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
            <InputField
              name="email"
              label="Username"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <div className="p-3">
              <label className="mr-2 text-black text-xl">Role</label>

              <input type="radio" placeholder="enter value" className="p-2" value="Student" onChange={(e)=>setFormData({...formData,role:e.target.value})} />
              <label className="text-black text-xl ml-2">Student</label>
            </div>
          </form>
          <div>
            <span>
              {" "}
              Already have an account ? <Link to="/login">Login</Link>
            </span>
          </div>

          <button
            className="text-white p-3 rounded-2xl m-2  text-xl cursor-pointer hover:bg-gray-200 bg-blue-500 hover:text-black"
            onClick={handleSubmit}
          >
            Register
          </button>
        </center>
      </div>
    </div>
  );
}
