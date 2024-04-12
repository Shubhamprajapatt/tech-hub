import React, { useEffect } from "react";
import "../style.css";
import background from "../main.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import axios from "axios";

export default function Home() {
  const email = localStorage.getItem("email");
  console.log("email", email);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };


 
  return (
    <div className="main" style={{ backgroundImage: `url(${`/backimg.jpg`})` }}>
      <DashboardHeader />
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
