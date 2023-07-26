import {
  faCartShopping,
  faUser,
  faIndianRupee,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import getOrders, { getCustomer, getInventory, getRevenue } from "../API";
import CardBox from "../Components/CardBox";
import RecentOrders, { ChartBars } from "../Components/RecentOrders";

const Dashboard = () => {
  const [orderData, setOrderData] = useState(0);
  const [invtData, setInvtData] = useState(0);
  const [revenueData, setRevenueData] = useState(0);
  const [customerData, setCustomerData] = useState(0);
  useEffect(() => {
    getOrders().then((res) => {
      setOrderData(res.total);
    
      // setRevenueData(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInvtData(res.total);
    });
    getCustomer().then((res) => {
      setCustomerData(res.total);
    });
   getRevenue().then((res)=>{
    let d=0;
    let data = res.carts?.map((cart) => {
      d+=cart.discountedTotal;
      return d;
    });
    if(d!=0){

      setRevenueData(d);
    }
   })
  });

  return (
    <div>
      <div>
        <h2 className="mt-2 ml-4 text-2xl font-medium">DashBoard</h2>
        <div className="grid grid-cols-4 gap-1 mt-5 ml-4 w-3/5  ">
          <CardBox
            title="Orders"
            icons={faCartShopping}
            value={orderData}
            color="green"
          />
          <CardBox
            title="Inventory"
            icons={faStore}
            value={invtData}
            color="purple"
          />
          <CardBox
            title="Customer"
            icons={faUser}
            value={customerData}
            color="sky"
          />
          <CardBox
            title="Revenue"
            icons={faIndianRupee}
            value={revenueData}
            color="red"
          />
        </div>
      </div>
      <div className="flex">
        <RecentOrders />
        <ChartBars />
      </div>
    </div>
  );
};

export default Dashboard;
