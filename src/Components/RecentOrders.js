import React, { useEffect, useState } from "react";
import getOrders, { getRevenue } from "../API";
import ReactLoading from "react-loading";
// import {
//   Chart as ChartJS,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { Bar } from "react-chartjs-2";

import Chart from "chart.js/auto";
import DataTable from "react-data-table-component";


const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading,setisLoading]=useState(false);
  useEffect(() => {
    setisLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products?.splice(0, 5));
    }).finally(()=>{
      setisLoading(false);
    })
  }, []);

  if(isLoading)
   return <div className="flex justify-center items-center h-[60vh] w-2/4">
  <ReactLoading  type="spinningBubbles"   color="#764abc" height={100} width={100} />  
  </div>

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    maxWidth: "500px",
  },
  {
    name: "Price",
    selector: (row) => row.price,
    maxWidth: "150px",
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
    maxWidth: "150px",
  },
  
];
const dataList =
  dataSource &&
  dataSource.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    };
  });
const customStyles = {
  rows: {
    style: {
      minHeight: "45px",
      fontSize: "15px",
      // borderRight:'2px',
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: "bold",
      fontSize: "20px",
      display: "grid",
      gridTemplateColumns: "auto auto auto",

      "@media (max-width: 768px)": {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        fontSize: "15px",
      }, 
     
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      "@media (max-width: 768px)": {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        fontSize: "15px",
      }, 
    },
  },
 
};










  return (
    <div className="w-2/4 mr-5 max-lg:w-[80%] max-md:h-2/4">
      <h4 className="text-xl font-medium p-4 max-sm:text-lg">Recent Orders</h4>
      <DataTable
          columns={columns}
          data={dataList}
          customStyles={customStyles}
        />
    </div>
  );
};

export function ChartBars() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts?.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts?.map((cart) => {
        return cart.discountedTotal;
      });
      console.log(data);
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    aspectRatio:2/1.5,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Revenue Chart",
      },
      
    },
  };
  

  return (
    <div className="w-2/4 max-md:h-[40vh] max-md:w-[80vw]" >
      {/* <h4 >Revenue Chart</h4> */}
      <Bar options={options} data={revenueData} className={"h-full "}/>
    </div>
  );
}

export default RecentOrders;
