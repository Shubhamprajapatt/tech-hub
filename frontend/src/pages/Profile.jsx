import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import InputField from "../InputField";
import Button from "../components/Button";
import { UserOutlined } from "@ant-design/icons";
import { imageData } from "./ImageContext";

export default function Profile() {
  const {imageValue,setImageValue}=useContext(imageData);
  console.log("imageValue: " ,imageValue);
  const email = localStorage.getItem("email");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

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
          setImage(response.data.user.image);
          setImageValue(response.data.user.image);
        } else {
          alert(`${response.data.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error}`);
      });
  };

  const handleImage = (e) => {
    e.preventDefault();
    console.log("e", e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    if (
      e.target.files[0].type == "image/png" ||
      e.target.files[0].type == "image/jpg"
    ) {
      axios
        .post(`http://localhost:8080/api/profileupload/${email}`, formData, {
          Headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("backend success response", res);
          setImage(res.data.filename);
          setImageValue(res.data.filename);
          if (res.data.status == 1) {
            getSpecificUserDetails();
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("file should be png or jpg!");
    }
  };
  console.log("image", image);

  const handleUpdate=()=>{
    axios
    .post(`http://localhost:8080/api/user-updatebyemail/${email}`,{firstname:firstName,lastname:lastName})
    .then((response) => {
      console.log("response", response.data);
      if (response.data.status == 1) {
        // console.log("response on update details", response.data.user.firstname);
        alert(`${response.data.message}`)
        getSpecificUserDetails();
      } else {
        alert(`${response.data.message}`);
      }
    })
    .catch((error) => {
      console.log("error", error);
      alert(`${error}`);
    });
  }

  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);
  return (
    <div className="m-20">
       <center>
       <div>
       {image ? (
            <img
              src={image ? `http://localhost:8080/profile/${image}` : ""}
              width={100}
              height={100}
              style={{ borderRadius: "50%", marginLeft: "5px" }}
            ></img>
          ) : (
            <div style={{width:"50px",height:"50px",padding:"5px" ,borderRadius:"50%", backgroundColor:"red"}}>

            <UserOutlined   />
            </div>
          )}
       </div>
       </center>
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
            read="readonly"
          ></InputField>
          <button className="m-5 p-3 rounded-xl bg-blue-500 text-white text-sm hover:bg-white hover:text-black cursor-pointer" onClick={handleUpdate}>
            Save Details
          </button>
          
        </div>
      </div>
    </div>
  );
}
