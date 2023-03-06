import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiTrendingUp, BiCameraMovie } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineRecentActors } from "react-icons/md";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-sections">
        <li>
          <AiOutlineHome className="icon" />
          Home
        </li>
        <li>
          <BiTrendingUp className="icon" />
          Trends
        </li>
        <li>
          <FiMonitor className="icon" />
          TV Shows
        </li>
        <li>
          <BiCameraMovie className="icon" /> Movies
        </li>
        <li>
          <MdOutlineRecentActors className="icon" /> Actors
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
