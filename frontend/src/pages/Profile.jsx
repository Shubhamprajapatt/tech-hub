import React, { useEffect, useState } from "react";
import axios from "axios";
import InputField from "../InputField";
import Button from "../components/Button";

export default function Profile() {
  const email = localStorage.getItem("email");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const getSpecificUserDetails = () => {
    axios
      .get(`http://localhost:8080/api/get-specific-user/${email}`)
      .then((response) => {
        console.log("response", response.data);
        if (response.data.status == 1) {
          console.log("response", response.data.user.firstname);
          setFirstname(response.data.user.firstname);
          setLastname(response.data.user.lastname);
          setUsername(response.data.user.email);

        } else {
          alert(`${response.data.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error}`);
      });
  };

  const handleImage=(e)=>{
        console.log("e",e.target.files[0])
  }

  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);
  return (
    <div className="m-20">
      <div className="content">
        <div className="text-center">
          <h1>My Profile</h1>

          <InputField
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Enter First Name"
            color="white"
            value={firstName}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
          />
          <InputField
            name="LastName"
            label="Last Name"
            type="text"
            placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
          />
          <InputField
            name="email"
            label="Username"
            type="email"
            placeholder="Enter Email"
            value={username}
            color="white"
            // onChange={(e) => {
            //   setFormData({ ...formData, email: e.target.value });
            // }}
            read="readonly"
          ></InputField>
         <InputField
            name="image"
            label="My Profile"
            type="file"
            // placeholder="Enter Email"
            // value={username}
            color="white"
            onChange={(e) => {
              handleImage(e);
            }}
            read="readonly"></InputField>
        <button className="m-5 p-3 rounded-xl bg-blue-500 text-white text-sm hover:bg-white hover:text-black cursor-pointer">Save Details</button>

        </div>
      </div>
    </div>
  );
}
