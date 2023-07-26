import {
  faBorderAll,
  faCartShopping,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="w-full bg-slate-400 h-[85vh]  ">
      <div className="grid  ">
        <div className=" justify-start w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 ">
          <Link to="/" className=" ml-2 text-xl">
          <FontAwesomeIcon icon={faBorderAll}  className="mr-2"/>
            Dashboard
          </Link>
        </div>
        <div className=" justify-start w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/inventory" className="ml-2 text-xl">
          <FontAwesomeIcon icon={faStore}  className="mr-2"/>
            Inventory
          </Link>
        </div>
        <div className=" justify-start w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/orders" className="ml-2 text-xl">
          <FontAwesomeIcon icon={faCartShopping}  className="mr-2"/>
            Orders
          </Link>
        </div>
        <div className="justify-start w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/customers" className="ml-2 text-xl">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
            Customers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
