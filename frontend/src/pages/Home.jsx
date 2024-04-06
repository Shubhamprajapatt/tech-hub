import React from "react";
import "../style.css";
import background from "../main.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="main" style={{ backgroundImage: `url(${`/backimg.jpg`})` }}>
      <div className="navbar"></div>
      <div
        className="icon"
        style={{ backgroundColor:"#402f2f",  position: "fixed", top: "0px", width: "100%", zIndex: "999" }}
      >
        <h2 className="logo">TechGeeks</h2>
        <div className="menu" style={{textAlign:"center"}}>
          <ul style={{paddingBottom:"-8px"}}>
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
            <div className="search" style={{marginTop:"4px"}}>
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
      <br />
      <br />
      <br />
      <br />
      <br />

      <Outlet />

      <div
        className="absolute justify b-2 r-2 p-2 "
        style={{ right: "50px", bottom: "20px" }}
      >
        <button
          className="p-3 bg-blue-500 text-white text-xl rounded-2xl hover:bg-gray-200 hover:text-black cursor-pointer"
          onClick={handleBack}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
