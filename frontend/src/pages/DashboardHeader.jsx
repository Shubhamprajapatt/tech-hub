import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function DashboardHeader() {
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
        } else {
          alert(`${response.data.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(`${error}`);
      });
  };

  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);
  
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
            {/* <li> */}
            {/* </li> */}
            <li>
              <div className="flex">
                {email && <p className="text-sm ml-8 p-3 text-white">{name}</p>}
                <p
                  onClick={handleLogout}
                  className="text-white text-xl hover:text-orange-500 font-bold m-5"
                >
                  {email && "Logout"}
                </p>
              </div>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
