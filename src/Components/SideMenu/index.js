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
      <div className="grid max-sm:justify-center">
        <div className="flex justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg  py-1 pl-2 max-sm:w-[50%]">
          <Link to="/" className="focus:bg-sky-300 w-full px-1 py-1 rounded-lg justify-start text-start">
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
        <div className=" flex justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2 max-sm:w-[50%]">
          <Link to="/inventory" className="focus:bg-sky-300 w-full px-1 py-1 rounded-lg justify-start text-start" >
          <span className="inline-block">
          <FontAwesomeIcon icon={faStore}  className="mr-2"/>

          </span>
            <h3 className="inline-block text-lg max-md:text-base max-sm:hidden">
            Inventory
            </h3>
          </Link>
        </div>
        <div className=" flex  justify-start text-center w-4/5 m-3 hover:bg-sky-300 rounded-lg px-1 py-1 pl-2 max-sm:w-[50%]">
          <Link to="/orders" className="focus:bg-sky-300 w-full px-1 py-1 rounded-lg justify-start text-start" >
          <span className="inline-block">

          <FontAwesomeIcon icon={faCartShopping}  className="mr-2"/>
          </span>
          <h3 className="inline-block text-lg max-sm:hidden ">

            Orders
          </h3>
          </Link>
        </div>
        <div className="flex  justify-start text-center w-4/5 m-3  hover:bg-sky-300 rounded-lg px-1 py-1 pl-2 max-sm:w-[50%] ">
          <Link to="/customers"  className="focus:bg-sky-300 w-full px-1 py-1 rounded-lg justify-start text-start">
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
