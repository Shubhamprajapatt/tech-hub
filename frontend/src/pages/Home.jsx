import React from "react";
import "../style.css";
import background from '../main.jpg'
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="navbar"></div>
      <div className="icon">
        <h2 className="logo">TechGeeks</h2>
        <div className="menu">
          <ul>
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
          </ul>

          
        </div>
        <div className="search">
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
      </div><br />
      <br />
      <br /><br />
      <br />

      <Outlet/>
    </div>
  );
}
