import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import axios from "axios";
import { imageData } from "./ImageContext";
export default function DashboardHeader() {
  const { imageValue, setImageValue } = useContext(imageData);
  console.log("ImageValue in DashboardHeader", imageValue);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };

  const getSpecificUserDetails = () => {
    axios
      .get(`http://localhost:8080/api/get-specific-user/${email}`)
      .then((response) => {
        console.log("response", response.data);
        if (response.data.status == 1) {
          console.log("response", response.data.user.firstname);
          setName(
            response.data.user.firstname + " " + response.data.user.lastname
          );
          setImageValue(response?.data?.user?.image)
        } else {
          alert(`${response.data.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error}`);
      });
  };

  const handleOver = () => {
    alert("over");
  };

  const items = [
    {
      label: "",
      key: "SubMenu",
      icon: <DownOutlined />,
      children: [
        {
          type: "group",
          label: (
            <Link to="/profile">
              <p className="text-black">My Profile</p>
            </Link>
          ),
        },
        {
          type: "group",
          label: (
            <Link to="/history">
              <p className="text-black">My History</p>
            </Link>
          ),
        },
      ],
    },
  ];
  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <div className="navbar"></div>
      <div
        className="icon"
        style={{
          backgroundColor: "#402f2f",
          position: "fixed",
          top: "0px",
          width: "100%",
          zIndex: "999",
        }}
      >
        <h2 className="logo">TechGeeks</h2>
        <div className="menu" style={{ textAlign: "center" }}>
          <ul style={{ paddingBottom: "-8px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/subjects">Subjects</Link>
            </li>
            <li>
              <Link to="/about">About_Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact_Us</Link>
            </li>
            <li>
              {imageValue ? (
                <img
                  src={imageValue ? `http://localhost:8080/profile/${imageValue}` : ""}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%", marginLeft: "5px" }}
                ></img>
              ) : (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "5px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                >
                  <UserOutlined />
                </div>
              )}
            </li>
            {/* <li> */}
            {/* </li> */}
            <li>
              <div className="flex">
                {email && (
                  <>
                    <p className="text-sm ml-0 p-3 text-white">{name} </p>
                    <Menu
                      onClick={onClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                      items={items}
                      style={{
                        backgroundColor: "rgb(64,47,47)",
                        width: "80px",
                        height: "50px",
                        marginLeft: "-10px",
                      }}
                    />
                  </>
                )}
                <p
                  onClick={handleLogout}
                  className="text-white text-xl hover:text-orange-500 font-bold m-5"
                >
                  {email && "Logout"}
                </p>
              </div>
            </li>
            {/* <li>
              <div className="search" style={{ marginTop: "4px" }}>
                <input
                  className="srch"
                  type="search"
                  name=""
                  placeholder="Type a text"
                />
                <a href="#">
                  <button className="btn">Search</button>
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
