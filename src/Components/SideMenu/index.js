import {
  faBorderAll,
  faCartShopping,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getOrders from "../../API";

const SideMenu = () => {
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
getOrders().then((res)=>{
  setOrders(res.products);
});
  })
    return (
    <div className="w-full bg-slate-400 min-h-[88vh] h-full max-md:h-full  ">
      <div className="grid ">
        <div className="flex justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2 ">
          <Link to="/" >
          <span className="inline-block">

          <FontAwesomeIcon icon={faBorderAll}  className="mr-2 "/>
          </span>

          {/* </div> */}
           {/* <div> */}
           <h3 className="inline-block text-lg max-md:text-base max-sm:hidden">
             Dashboard

           </h3>

           {/* </div> */}
           
          </Link>
        </div>
        <div className=" flex justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/inventory" >
          <span className="inline-block">
          <FontAwesomeIcon icon={faStore}  className="mr-2"/>

          </span>
            <h3 className="inline-block text-lg max-md:text-base max-sm:hidden">
            Inventory
            </h3>
          </Link>
        </div>
        <div className=" flex  justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/orders" >
          <span className="inline-block">

          <FontAwesomeIcon icon={faCartShopping}  className="mr-2"/>
          </span>
          <h3 className="inline-block text-lg max-sm:hidden ">

            Orders
          </h3>
          </Link>
        </div>
        <div className="flex  justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2">
          <Link to="/customers" >
          <span className="inline-block">
          <FontAwesomeIcon icon={faUser} className="mr-2" />

          </span>
          <h3 className="inline-block text-lg max-md:text-base max-sm:hidden">
            Customers

          </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
