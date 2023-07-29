import {
  faCartShopping,
  faUser,
  faIndianRupee,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
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
    if(d!==0){

      setRevenueData(d);
    }
   })
  });

  return (
    <div>
      <div className="w-full max-md:h-full" >
        <h2 className="mt-2 ml-4 text-2xl font-medium max-sm2:ml-1">DashBoard</h2>
        <div className=" grid grid-cols-4 gap-1 mt-5 ml-4 w-3/5  max-xl:w-[90%] max-lg:w-[90%]  max-md:grid-cols-2 max-sm2:ml-1">
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
      <div className="flex max-lg:flex-col w-full h-full  max-md:h-full">
        <RecentOrders />
        <ChartBars />
      </div>
    </div>
  );
};

export default Dashboard;
