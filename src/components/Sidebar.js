import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoAdd } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/film"}>
              <IoAdd /> Film
            </NavLink>
          </li>
          <li>
            <NavLink to={"/negara"}>
              <IoAdd /> Negara
            </NavLink>
          </li>
          <li>
            <NavLink to={"/rumahproduksi"}>
              <IoAdd /> Rumah Produksi
            </NavLink>
          </li>
          <li>
            <NavLink to={"/artis"}>
              <IoAdd /> Artis
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
