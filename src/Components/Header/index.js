import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import NotificationBadge from "react-notification-badge/lib/components/NotificationBadge";
import { Effect } from "react-notification-badge";
import getOrders from "../../API";
import { getComments } from "../../API";

const Header = () => {
  const [comments, setComments] = useState(0);
  const [orders, setOrders] = useState(0);
  const [openMenu,setOpenMenu]=useState(false);
  const [dataNum,setDataNum]=useState(0);
  const [DataShow,setDataShow]=useState([]);
  
// console.log(openMenu);
  useEffect(() => {
    getComments().then((res) => {
     const value=res.comments?.map((val)=>{
      return ([
        val.body
      ])
     })

      setComments(value);
    });
    getOrders().then((res) => {
      const value=res.products?.map((val)=>{
        return([val.title +" has been ordered."])
      })
      setOrders(value);
    });
  });
//  console.log(comments);
//  console.log(orders);
  return (
    // <div>
      <div className=" flex items-center justify-between h-[10vh] relative bg-red-200">
        {/* <div className="ml-8 mt-1 w-2/4"> */}
          <h1 className="text-2xl ml-8">Shopping Dashboard</h1>
        {/* </div> */}
        {/* <div> */}
        <div className="flex w-2/4 justify-end ">
          <div className={`${dataNum==2?'m-auto' :'mr-5'} ${dataNum==1?'hidden':""}  `}>
          {/* <div className="> */}
            <div>
              <NotificationBadge count={comments?comments.length:0} effect={Effect.SCALE} />
            </div>
            <div className="">
              <FontAwesomeIcon icon={faEnvelope} className="mr-5 text-3xl" onClick={()=>{
                if(dataNum<2){
                setOpenMenu(true);
              setDataNum(1);
              setDataShow(comments);
              
              }

                }
              } />
            </div>
            {/* <div className="h-[100vh] w-[15%] bg-red-500 z-50">
              <h2>Hello</h2>
            </div> */}
          </div>
          <div className={`${dataNum==1?'m-auto' :'mr-5'}  `}>
            <div>
              <NotificationBadge count={orders?orders.length:0} effect={Effect.SCALE}  />
            </div>
            <div >
              <FontAwesomeIcon icon={faBell} className="mr-5 text-3xl" onClick={()=>{ 
                if(dataNum!=1){
                setOpenMenu(true);
              setDataNum(2);
              setDataShow(orders);
              }

                }}/>
            </div>
            
          </div>
        </div>
        <div className={`${openMenu?'inline-block':'hidden'} w-[22%] h-[95vh] top-0 left-[78%] absolute bg-red-500 z-10 `}>
        <FontAwesomeIcon icon={faXmark} className="" onClick={()=>{setOpenMenu(false);
        setDataNum(0);
        setDataShow([])}}/>
         <div>
         <ul>
          {
            DataShow && DataShow.slice(0,Math.min(DataShow.length,15)).map((val)=>{
              return <li>{val}</li>
            })
          }
         </ul>
         </div>

         </div>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default Header;